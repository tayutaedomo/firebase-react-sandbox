import React, { ReactNode, VFC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import Header from './Header';

type Props = {
  children: ReactNode;
};

const DefaultLayout: VFC<Props> = (props) => {
  const { children } = props;

  return (
    <ChakraProvider>
      <Header />
      <main>{children}</main>
    </ChakraProvider>
  );
};

export default DefaultLayout;
