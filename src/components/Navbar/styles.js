import styled from 'styled-components';

export const NavContainer = styled.nav`
 position: fixed;

 width: 100%;
 height: 80px;

 background: transparent;

 display: flex;
 align-items: center;
 justify-content: space-around;

 transition: all .3s ease-in-out;
 z-index: 99999;

 
 .menu-icon {
  display: none;
  transition: all .3s ease-in-out;

  &.active {
   position: absolute;

   top: 0;
   right: 0;
   width: 100vw;
   height: 100vh;

   background: #242424;
   
   svg {
    position: absolute;
    top: 18px;
    right: 12px;
   }
  }

  @media (max-width: 900px) {
   position: absolute;
   top: 24px;

   right: 12px;
   display: flex;

   svg {
    font-size: 2.5rem;
    color: #F4FBF8;
   }
  }
 }

 ul {
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
   position: absolute;
   visibility: hidden;
  }

  li {
   font-size: 16px;
   font-weight: 500;
   list-style: none;
   margin-right: 42px;
   transition: all .3s ease-out;

   &:hover { transform: scale(1.2) }

   a {
    color: #F4FBF8;
    text-decoration: none;
    opacity: .9;
   }
  }
 }
`;

export const Logo = styled.div`
 font-size: 2rem;
 font-weight: 500;
 outline: none;

 @media (max-width: 900px) {
  position: absolute;
  top: 20px;
  left: 20px;
 }

 a {
  color: #F4FBF8;
  text-decoration: none;
  letter-spacing: .1rem;
 }
`;

