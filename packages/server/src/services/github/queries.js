import fetch from 'node-fetch';

import { github as githubDefaultConfig} from './defaultConfig';
import { github as githubConfig } from '../../config';

import { userInformations } from './graphql/user';

const config = {
    ...githubDefaultConfig,
    ...githubConfig
};

const fetchGithub = async function(query) {
	const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: { 
            'Authorization': `Bearer ${config.token}`,
        },
        body: JSON.stringify({query}),
    })
    .then(response => response.json())
    .then(data => data.data);

	return response;
};

export const getUserInformations = async function(login) {
	const response = await fetchGithub(userInformations(login));
	return response;
};