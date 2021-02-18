import styled from 'styled-components';
import Image from '../assets/florest.jpg';

export const Layout = styled.div`
 width: 100vw;
 height: 100vh;

 background-image: url(${Image});
 background-size: cover;
 background-position: center;

 @media screen and (max-width: 540px) {
  background-position-x: 1200px;
 }
`;
