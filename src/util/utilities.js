export const checkItemInArray = (arr, item) =>
	Boolean(arr.filter((arrItem) => arrItem._id === item._id).length);

export const getObjectPropertyCount = (arr, prop) =>
	arr.reduce((acc, { [prop]: propName }) => {
		if (acc[propName]) {
			return { ...acc, [propName]: acc[propName] + 1 };
		}
		return { ...acc, [propName]: 1 };
	}, {});
