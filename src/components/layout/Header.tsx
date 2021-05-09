import React, { VFC } from 'react';
import { Heading, Flex } from '@chakra-ui/react';

const Header: VFC = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.0rem"
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <header>
          <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
            My sandbox with firebase x react
          </Heading>
        </header>
      </Flex>
    </Flex>
  );
};

export default Header;
