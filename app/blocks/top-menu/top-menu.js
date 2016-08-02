import $ from 'jquery';
export const stickyMenu = () => {
	$(window).scroll(function (){
		if ($(this).scrollTop() >= 150) {
			$('.top-menu').addClass('sticky-menu');
		}else {
			$('.top-menu').removeClass('sticky-menu');
		}
	});
};
