import $ from 'jquery';
$(function () {

	let $grid = $('#tp-grid'),
		$name = $('#name'),
		$close = $('#close'),
		$loader = $('<div class="loader"><i></i><i></i><i></i><i></i><i></i><i></i><span>Loading...</span></div>').insertBefore($grid),
		stapel = $grid.stapel({
			onLoad() {
				$loader.remove();
			},
			onBeforeOpen(pileName) {
				$name.html(pileName);
			},
			onAfterOpen(pileName) {
				$close.show();
			}
		});

	$close.on('click', function () {
		$close.hide();
		$name.empty();
		stapel.closePile();
	});
});
