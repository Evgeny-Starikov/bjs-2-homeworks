"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	if (d > 0) {
		arr[0] = (-b + Math.sqrt(d)) / (2 * a);
		arr[1] = (-b - Math.sqrt(d)) / (2 * a);

	} else if (d === 0) {
		arr[0] = -b / (2 * a);

	} else {
		arr = [];
	}
	return arr;
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	let per = parseInt(percent) / 100 / 12; //процентная ставка в месяц
	let con = parseInt(contribution); //начальный взнос	
	let am = parseInt(amount); //общая стоимость	
	let count = parseInt(countMonths); //месяц окончания

	let loanBody = amt - con; //тело кредита

	let payment = loanBody * (perCent + (perCent / (((1 + perCent) ** count) - 1))); //Ежемесячная оплата 

	let totalAmount = (payment * count).toFixed(2);

	console.log(totalAmount);
	return +(totalAmount);
}