import React from 'react';
import styled from 'styled-components';

const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: #4e6bff;
  opacity: 0.7;
  position: absolute;
  top: 140px;
  left: -60px;
  z-index: -2;

  animation: square 20s linear alternate;

  @keyframes square {
    to {
      transform: translate(100vw, 80vh);
    }
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ff97af;
  border-radius: 50%;
  position: absolute;
  top: 300px;
  left: -100px;
  z-index: -2;

  animation: circle 12s linear alternate;

  @keyframes circle {
    to {
      transform: translate(100vw, 10px);
    }
  }
`;
const Rectangle = styled.div`
  width: 50px;
  height: 100px;
  background-color: #669966;
  opacity: 0.5;

  position: absolute;
  top: 400px;
  left: -200px;
  z-index: -2;

  animation: circle 24s linear alternate;

  @keyframes circle {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`;
const AnimatedShaped = () => {
  return (
    <>
      <Square />
      <Circle />
      <Rectangle />
    </>
  );
};

export default AnimatedShaped;
