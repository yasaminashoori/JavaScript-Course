'use strict';

document.querySelector('body').style.background = '#FBAB7E linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)';

document.querySelector('.calculate').addEventListener('click', function () {
    const mass = Number(document.querySelector('#mass').value);
    const height = Number(document.querySelector('#height').value);
    const bmi = mass / (height ** 2);
    document.querySelector('#result').value = bmi.toFixed(2); 
});
