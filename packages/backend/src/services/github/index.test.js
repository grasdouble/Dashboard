import run from '../../../test/run';
import { routes } from './index';

describe('test paths', () => {
	it('/github/login/:login', async () => {
		await run(routes).alive(async api => {
			const res = await api.get('/github/login/defunkt');
			expect(res.body.user.name).toBe('Chris Wanstrath');
		});
	});
});
