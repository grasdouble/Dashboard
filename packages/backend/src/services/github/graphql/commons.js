export const managePagination = ({ nbItem, isFirst, isAfter, cursor }) => {
	let count = 5;
	if (nbItem > 20) {
		console.warn(
			'The maximum value authorized for the pagination is 20. the default value is used: ${count}',
		);
	} else {
		count = nbItem;
	}

	const order = isFirst ? `first:${count}` : `last:${count}`;

	let direction = '';
	if (cursor) {
		direction = isAfter ? `, after:"${cursor}"` : `, before:"${cursor}"`;
	}

	return order + direction;
};
