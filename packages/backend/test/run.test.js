let run;

describe('run() main function', () => {
	it('is a function', async () => {
		// eslint-disable-next-line global-require
		run = require('./run');
		expect(run instanceof Function).toBe(true);
	});

	it('can be called empty', async () => {
		return run();
	});
});
