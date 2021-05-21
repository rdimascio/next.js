import dynamic from 'next/dynamic';
import FourOhFour from '../core/frontend/404';

const getCustomPath = ({theme, page}) => dynamic(
	() => import(`../content/themes/${theme}/pages/${page}`).catch(
		() => () => (
			<FourOhFour />
		)
	),
    {
        loading: () => null,
    }
);

export default function Page ({config, currentPage, query}) {
    const CustomPage = getCustomPath({
        theme: config.theme,
        page: currentPage,
    });

    return <CustomPage {...query} />;
}
