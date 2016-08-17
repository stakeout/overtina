import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import *as photoGallery from '../blocks/photo-gallery/photo-gallery';
import *as stickyMenu from '../blocks/top-menu/top-menu';
import *as calculator from '../blocks/calculator/calculator';
import *as ceilingsCatalog from '../blocks/ceilings-catalog/ceilings-catalog';
import *as catalog from '../blocks/reasons/reasons';
import *as sideBtn from '../blocks/side-buttons/side-buttons';
// import *as modernizr from '../blocks/reasons/modernizrCustom';

$(() => {
	ceilingsCatalog.ceilingsCatalog();
	calculator.calculator();
	stickyMenu.stickyMenu();
	photoGallery.func();
	svg4everybody();
	sideBtn.sideButtons();
	catalog.stapel();
	$( '#tp-grid' ).stapel();
	$('.photo-gallery__list a').fancybox({
		padding: 20,
		imageScale: false,
		overlayOpacity: 0.5
	});
});
