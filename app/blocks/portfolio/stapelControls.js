export default () => {
	const $grid = $('.our-works');
	const $closeBtn = $('.portfolio__close');
	const $controls = $('.portfolio__top-bar');
	const $container = $('.portfolio__top-row');
	const $title = $('.portfolio__name');
	const $rightColumn = $('.portfolio__right-column');
	const stapel = $grid.stapel({
		onLoad(){
			$controls.hide();
		},
		onBeforeOpen(pileName) {
			$controls.show();
			$container.css('padding-left', '0');
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
		$container.css('padding-left', '70px');
		stapel.closePile();
	});
};
