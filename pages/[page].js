import dynamic from 'next/dynamic';

const getCustomPath = ({theme, page}) => dynamic(
	() => import(`../content/themes/${theme}/pages/${page}`).catch(
		() => () => (
			`Hey there from ${page} :)`
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
