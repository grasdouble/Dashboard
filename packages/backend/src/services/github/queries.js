import fetch from 'node-fetch';

import { github as githubDefaultConfig } from './defaultConfig';
import { github as githubConfig } from '../../config';

import { userInformations } from './graphql/user';
import { listOfRepositories } from './graphql/repository';

const config = {
	...githubDefaultConfig,
	...githubConfig,
};

export async function fetchGithub(query) {
	const result = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${config.token}`,
		},
		body: JSON.stringify({ query }),
	})
		.then(response => response.json())
		.then(data => data.data || data.errors);

	return result;
}

export async function getUserInformations(login) {
	const response = await fetchGithub(userInformations(login));
	return response;
}

export async function getListOfRepositories(owner, isOrganization, pagination, customQuery) {
	const response = await fetchGithub(
		listOfRepositories(owner, isOrganization, pagination, customQuery),
	);
	return response;
}
