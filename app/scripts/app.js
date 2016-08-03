import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import *as photoGallery from '../blocks/photo-gallery/photo-gallery';
import *as stickyMenu from '../blocks/top-menu/top-menu';
import *as calculator from '../blocks/calculator/calculator';

$(() => {
	calculator.calculator();
	stickyMenu.stickyMenu();
	photoGallery.func();
	svg4everybody();
});
