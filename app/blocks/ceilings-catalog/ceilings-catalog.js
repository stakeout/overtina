import $ from 'jquery';
export const ceilingsCatalog = () => {
	const dropDowns = $('.ceilings-catalog__wrapper');
	const target = $('.ceilings-catalog__accordin-title');
	let currentlyAnimating = false;
	target.click(function (){
		if (currentlyAnimating) {
			return;
		}
		currentlyAnimating = true;
		dropDowns.slideUp(500);
		$(this).next().slideDown(500).promise().done(function () {
			currentlyAnimating = false;
		});
	});
};
