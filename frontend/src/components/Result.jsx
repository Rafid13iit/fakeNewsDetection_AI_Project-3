import React from 'react';

const Result = ({ prediction }) => {
  if (!prediction) return null;

  const isReal = prediction.toLowerCase().includes('real');
  
  return (
    <div className={`mt-8 p-6 rounded-xl border transform transition-all duration-300 ease-in-out ${
      isReal ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : 'bg-gradient-to-r from-red-50 to-rose-50 border-red-200'
    }`}>
      <div className="flex items-center space-x-3 mb-4">
        <div className={`p-2 rounded-lg ${isReal ? 'bg-green-100' : 'bg-red-100'}`}>
          {isReal ? (
            <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          )}
        </div>
        <h3 className={`text-xl font-bold ${
          isReal ? 'text-green-800' : 'text-red-800'
        }`}>
          {isReal ? 'Likely Authentic News' : 'Possible Fake News'}
        </h3>
      </div>
      <p className={`text-base ${isReal ? 'text-green-700' : 'text-red-700'} pl-11`}>
        {prediction}
      </p>
    </div>
  );
};

export default Result;
