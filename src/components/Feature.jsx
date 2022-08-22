import React from 'react';
import styled from 'styled-components';

import Phone from '../img/pexels-lisa-crop-removebg-preview.png';

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
`;
const Image = styled.img`
  width: 80%;
  height: auto;
  object-fit: cover;
`;

const Right = styled.div`
  width: 50%;
`;

const Title = styled.span``;
const SubTitle = styled.span``;
const Desc = styled.p``;
const Button = styled.button``;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={Phone} />
      </Left>
      <Right>
        <Title>
          <strong>good</strong> design
          <br />
          <strong>good</strong> business
        </Title>
        <SubTitle>We know tht good design means good business.</SubTitle>
        <Desc>We can help our clients succeed by creating brand identiti</Desc>
        <Button></Button>
      </Right>
    </Container>
  );
};

export default Feature;
