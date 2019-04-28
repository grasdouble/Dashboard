import { managePagination } from './commons';

describe('test managePagination', () => {
	it('basic usage: First 5', () => {
		const pagination = {
			nbItem: undefined,
			isFirst: undefined,
			isAfter: undefined,
			cursor: undefined,
			orderBy: undefined,
			orderDirection: undefined,
		};

		const expectedResult = 'first:5';
		expect(managePagination(pagination)).toBe(expectedResult);

		pagination.nbItem = 5;
		pagination.isFirst = true;
		expect(managePagination(pagination)).toBe(expectedResult);
	});

	it('basic usage: Last 5', () => {
		const pagination = {
			nbItem: 5,
			isFirst: false,
			isAfter: undefined,
			cursor: undefined,
			orderBy: undefined,
			orderDirection: undefined,
		};

		const expectedResult = 'last:5';
		expect(managePagination(pagination)).toBe(expectedResult);
	});

	it('Use Cursor position: after it', () => {
		const pagination = {
			nbItem: 5,
			isFirst: true,
			isAfter: undefined,
			cursor: 'cursorRef',
			orderBy: undefined,
			orderDirection: undefined,
		};

		const expectedResult = 'first:5, after:"cursorRef"';
		expect(managePagination(pagination)).toBe(expectedResult);

		pagination.isAfter = true;
		expect(managePagination(pagination)).toBe(expectedResult);
	});

	it('Use Cursor position: before it', () => {
		const pagination = {
			nbItem: 5,
			isFirst: true,
			isAfter: false,
			cursor: 'cursorRef',
			orderBy: undefined,
			orderDirection: undefined,
		};

		const expectedResult = 'first:5, before:"cursorRef"';
		expect(managePagination(pagination)).toBe(expectedResult);
	});

	it('Use OrderBy: ASC', () => {
		const pagination = {
			nbItem: 5,
			isFirst: undefined,
			isAfter: undefined,
			cursor: undefined,
			orderBy: 'name',
			orderDirection: undefined,
		};

		const expectedResult = 'first:5, orderBy:{name, direction:ASC}';
		expect(managePagination(pagination)).toBe(expectedResult);

		pagination.orderDirection = 'ASC';
		expect(managePagination(pagination)).toBe(expectedResult);
	});

	it('Use OrderBy: DESC', () => {
		const pagination = {
			nbItem: 5,
			isFirst: undefined,
			isAfter: undefined,
			cursor: undefined,
			orderBy: 'name',
			orderDirection: 'DESC',
		};

		const expectedResult = 'first:5, orderBy:{name, direction:DESC}';
		expect(managePagination(pagination)).toBe(expectedResult);
	});

	it('Full test', () => {
		const pagination = {
			nbItem: 5,
			isFirst: false,
			isAfter: false,
			cursor: 'cursorRef',
			orderBy: 'id',
			orderDirection: 'DESC',
		};

		const expectedResult = 'last:5, before:"cursorRef", orderBy:{id, direction:DESC}';
		expect(managePagination(pagination)).toBe(expectedResult);
	});
});
