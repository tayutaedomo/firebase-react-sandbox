import React, { VFC } from 'react';
import { Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

import { callEchoAsia, callEchoUs } from '../../utils/firebase';

const Functions: VFC = () => {
  const onEchoUsClick = () => {
    callEchoUs();
  };

  const onEchoAsiaClick = () => {
    callEchoAsia();
  };

  return (
    <Box>
      <Button onClick={onEchoUsClick} colorScheme="teal">
        Call firebase_echo_us
      </Button>
      <Button onClick={onEchoAsiaClick} colorScheme="teal">
        Call firebase_echo_asia
      </Button>
    </Box>
  );
};

export default Functions;
