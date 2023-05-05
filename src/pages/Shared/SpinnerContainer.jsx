import React from 'react';
import { Audio, RotatingLines } from 'react-loader-spinner';

const SpinnerContainer = () => {
    return (
        <div className="mt-5 flex justify-center">
        <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
      </div>
        
    );
};

export default SpinnerContainer;