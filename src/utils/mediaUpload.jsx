import { createClient } from "@supabase/supabase-js";

 const supabase = createClient(
    "https://dmmaprvmfgakjfwobuhl.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtbWFwcnZtZmdha2pmd29idWhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4MjQ5NzYsImV4cCI6MjA2NTQwMDk3Nn0.q57MkXS74hBcrqirs979JSyJeIUFpo3_Q-CZKKhWQYk"
  );

  export default function mediaUpload(file){
    const promise = new Promise(

         (resoleve,reject)=>{
         if (!file) {
      toast.error("No file selected");
      return;
    }
    const timeStamp = new Date().getTime()
    const newFileName = timeStamp+file.name

    supabase.storage.from(imeges).upload(newFileName, file, {
         cacheControl: "3600",
        upsert: false,
    }).then(
         ()=>{
            const url = supabase.storage.from("images").getPublicUrl(newFileName).data.publicUrl
            resoleve(url)
         }
    ).catch(
        (error)=>{
            console.log(error)
            reject("File Upload Failed")
        }
    )


    }
    )
   

    return promise
  }