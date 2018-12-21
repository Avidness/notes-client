import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.section`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1em;
  border-top: 1px solid #464545; 
  background: #303030;
`;

const Footer = () => {
	return (
	  <FooterWrapper>
      <span>footer</span>
    </FooterWrapper>
	);
}
  
export default Footer;