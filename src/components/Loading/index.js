import React from 'react';
import Lottie from 'react-lottie';
import loadingData from 'assets/images/loading.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid meet',
  },
};

function Loading({ loading, children }) {
  return (
    <div>
      {loading ? (
        <Lottie options={defaultOptions} height={50} width={100} />
      ) : (
        children
      )}
    </div>
  );
}

export default Loading;
