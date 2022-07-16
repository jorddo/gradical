import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { supabase } from 'utils/supabaseClient';
import { request } from 'utils/graphql';
import LISTS_QUERY from 'graphql/queries/lists.gql';
import { List, ListItem } from '@chakra-ui/react';

const Home = ({ lists }) => {
  // 3. props.lists
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Gradical</title>
        <meta name='description' content='a cute little app!' />
      </Head>
      <main>
        <h1>
          Welcome to the home page, bb.
          <Link href='/signup'>Sign Up</Link>
          <Link href='/login'>Login</Link>
        </h1>
        <List spacing={3}>
          {/* 4. Map through lists, coming from props */}
          {lists.map((list) => (
            <ListItem key={list.id}>
              {list.title}
              {list.description}
            </ListItem>
          ))}
        </List>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { lists } = await request(LISTS_QUERY); // 1. returns req.lists

  // 2. returns props.lists
  return {
    props: {
      lists,
    },
  };
}

export default Home;
