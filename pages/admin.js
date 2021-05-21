import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Login from '../core/frontend/login';
import { useSession, getSession, getProviders } from 'next-auth/client';

const Editor = dynamic(
    () => import('../core/server/Editor'),
    {
        ssr: false
    }
);

export default function Admin ({providers, config}) {
  const [ session ] = useSession();
  const router = useRouter();

  return !session ? <Login providers={providers} /> : <Editor />;
}

export async function getServerSideProps(context) {
    return {
        props: {
            session: await getSession(context),
            providers: await getProviders(context),
        },
    };
}
