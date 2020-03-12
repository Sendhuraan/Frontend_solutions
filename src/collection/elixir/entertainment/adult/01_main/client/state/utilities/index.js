import uuidv4 from 'uuid/v4';

export const generateUniqueID = function() {
	return uuidv4();
};

export const hasKeyInStorage = function(key) {
	return Boolean(localStorage.getItem(key));
};

export const getFromStorage = function(key) {
	return JSON.parse(localStorage.getItem(key));
};

export const setToStorage= function(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
};
