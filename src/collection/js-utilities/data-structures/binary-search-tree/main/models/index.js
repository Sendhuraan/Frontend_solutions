(function() {
	
	function Node(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	var publicAPI = {
		Node
	};

	module.exports = publicAPI;
	
})();
