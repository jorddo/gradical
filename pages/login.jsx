import { Button, Flex, Heading, Input } from '@chakra-ui/react';

const Login = () => (
  <Flex height='100vh' alignItems='center' justifyContent='center'>
    <Flex direction='column' background='gray.200' p={12} rounded={6}>
      <Heading mb={6}>Login!</Heading>
      <Input placeholder='Email' variant='filled' type='email' mb={3} />
      <Input placeholder='Password' variant='filled' type='password' mb={6} />
      <Button>Login</Button>
    </Flex>
  </Flex>
);

export default Login;
