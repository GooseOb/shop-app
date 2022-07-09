export const objToLS = <T>(key: string, value: T) => {
	localStorage.setItem(key, JSON.stringify(value));
};

export const objFromLS = <T>(key: string) => {
	const str = localStorage.getItem(key);
	return str && JSON.parse(str) as T;
};

export const createLS = <T>(key: string) => ({
	set: (value: T) => objToLS(key, value),
	get: () => objFromLS<T>(key)
});