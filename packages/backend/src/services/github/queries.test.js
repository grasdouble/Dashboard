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

	it('function getListOfRepositories: User', async () => {
		const owner = 'defunkt';

		const data = await getListOfRepositories(owner, false, pagination);
		expect(data).toBeDefined;
		expect(data.user).toBeDefined;
		expect(data.repositories).toBeDefined;
	});

	it('function getListOfRepositories: Organization', async () => {
		const owner = 'grasdouble';

		const data = await getListOfRepositories(owner, true, pagination);
		expect(data).toBeDefined;
		expect(data.organization).toBeDefined;
		expect(data.repositories).toBeDefined;
	});
});
