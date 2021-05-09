import React, { VFC } from 'react';
import styled from 'styled-components';

const Footer: VFC = () => {
  return (
    <footer>
      <SFooter>© 2021 XXX</SFooter>
    </footer>
  );
};

const SFooter = styled.footer`
  /* background-color: #11999e; */
  color: #000;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export default Footer;
