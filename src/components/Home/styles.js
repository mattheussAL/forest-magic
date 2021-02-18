import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  margin: 148px 160px;
  color: #f5fcf9;

  @media (max-width: 870px) {
   & {
    margin: 160px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   }
 }

 @media (max-width: 570px) {
  & {
   margin: 160px 20px;
  }
 }

  h1 {
   font-size: calc(.1em + 5.5vw);
   margin-bottom: 6px;

   @media (max-width: 570px) {
    & {
     font-size: 45px;
    }
   }
 }

 p {
  font-size: calc(1em + .1vw);
  margin-bottom: 12px;
  margin-left: 8px;
  padding-right: 360px;

  @media (max-width: 1236px) {
   & {
    padding: 0;
   }
  }

  @media (max-width: 570px) {
   & {
    margin-left: 30px;
    margin-top: 18px;
    font-style: oblique;
    font-synthesis: unset;
   }
  }
 }
`;
