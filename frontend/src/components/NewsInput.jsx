import React, { useState } from 'react';

const NewsInput = ({ onPredict }) => {
  const [newsText, setNewsText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newsText.trim()) return;
    
    setIsLoading(true);
    await onPredict(newsText);
    setIsLoading(false);
  };

  const handleTextChange = (e) => {
    const text = e.target.value;
    setNewsText(text);
    setCharCount(text.length);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <div className="absolute top-3 left-3 flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <textarea
          value={newsText}
          onChange={handleTextChange}
          placeholder="Paste the news article or text you want to verify..."
          className="w-full h-48 p-4 pt-12 text-base border bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none resize-none transition-all duration-200 ease-in-out font-mono"
        />
        <div className="absolute bottom-3 right-3 text-sm text-gray-500">
          {charCount} characters
        </div>
      </div>
      <button
        type="submit"
        disabled={isLoading || !newsText.trim()}
        className="w-full px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] font-medium text-lg shadow-md hover:shadow-lg"
      >
        <div className="flex items-center justify-center space-x-2">
          {isLoading ? (
            <>
              <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Verify News</span>
            </>
          )}
        </div>
      </button>
    </form>
  );
};

export default NewsInput;
