/* eslint-disable import/prefer-default-export */
import server from 'server';
import { getUserInformations } from './queries';

const { get } = server.router;

export const routes = [
	get('/github/login/:login', async ctx => getUserInformations(ctx.params.login)),
];
