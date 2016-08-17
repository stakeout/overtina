import $ from 'jquery';
export const calculator = () => {
	const length = $('#length');
	const width = $('#width');
	const squareBox = $('.calculator__square-value');
	const priceField = $('.calculator__full-price');
	const corners = $('#corners');
	const lamps = $('#lamps');
	const ducts = $('#ducts');
	const priceList = [4.5, 5, 5.5, 6, 6, 7, 9, 9, 8, 9, 8, 9, 12, 20, 15, 23, 5];
	const cornerPrice = 2;
	const lampPrice = 6;
	const ductPrice = 5;
	const currencyDollar = 2;
	$('#length, #width').bind('input', function () {
		if (this.value.match(/[^0-9.]/g)) {
			this.value = this.value.replace(/[^0-9.]/g, '');
		}
	});
	$('#lamps, #corners, #ducts').bind('input', function () {
		if (this.value.match(/[^0-9]/g)) {
			this.value = this.value.replace(/[^0-9]/g, '');
		}
	});

	function valParam() {
		const square = parseFloat(length.val() * width.val());
		const perimeter = length.val() * 2 + width.val() * 2;
		const selected = $('.calculator__select-item:selected');
		const selectedPrice = selected.val();
		const cornersValue = corners.val();
		const lampsValue = lamps.val();
		const ductsValue = ducts.val();
		// получаем площадь помещения
		squareBox.html(parseFloat(square).toFixed(2));
		// профиль
		// switch (x){
		//  case x = 0:
		//  case x = 12:
		//      price = (priceList[x] * square + perimeter * 2);
		//      break;
		//  case 13:
		//  case 14:
		//      price = (priceList[x] * square + perimeter * 3);
		//      break;
		//  case 15:
		//      price = (priceList[x] * square + perimeter * 4);
		//      break;
		//  case 16:
		//      price = (priceList[x] * square + perimeter * 6);
		//      break;
		//  case 17:
		//      price = (priceList[x] * square + perimeter * 7);
		//      break;
		// }
		let perimeterPrice = 0;
		if (selectedPrice >= 0 && selectedPrice <= 12) {
			perimeterPrice = 2;
			// тканевые потолки
		}else if (selectedPrice >= 13 && selectedPrice <= 14) {
			perimeterPrice = 3;
			// натяжная стена ПВХ
		}else if (selectedPrice === 15) {
			perimeterPrice = 4;
			// натяжная стена ткань
		}else if (selectedPrice === 16) {
			perimeterPrice = 6;
			// парящий потолок
		}else {
			perimeterPrice = 7;
		}
		let price = priceList[selectedPrice] * square + perimeter * perimeterPrice;
		if (square !== 0.00) {
			if (lampsValue > 1) {
				price += (lampsValue - 1) * lampPrice;
			}
			if (ductsValue > 1) {
				price += (ductsValue - 1) * ductPrice;
			}
			if (cornersValue > 4) {
				price += (cornersValue - 4) * cornerPrice;
			}
		}
		priceField.html(parseFloat(price * currencyDollar).toFixed(2));
	}
	$('#calculator').on('input keyup', valParam);
};
