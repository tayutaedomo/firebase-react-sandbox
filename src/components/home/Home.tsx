import React, { VFC } from 'react';
import { Wrap, WrapItem } from '@chakra-ui/layout';

import HomeCard from './HomeCard';

const Home: VFC = () => {
  return (
    <>
      <Wrap p={{ base: 2, md: 5 }}>
        {cards.map((card) => (
          <WrapItem key={card.to} mx="auto">
            <HomeCard
              headline={card.headline}
              content={card.content}
              to={card.to}
            />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};

type Card = {
  headline: string;
  content: string;
  to: string;
};

const cards: Array<Card> = [
  {
    headline: 'Functions',
    content: 'Try firebase functions and Cloud Functions',
    to: '/functions',
  },
];

export default Home;
