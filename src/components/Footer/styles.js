import styled from 'styled-components';

export const ContainerFooter = styled.div`
 position: absolute;
 bottom: 0;

 color: #F4FBF8;
 background: rgba(0, 0, 0, 0.5);

 width: 100vw;
 height: 120px;

 display: flex;
 align-items: center;
 justify-content: space-around;
`;

export const SocialMedia = styled.div`

 svg {
  font-size: 2rem;
  margin-left: 2rem;
  cursor: pointer;
  transition: all .2s ease-in;

  &:hover {
   color: #870206;
   transform: scale(1.1);
  }
 }
`;

export const Images = styled.div`
 ul {
  display: flex;
  align-items: center;
  justify-content: center;

   li {
    list-style: none;
    margin-right: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
     width: 100px;
     height: 90px;

     border: none;
     border-radius: 8px;

     cursor: pointer;
    }

    span {
     position: relative;
     font-size: 12px;
     opacity: .9;
     margin-left: 12px;
    }
   }
 }
`;

export const PlayButton = styled.div`
 font-size: 1.4rem;

 display: flex;
 align-items: center;
 justify-content: center;

 cursor: pointer;

 svg {
  font-size: 2rem;
 }
 
`;