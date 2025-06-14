import React from 'react'
import { generateGeminiResponse } from '../ImageProcessing/aiAnalysis'
import Ocr from '../ImageProcessing/Ocr'
import { useState } from 'react';

function Report() {
    const [summary, setSummary] = useState("");
    const handleExtractedText = async (text) => {
        const result = await generateGeminiResponse(text);
        // console.log("Summary from OpenAI:", result);  check if OpenAI responded
        setSummary(result);
    }
    
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary mb-4">
                        🧪 MedFusion: AI Health Report Analyzer
                    </h1>
                    <h2 className="text-xl text-gray-600 italic">
                        "Take a photo or upload your test report — let AI instantly decode your health data!"
                    </h2>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <Ocr extractedtext={handleExtractedText} />
                </div>

                {summary && (
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Analysis Results</h3>
                        <div className="prose max-w-none">
                            <p className="text-gray-700 whitespace-pre-wrap">{summary}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Report

// You're rendering the <Ocr /> component inside Report.jsx.

// You're passing a function called handleExtractedText as a prop named extractedtext.

// This is like saying:
// 👉 “Hey Ocr, here’s a function you can call when you're done extracting text.”

// Now inside the Ocr component:

// You receive props.extractedtext — which is that same function from Report.

// Later, in this code:

// You're using destructuring here to directly pull out extractedtext from the props object.

// Now inside Ocr, you can use extractedtext(...) as a regular function.