import React from 'react';
import styled from 'styled-components';
import logo from '../img/horizontal_on_white_by_logaster.png';

const Navbar = () => {
  return (
    <NavContainer>
      <Wrapper>
        <Left>
          <Logo>
            <img src={logo} alt="Company logo" />
          </Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Products</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <Button>Join Now</Button>
      </Wrapper>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  height: 120px;
  border-bottom: 2px solid crimson;
`;

const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  width: 200px;
  height: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Menu = styled.ul`
  display: flex;
`;
const MenuItem = styled.li`
  margin-right: 2rem;
  font-size: 20px;
  font-weight: bold;
  color: gray;

  &:last-child {
    margin-right: 0;
  }
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 0.7rem 1.4rem;
  color: white;
  background-color: crimson;
  cursor: pointer;
  font-weight: bold;
  border-radius: 0.65rem;
`;
