import dynamic from 'next/dynamic';

const DefaultHome = dynamic(() => import('../core/frontend/home'));

export default function Home ({ config }) {
	const Home = dynamic(
		() => import(`../content/themes/${config.theme}/pages/home`).catch(
			() => () => <DefaultHome />
		),
	);

	return <Home />;
};
