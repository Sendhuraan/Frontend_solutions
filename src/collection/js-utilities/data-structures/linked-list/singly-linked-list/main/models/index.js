(function() {
	
	function Node(data) {
		this.data = data;
		this.next = null;
	}

	var publicAPI = {
		Node
	};

	module.exports = publicAPI;
	
})();
