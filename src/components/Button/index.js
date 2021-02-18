import React from 'react';

import { ButtonBtn } from './styles';

function Button({ theme, children }) {
 return (
  <ButtonBtn theme={theme}>
   {children}
  </ButtonBtn>
 )
}

export default Button;