import fetch from 'node-fetch';

import { github as githubDefaultConfig } from './defaultConfig';
import { github as githubConfig } from '../../config';

import { userInformations } from './graphql/user';
import { listOfRepositories } from './graphql/repository';

const config = {
	...githubDefaultConfig,
	...githubConfig,
};

export const fetchGithub = async query =>
	fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${config.token}`,
		},
		body: JSON.stringify({ query }),
	})
		.then(response => response.json())
		.then(data => data.data || data.errors);

export const getUserInformations = async login => fetchGithub(userInformations(login));

export const getListOfRepositories = async (owner, isOrganization, pagination, customQuery) =>
	fetchGithub(listOfRepositories(owner, isOrganization, pagination, customQuery));
