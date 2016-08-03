import $ from 'jquery';
export const stickyMenu = () => {
	$(window).scroll(function (){
		if ($(this).scrollTop() >= 150) {
			$('.top-menu').addClass('sticky-menu');
			$('.top-menu__phone-block').addClass('top-menu__phone-block_visible');
		}else {
			$('.top-menu').removeClass('sticky-menu');
			$('.top-menu__phone-block').removeClass('top-menu__phone-block_visible');
		}
	});
};
