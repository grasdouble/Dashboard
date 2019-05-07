/**
 * Return information for a specific project
 * @param {*} owner
 * @param {*} repository
 * @param {*} projectNumber
 * @param {*} customQuery
 */
export const projectInfo = (owner, repository, projectNumber, customQuery) => {
	return `query {
        repository(owner: "${owner}", name: "${repository}") {
            project(number: ${projectNumber}) {
                id
                name
                ${customQuery || ''}
            }
        }
    }`;
};

/**
 * Duplicated code
 * @param {string} login
 */
export const userInformations = login => `query {
    user(login: "${login}") {
      login
      name
      email
      company
      bio
      avatarUrl
      createdAt
      watching {
        totalCount
      }
      following {
        totalCount
      }
      followers {
        totalCount
      }
    }
  }`;
