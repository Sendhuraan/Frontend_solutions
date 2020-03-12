(function() {

	var { CountSheep } = require('./solution');

	var input = [true,  true,  true,  false,
				true,  true,  true,  true ,
				true,  false, true,  false,
				true,  false, false, true ,
				true,  true,  true,  true ,
				false, false, true,  true];

	var countSheep = new CountSheep(input);

	console.log(countSheep.index());
	
})();
