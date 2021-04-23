import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		Providers.Email({
			server: process.env.EMAIL_SERVER,
			from: process.env.EMAIL_FROM,
			// maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
		}),
		Providers.GitHub({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET
		}),
	// ...add more providers here
	],

	// A database is optional, but required to persist accounts in a database
	database: {
		type: "postgres",
		host: process.env.DATABASE_HOST,
		port: process.env.DATABASE_PORT,
		username: process.env.DATABASE_USER,
		password: process.env.DATABASE_PASSWORD,
		database: process.env.DATABASE,
		ssl: true,
		extra: {
		  ssl: {
			rejectUnauthorized: false,
		  },
		},
	}
});
