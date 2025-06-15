import React from 'react'
import { useState , useRef } from 'react';
function SymptomCheck({extractedText}) {
    const testareaREF = useRef(null);
    const handlecheck = ()=> {
        const text = testareaREF.current.value;
        console.log(text);
        extractedText(text);
    }
  return (
    <div>
    <h2 className="text-lg font-bold mb-2">🧠 AI Symptom Checker</h2>
    <textarea
      rows="4"
      className="w-full p-2 border rounded mb-2"
      placeholder="Describe your symptoms..."
      ref={testareaREF}
    />
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded"
      onClick={handlecheck}
    >
      Check Symptoms
    </button>
  </div>
  )
}

export default SymptomCheck