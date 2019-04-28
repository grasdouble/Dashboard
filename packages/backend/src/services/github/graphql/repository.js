import { managePagination } from './commons';

export const listOfRepositories = (owner, isOrganization, pagination, customQuery) => {
	const page = managePagination(pagination);

	return `query {
      ${isOrganization ? 'organization' : 'user'}(login:"${owner}") {
        repositories(${page}) {
          edges {
            node {
              id
              name
              ${customQuery ? customQuery : ''}
            }
            cursor
          }
        }
      }
    }`;
};
