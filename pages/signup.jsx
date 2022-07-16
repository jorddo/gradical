import { Button, Flex, Heading, Input } from '@chakra-ui/react';

const Signup = () => (
  <Flex height='100vh' alignItems='center' justifyContent='center'>
    <Flex direction='column' background='gray.200' p={12} rounded={6}>
      <Heading mb={6}>Sign Up!</Heading>
      <Input placeholder='Email' variant='filled' type='email' mb={3} />
      <Input placeholder='Password' variant='filled' type='password' mb={6} />
      <Button>Sign Up</Button>
    </Flex>
  </Flex>
);

export default Signup;
