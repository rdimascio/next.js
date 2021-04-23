import React from 'react';
import { getProviders, getSession, csrfToken, signIn } from 'next-auth/client';

export default function Login ({ csrfToken, providers }) {
	return (
		<>
			<form method="post" action="/api/v1/auth/signin/email">
				<input
					name="csrfToken"
					type="hidden"
					defaultValue={csrfToken}
				/>
				<label>
					Email address
					<input type="text" id="email" name="email" />
				</label>
				<button type="submit">Sign in</button>
			</form>
			{
				providers && Object.values(providers).map((provider) => {
					if (provider.name === 'Email') {
						return;
					}

					return (
						<button key={provider.name} onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
					);
				})
			}
		</>
	);
}

export async function getServerSideProps(context) {
    return {
        props: {
            session: await getSession(context),
			providers: await getProviders(context),
			csrfToken: await csrfToken(context),
        },
    };
};
