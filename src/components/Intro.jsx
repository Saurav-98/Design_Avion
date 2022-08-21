import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  height: calc(100vh - 120px);
  background: red;
`;

const Intro = () => {
  return <Container>This is Intro</Container>;
};

export default Intro;
