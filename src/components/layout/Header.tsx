import React, { VFC } from 'react';
import {
  Heading,
  Flex,
  useDisclosure,
  IconButton,
  Box,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import MenuDrawer from './MenuDrawer';

const Header: VFC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
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
            <Box>
              <IconButton
                aria-label="Menu button"
                icon={<HamburgerIcon />}
                size="lg"
                variant="unstyled"
                display="inline-flex"
                onClick={onOpen}
                verticalAlign="baseline"
              />
              <Heading
                as="h1"
                size="lg"
                letterSpacing={'-.1rem'}
                display="inline-flex"
              >
                My sandbox with firebase x react
              </Heading>
            </Box>
          </header>
        </Flex>
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default Header;
