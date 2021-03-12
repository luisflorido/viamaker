import { Button } from '@material-ui/core';
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

function XButton({ loading, children, ...props }) {
  return (
    <Button {...props}>
      {loading ? (
        <Lottie options={defaultOptions} height={50} width={100} />
      ) : (
        children
      )}
    </Button>
  );
}

XButton.defaultProps = {
  loading: false,
};

export default XButton;
