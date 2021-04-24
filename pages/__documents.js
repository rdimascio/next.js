import Document, { Html, Head, Main, NextScript } from 'next/document';

const isDev = process.env.NODE_ENV === 'development';

class ZenHead extends Head {
    render() {
        const { head } = this.context;
        const { children } = this.props;

        return (
            <Head {...this.props}>
                {children}
                {head}
            </Head>
        );
    }
}

class ZenMain extends Main {
	render() {
		const { html } = this.context;
		return <div dangerouslySetInnerHTML={{ __html: html }} />;
	}
}

class ZenDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
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
