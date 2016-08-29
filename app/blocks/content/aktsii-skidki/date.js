
export default () => {
	let $line = $('.month-js');
	const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
	const today = new Date();
	$line.text('(' + month[today.getMonth()] + ')');
};
