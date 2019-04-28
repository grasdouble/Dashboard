import { managePagination } from './commons';

export const listOfRepositories = (owner, isOrganization, pagination, customQuery) => {
	const page = managePagination(pagination);

	const test = `query {
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
console.log(test);
    return test;
};
