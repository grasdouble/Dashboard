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
