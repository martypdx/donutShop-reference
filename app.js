// view - references to elements
var $shops = $('#shops');
var $detail = $('#detail');

// model - data
// shops

// initial state
for(var i = 0; i < shops.length; i++){
	var shop = shops[i];
	var $li = $('<li></li>')
		.text(shop.location)
		.appendTo($shops)
		.data('shop', shop)
		.click(function(){
			$detail.empty();
			var shop = $(this).data('shop');
			var $location = $('<span></span>').text(shop.location);
			var $customers = $('<span></span>').text(shop.customers);
			$detail.append($location).append($customers);
		});
}



// $detail.text( shops );
