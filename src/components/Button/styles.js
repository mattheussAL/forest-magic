import styled from 'styled-components';

export const ButtonBtn = styled.button`
 margin: ${({theme}) => theme === 'home' ? '20px 0 0 8px' : ''};
 padding: ${({theme}) => theme === 'home' ? '12px 36px' : '12px 30px'};

 border: none;
 border-radius: 4px;
 background-color: ${({theme}) => theme === 'web' ? 'transparent' : '#870206'};
 
 transition: all .3s ease-out;
 cursor: pointer;

 &:hover {
  background-color: #870206;
  font-weight: 400;
  transform: scale(1.2);
 }

 a {
  font-size: 16px;
  font-weight: ${({theme}) => theme === 'home' ? '600' : '500'};
  text-decoration: none;

  color: #F4FBF8;
  opacity: .9;

  @media (max-width: 570px) {
   font-size: 22px;
   font-weight: 700;
  }
 }

 @media (max-width: 570px) {
  margin-left: 0;
  padding: 16px 54px;
  margin-top: 45px;
 }


`;