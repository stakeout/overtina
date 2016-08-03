import $ from 'jquery';
export const calculator = () => {
	function valParam() {
		const length = $('.calculator__input-field_length');
		const width = $('.calculator__input-field_width');
		const squareBox = $('.calculator__square-value');
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
		squareBox.html(square);
	}
	$('#calculator').on('click keyup', valParam);
};
