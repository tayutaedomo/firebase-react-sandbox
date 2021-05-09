import React, { ReactNode, VFC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';

type Props = {
  children: ReactNode;
};

const DefaultLayout: VFC<Props> = (props) => {
  const { children } = props;

  return (
    <ChakraProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </ChakraProvider>
  );
};

export default DefaultLayout;
