/**
 * Get basic information related to a specified login name
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

export const listOfProjects = () => {
	// TODO Implement
};
export const listOfOrganizations = () => {
	// TODO Implement
};
export const listOfStar = () => {
	// TODO Implement
};
export const listOfFollowers = () => {
	// TODO Implement
};
export const listOfFollowing = () => {
	// TODO Implement
};
export const listOfNotification = () => {
	// TODO Implement
};
