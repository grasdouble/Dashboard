import server from 'server';
import { getUserInformations } from './queries';

const { get } = server.router;

export const routes = [
	get('/github/login/:login', async ctx => {
		const result = getUserInformations(ctx.params.login);
		return result;
	}),
];
