import { useState } from 'react'
import Tesseract from 'tesseract.js'
function Ocr({extractedtext}) {
  const [file , setfile] = useState();
  const [progress , setProgress] = useState(0);
  const [result , setResult] = useState("");
  const onFileChange = (e)=>{
    setfile(e.target.files[0])
  };
  
  const processImage = () => {
    Tesseract.recognize(
      file , 
      "eng" , 
      {logger: (result)=>{
        if (result.status === "recognizing text") {
          setProgress(result.progress);
        }
      }}
    ).then (({data:{text}})=>{
       setResult(text);
       extractedtext(text);
    })
  }
  return (
    <>
     <div className="flex flex-col gap-4">
      <input type="file" onChange={onFileChange} className="border border-gray-300 rounded p-2"/>
      <div>
        <input type="button" value="submit" onClick={processImage} className="border border-black px-4 py-2 rounded hover:bg-gray-100 transition-colors"/>
      </div>
      <div>
        <progress value={progress} max={1} className="w-full" />
      </div>
      {/* <div>
       // {result}
      </div> */}
     </div>
    </>
  )
}

export default Ocr;