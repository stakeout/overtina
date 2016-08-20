export default () => {
	const $grid = $('.tp-grid');
	const $closeBtn = $('.gallery__close');
	const $controls = $('.gallery__top-bar');
	const $title = $('.gallery__name');
	const stapel = $grid.stapel({
		onLoad(){
			$controls.hide();
		},
		onBeforeOpen(pileName) {
			$title.html(pileName);
		},
		onAfterOpen(){
			$controls.show();
		}
	});
	$closeBtn.on('click', function (){
		$controls.hide();
		stapel.closePile();
	});
};
