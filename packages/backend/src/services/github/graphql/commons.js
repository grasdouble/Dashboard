/* eslint-disable import/prefer-default-export */
export const managePagination = ({
	nbItem = 5,
	isFirst = true,
	isAfter = true,
	cursor,
	orderBy,
	orderDirection,
}) => {
	let count = 5;
	if (nbItem > 20) {
		// eslint-disable-next-line no-console
		console.warn(
			`The maximum value authorized for the pagination is 20. the default value is used: ${count}`,
		);
	} else {
		count = nbItem;
	}

	const startFrom = isFirst ? `first:${count}` : `last:${count}`;

	// PAGINATION
	let pagination = '';
	if (cursor) {
		pagination = isAfter ? `, after:"${cursor}"` : `, before:"${cursor}"`;
	}

	// ORDER
	let order = '';
	if (orderBy) {
		order = `, orderBy:{${orderBy}, direction:${
			orderDirection === 'DESC' ? orderDirection : 'ASC'
		}}`;
	}

	return startFrom + pagination + order;
};
