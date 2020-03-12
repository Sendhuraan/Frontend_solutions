export const request = function(type) {
	return {
		type
	};
};

export const received = function(type, payload) {
	return {
		type,
		payload
	};
};

export const error = function(type) {
	return {
		type
	};
};
