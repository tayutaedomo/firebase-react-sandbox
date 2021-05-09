import React, { VFC } from 'react';
import { Wrap, WrapItem } from '@chakra-ui/layout';

import HomeCard from './HomeCard';

const Home: VFC = () => {
  return (
    <>
      <Wrap p={{ base: 2, md: 5 }}>
        {[1, 2].map((index) => (
          <WrapItem key={index} mx="auto">
            <HomeCard headline="Headline" content="Content" to={`/${index}`} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};

export default Home;
