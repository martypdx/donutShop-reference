function createShops() {
	var shop;

	for(var i = 0; i < 3; i++) {
		shop = 'shop ' + (i + 1);
	}


	return [
		{ location: 'downtown', customers: 300 },
		{ location: 'hawthorn', customers: 200 },
		{ location: 'alberta', customers: 100 }
	];


}


var shops = createShops();

