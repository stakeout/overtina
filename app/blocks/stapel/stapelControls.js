export default () => {
	const $grid = $('.tp-grid');
	const $closeBtn = $('.reasons__close');
	const $controls = $('.reasons__top-bar');
	const $title = $('.reasons__name');
	const stapel = $grid.stapel({
		onBeforeOpen() {
			$controls.hide();
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
