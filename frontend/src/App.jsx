import React, { useState } from 'react';
import NewsInput from './components/NewsInput';
import Result from './components/Result';

const App = () => {
  const [prediction, setPrediction] = useState('');

  const predictNews = async (newsText) => {
    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newsText }),
      });
      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error('Error:', error);
      setPrediction('Error analyzing the news. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Fake News Detector
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Verify the authenticity of news articles using advanced AI analysis
            </p>
          </div>
          <NewsInput onPredict={predictNews} />
          <Result prediction={prediction} />
        </div>
      </div>
    </div>
  );
};
  
  export default App;
