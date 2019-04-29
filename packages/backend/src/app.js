// Include the server in your file
import server from 'server';

import { routes as githubRoutes } from './services/github';

const { get } = server.router;
const { header } = server.reply;

const cors = [
	() => header('Access-Control-Allow-Origin', '*'),
	() => header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'),
	ctx => (ctx.method.toLowerCase() === 'options' ? 200 : false),
];

server(
	{
		port: 4000,
	},
	cors,
	[get('/', () => 'Hello world'), ...githubRoutes],
);
