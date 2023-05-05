import React from 'react';

const SpinnerContainer = () => {
    return (
        <div className="mt-5 text-center">
        <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
        <span className="sr-only">Loading...</span>
      </div>
        </div>
    );
};

export default SpinnerContainer;