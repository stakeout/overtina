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
		let price;
		// получаем площадь помещения
		squareBox.html(parseFloat(square).toFixed(2));
		// профиль
		if (selectedPrice >= 0 && selectedPrice <= 12) {
			price = (priceList[selectedPrice] * square + perimeter * 2);
		// тканевые потолки
		}else if (selectedPrice >= 13 && selectedPrice <= 14){
			price = (priceList[selectedPrice] * square + perimeter * 3);
		// натяжная стена ПВХ
		}else if (selectedPrice === 15){
			price = (priceList[selectedPrice] * square + perimeter * 4);
		// натяжная стена ткань
		}else if (selectedPrice === 16){
			price = (priceList[selectedPrice] * square + perimeter * 6);
		// парящий потолок
		}else {
			price = (priceList[selectedPrice] * square + perimeter * 7);
		}
		if (lampsValue > 1 && square !== 0.00) {
			price += (lampsValue - 1) * lampPrice;
		}
		if (ductsValue > 1 && square !== 0.00) {
			price += (ductsValue - 1) * ductPrice;
		}
		if (cornersValue > 4 && square !== 0.00) {
			price += (cornersValue - 4) * cornerPrice;
		}
		priceField.html(parseFloat(price * currencyDollar).toFixed(2));
	}
	$('#calculator').on('input keyup', valParam);
};
