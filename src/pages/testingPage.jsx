import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Testing() {
  const [file, setFile] = useState(null);

  const supabase = createClient(
    "https://dmmaprvmfgakjfwobuhl.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtbWFwcnZtZmdha2pmd29idWhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4MjQ5NzYsImV4cCI6MjA2NTQwMDk3Nn0.q57MkXS74hBcrqirs979JSyJeIUFpo3_Q-CZKKhWQYk"
  );

  async function handleUpload() {
    if (!file) {
      toast.error("No file selected");
      return;
    }

    const fileName = file.name;
    const arr = fileName.split(".");
    const fileExtension = arr[arr.length - 1];
    const newFilename = `${new Date().getTime()}-${fileName.replace(/\s+/g, "-")}`;

    const { data, error } = await supabase.storage
      .from("images")
      .upload(newFilename, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.log("File upload failed:", error.message);
      toast.error(`Upload failed: ${error.message}`);
    } else {
      console.log("File upload successful:", data);
      toast.success("File uploaded successfully!");

      const publicUrl = supabase
        .storage
        .from("images")
        .getPublicUrl(newFilename)
        .data
        .publicUrl;

      toast.success(`URL: ${publicUrl}`);
    }
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <input
        className="bg-amber-500 m-5 rounded-3xl h-9 p-1 text-center"
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <button
        onClick={handleUpload}
        className="bg-gray-700 text-white p-2 rounded-lg"
      >
        Upload
      </button>
    </div>
  );
}
