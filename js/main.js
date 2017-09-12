document.addEventListener('DOMContentLoaded', function(event){

	var n1 = document.getElementById('one');
	var n2 = document.getElementById('two');
	var n3 = document.getElementById('three');
	var n4 = document.getElementById('four');
	var n5 = document.getElementById('five');
	var n6 = document.getElementById('six');
	var n7 = document.getElementById('seven');
	var n8 = document.getElementById('eight');
	var n9= document.getElementById('nine');
	var nDiv= document.getElementById('slash');
	var nMin= document.getElementById('minus');
	var nMult= document.getElementById('mult');
	var nPlus= document.getElementById('plus');
	var nEqual= document.getElementById('eq');
	var nZero= document.getElementById('zero');
	var nReset= document.getElementById('clear');


	var array = []



	n1.addEventListener('click' , function(event) {

		var screen = document.getElementById('screen');
		screen.classList.add('value')
		screen.value=1
		var one= 1
		array[array.length]=1
	})


	n2.addEventListener('click' , function(event) {

		var screen = document.getElementById('screen');
		screen.classList.add('value')
		screen.value=2
		var total=2
		return total +=screen.value
		array[array.length]=2
	})



	nPlus.addEventListener('click' , function(event) {

		var op= "add"
		return op

	})


	nEqual.addEventListener('click' , function(event) {
		if (op==="add") {
			var total=array[array.length-1]+array[array.length]
			
		}

	})




















}) ;


