import Head from 'next/head'

export default function Home() {

  const {user, signin, signout} = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </div>
  )
}
