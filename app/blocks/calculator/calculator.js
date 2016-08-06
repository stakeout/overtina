import $ from 'jquery';
export const calculator = () => {
	const length = $('.calculator__input-field_length');
	const width = $('.calculator__input-field_width');
	const squareBox = $('.calculator__square-value');
	function priceParam() {
		const elems = $('.calculator__select-item');
		const priceValue = {
			'value1': 1.3,
			'value2': 1.7,
			'value3': 2.1
		};
		for (let i = 0; i < elems.length; i++) {
			console.log(elems[i]);

		}
	}
	function valParam() {
		$('.calculator__input-field_length, .calculator__input-field_width').bind('change keyup input click', function () {
			if (this.value.match(/[^0-9.]/g)) {
				this.value = this.value.replace(/[^0-9.]/g, '');
			}
		});
		$('.calculator__input-field_lamps, .calculator__input-field_corners, .calculator__input-field_ducts').bind('change keyup input click', function () {
			if (this.value.match(/[^0-9]/g)) {
				this.value = this.value.replace(/[^0-9]/g, '');
			}
		});
		const square = parseFloat(length.val() * width.val()).toFixed(2);
		const perimeter = parseFloat(length.val() * 2 + width.val() * 2).toFixed(2);
		squareBox.html(square);
		console.log(perimeter);
	}
	$('#calculator').on('input', valParam);

};
