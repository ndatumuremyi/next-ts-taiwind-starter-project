import Head from 'next/head';
import LoginActivity from '@/modules/activites/Login';

const login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginActivity />
    </>
  );
};

export default login;
