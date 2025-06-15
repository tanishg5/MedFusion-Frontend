import React, { useState } from 'react'
import { generateResponse } from '../checker/ai';
import SymptomCheck from '../checker/SymptomCheck';

function AiChecker() {
    const [summary , setSummary] = useState("");
    const SymptomChecker = async(text)=>{
        const result = await generateResponse(text);
        setSummary(result);
    }
  return (
    <div>
       <SymptomCheck extractedText={SymptomChecker}/>
       {summary && (
   <div className="mt-4 bg-gray-100 p-3 rounded">
    <strong>AI Suggestion:</strong>
    <p>{summary}</p>
  </div>
)}

    </div>
  )
}

export default AiChecker