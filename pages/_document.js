import Document, { Html, Head, Main, NextScript } from 'next/document';
import config from '../.zen/config.json';

const isDev = process.env.NODE_ENV === 'development';

class ZenDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang={config.language}>
				<Head />
				<body>
					<Main />
					{isDev && <NextScript />}
				</body>
			</Html>
		);
	}
}

export default ZenDocument;
