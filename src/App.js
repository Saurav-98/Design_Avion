import styled from 'styled-components';
import AnimatedShaped from './components/AnimatedShaped';
import Intro from './components/Intro';
import Navbar from './components/Navbar';

function App() {
  return (
    <Container>
      <Navbar />
      <Intro />
      <IntroShape />
      <AnimatedShaped />
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const IntroShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(100% 0%, 84% 0%, 61% 100%, 100% 100%);
  background-color: crimson;
  z-index: -1;
`;
