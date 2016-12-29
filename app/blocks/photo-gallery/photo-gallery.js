import $ from 'jquery';
export const func = () => {
	'use strict';
	// const photoBlock = $('.photo-gallery');
	const photoBox = $('.photo-gallery__item:nth-child(n+9)');
	const btnShowMore = $('.photo-gallery__show-more');
	btnShowMore.click(function (event) {
		event.preventDefault();
		if (!photoBox.is(':visible')) {
			photoBox.show(300);
			btnShowMore.html('Свернуть');
		}else {
			photoBox.hide(300);
			btnShowMore.html('Смотреть еще');
		}
	});
};
