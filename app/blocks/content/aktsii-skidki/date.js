export const currentMonth = () => {
	const monthField = $('.month-js');
	const today = new Date();
	const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
	const date = new Date();
	return month [this.getMonth()];
};
