import React, { VFC } from 'react';
import { Wrap, WrapItem } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

import {
  callEchoAsia,
  callEchoUs,
  predictCategory,
} from '../../utils/firebase';

const Functions: VFC = () => {
  const onEchoUsClick = () => {
    callEchoUs();
  };

  const onEchoAsiaClick = () => {
    callEchoAsia();
  };

  const onPredictClick = () => {
    predictCategory();
  };

  return (
    <Wrap p={2}>
      <WrapItem>
        <Button onClick={onEchoUsClick} colorScheme="teal">
          Call firebase_echo_us
        </Button>
      </WrapItem>
      <WrapItem>
        <Button onClick={onEchoAsiaClick} colorScheme="teal">
          Call firebase_echo_asia
        </Button>
      </WrapItem>
      <WrapItem>
        <Button onClick={onPredictClick} colorScheme="teal">
          Call predict_category
        </Button>
      </WrapItem>
    </Wrap>
  );
};

export default Functions;
