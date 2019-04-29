import { getUserInformations, getListOfRepositories } from './queries';

describe('test user queries', () => {
	it('function getUserInformations', () => {
		const login = 'defunkt';
		return getUserInformations(login).then(data => {
			expect(data.user).toBeDefined();
			expect(data.user.login).toBe(login);
			expect(data.user.avatarUrl).toBeDefined();
			expect(data.user.bio).toBeDefined();
			expect(data.user.company).toBeDefined();
			expect(data.user.createdAt).toBeDefined();
			expect(data.user.email).toBeDefined();
			expect(data.user.followers).toBeDefined();
			expect(data.user.following).toBeDefined();
			expect(data.user.name).toBeDefined();
			expect(data.user.watching).toBeDefined();
		});
	});
});

describe('test repositorie queries', () => {
	const pagination = {
		nbItem: 2,
		isFirst: true,
		isAfter: true,
		cursor: null,
	};

	const customQuery = 'createdAt';

	it('function getListOfRepositories: User', async () => {
		const owner = 'defunkt';

		const data = await getListOfRepositories(owner, false, pagination, undefined);
		expect(data).toBeDefined();
		expect(data.user).toBeDefined();
		expect(data.user.repositories).toBeDefined();
		expect(data.user.repositories.edges[0].node.name).toBeDefined();
	});

	it('function getListOfRepositories: Organization', async () => {
		const owner = 'grasdouble';

		const data = await getListOfRepositories(owner, true, pagination, undefined);
		expect(data).toBeDefined();
		expect(data.organization).toBeDefined();
		expect(data.organization.repositories).toBeDefined();
		expect(data.organization.repositories.edges[0].node.name).toBeDefined();
	});

	it('function getListOfRepositories: User, with customQuery', async () => {
		const owner = 'defunkt';

		const data = await getListOfRepositories(owner, false, pagination, customQuery);
		expect(data).toBeDefined();
		expect(data.user).toBeDefined();
		expect(data.user.repositories).toBeDefined();
		expect(data.user.repositories.edges[0].node.name).toBeDefined();
		expect(data.user.repositories.edges[0].node.createdAt).toBeDefined();
	});

	it('function getListOfRepositories: Organization, with customQuery', async () => {
		const owner = 'grasdouble';

		const data = await getListOfRepositories(owner, true, pagination, customQuery);
		expect(data).toBeDefined();
		expect(data.organization).toBeDefined();
		expect(data.organization.repositories).toBeDefined();
		expect(data.organization.repositories.edges[0].node.name).toBeDefined();
		expect(data.organization.repositories.edges[0].node.createdAt).toBeDefined();
	});
});
