import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import magnificPopup from 'magnific-popup';
import slick from 'slick-carousel';
import *as photoGallery from '../blocks/photo-gallery/photo-gallery';
import *as stickyMenu from '../blocks/top-menu/top-menu';
import *as calculator from '../blocks/calculator/calculator';
import *as ceilingsCatalog from '../blocks/ceilings-catalog/ceilings-catalog';
import *as stapel from '../blocks/stapel/stapel';
import stapelCtrl from '../blocks/portfolio/stapelControls';
import *as sideBtn from '../blocks/side-buttons/side-buttons';
import getMonth from '../blocks/content/aktsii-skidki/date';
import contactValidation from '../blocks/contact-dropdown/validation';
import phoneMask from '../blocks/contact-dropdown/maskedinput';
// import *as modernizr from '../blocks/reasons/modernizrCustom';

$(() => {
	ceilingsCatalog.ceilingsCatalog();
	calculator.calculator();
	stickyMenu.stickyMenu();
	photoGallery.func();
	svg4everybody();
	sideBtn.sideButtons();
	stapel.stapel($('#tp-grid'));
	stapelCtrl();
	$('.photo-gallery__list, .content__list-msd, .lamps-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: true
		},
		gallery: {
			enabled: true
		}
	});
	$('#tp-grid').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: true
		},
		gallery: {
			enabled: true
		}
	});
	$('.descor-catalog__link').magnificPopup({
		type: 'image'
	});
	getMonth();
	contactValidation();
	phoneMask();
	$('#phone, #tel').mask('+375(99) 999-99-99');
	$('.js-slick').slick({
		dots: true
	});
});
