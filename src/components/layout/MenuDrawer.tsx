import React, { VFC } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/modal';
import { Button } from '@chakra-ui/button';

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

const MenuDrawer: VFC<Props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
        <DrawerBody>
          <Button w="100%" mb={2}>
            Home
          </Button>
          <Button w="100%" mb={2}>
            PageA
          </Button>
          <Button w="100%" mb={2}>
            PageB
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;
