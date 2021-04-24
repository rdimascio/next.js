import React from 'react';
import { getProviders, getSession, csrfToken, signIn } from 'next-auth/client';

export default function Login ({ csrfToken, providers }) {
	return (
		<div>
			<div>
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
				<h5>or</h5>
				<form method="post" action="/api/v1/auth/signin/email">
					<input
						name="csrfToken"
						type="hidden"
						defaultValue={csrfToken}
					/>
					<label htmlFor="email" className="hidden">Email address</label>
					<input type="text" id="email" name="email" />
					<button type="submit">Sign in</button>
				</form>
			</div>
		</div>
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
