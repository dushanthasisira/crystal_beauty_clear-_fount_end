import { createClient } from "@supabase/supabase-js";
// Optional: import toast if you're using it
// import { toast } from 'react-toastify';

const supabase = createClient(
  "https://dmmaprvmfgakjfwobuhl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtbWFwcnZtZmdha2pmd29idWhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4MjQ5NzYsImV4cCI6MjA2NTQwMDk3Nn0.q57MkXS74hBcrqirs979JSyJeIUFpo3_Q-CZKKhWQYk"
);

export default function mediaUpload(file) {
  return new Promise(async (resolve, reject) => {
    if (!file) {
      // If using react-toastify
      // toast.error("No file selected");
      console.error("No file selected");
      return reject("No file selected");
    }

    const timeStamp = new Date().getTime();
    const newFileName = `${timeStamp}_${file.name}`;
    const bucket = "images";

    try {
      const { error } = await supabase.storage.from(bucket).upload(newFileName, file, {
        cacheControl: "3600",
        upsert: false,
      });

      if (error) {
        console.error(error);
        return reject("File Upload Failed");
      }

      const { data } = supabase.storage.from(bucket).getPublicUrl(newFileName);

      if (data?.publicUrl) {
        resolve(data.publicUrl);
      } else {
        reject("Could not retrieve public URL");
      }
    } catch (err) {
      console.error(err);
      reject("Unexpected error occurred");
    }
  });
}
