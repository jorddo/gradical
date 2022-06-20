import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
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
