import $ from 'jquery';
export const sideButtons = () => {
	const calculator = $('.side-buttons__button_calculator');
	const specialist = $('.side-buttons__button_specialist');
	const phoneUs = $('.side-buttons__button_phone-us');
	const specialistPopup = $('.specialist-call-form');
	const overlay = $('.overlay');
	calculator.on('click', function (e){
		e.preventDefault();
		overlay.show(300);
	});
	specialist.on('click', function (e){
		e.preventDefault();
		overlay.show(300);
		specialistPopup.show(500);
	});
	phoneUs.on('click', function (e){
		e.preventDefault();
		overlay.show(300);
	});
	$(window).on('keydown', function (e){
		if (e.keyCode === 27) {
			overlay.hide(300);
			specialistPopup.hide(300);
		}
	});
	overlay.on('click', function (){
		$(this).hide(300);
		specialistPopup.hide(300);
	});
};
