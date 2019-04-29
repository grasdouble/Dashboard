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

export const listOfProjects = () => {};
export const listOfOrganizations = () => {};
export const listOfStar = () => {};
export const listOfFollowers = () => {};
export const listOfFollowing = () => {};
export const listOfNotification = () => {};
