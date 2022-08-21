import React from 'react';
import styled from 'styled-components';
import woman from '../img/woman-3-removebg-preview.png';

const Container = styled.section`
  height: calc(100vh - 120px);
  display: flex;
  padding: 2rem;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Right = styled.div`
  width: 40%;
`;

const Title = styled.h1`
  font-size: 60px;
  width: 60%;
`;
const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 2rem;
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
`;
const Button = styled.button`
  padding: 1rem;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;
const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Desc>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
        </Desc>
        <Info>
          <Button>Start A Project</Button>
          <Contact>
            <Phone> Call Us (012) 345 - 6789 </Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={woman} alt={'Woman Photo'} />
      </Right>
    </Container>
  );
};

export default Intro;
