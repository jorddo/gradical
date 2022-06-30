import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { supabase } from 'utils/supabaseClient';

export default function Home() {
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
          <Link href='/Signup'>Hello</Link>
        </h1>
      </main>
    </div>
  );
}
