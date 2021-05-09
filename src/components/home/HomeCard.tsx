import React, { ReactNode, VFC } from 'react';
import { Box, Heading, Stack, Text } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Button } from '@chakra-ui/button';

type Props = {
  headline: string;
  content: string | ReactNode;
  to: string;
};

const HomeCard: VFC<Props> = (props) => {
  const { headline, content, to } = props;

  return (
    <Box
      maxW={'445px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}
    >
      <Stack>
        <Heading
          color={useColorModeValue('gray.700', 'white')}
          fontSize={'2xl'}
          fontFamily={'body'}
        >
          {headline}
        </Heading>
        <Text color={'gray.500'}>{content}</Text>
      </Stack>
      <Button
        w={'full'}
        mt={4}
        colorScheme="teal"
        variant="outline"
        rounded={'md'}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }}
      >
        View {to}
      </Button>
    </Box>
  );
};

export default HomeCard;
