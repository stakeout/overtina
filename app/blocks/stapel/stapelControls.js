export default () => {
	const $grid = $('.our-works');
	const $closeBtn = $('.gallery__close');
	const $controls = $('.gallery__top-bar');
	const $title = $('.gallery__name');
	const $rightColumn = $('.gallery__right-column');
	const stapel = $grid.stapel({
		onLoad(){
			$controls.hide();
		},
		onBeforeOpen(pileName) {
			$controls.show();
			$title.html(pileName);
			$rightColumn.hide();
		},
		onAfterOpen(){
		},
		onBeforeClose(){
			$rightColumn.show(500);

		}
	});
	$closeBtn.on('click', function (){
		$controls.hide();
		stapel.closePile();
	});
};
