console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();

	// console.log('form submit');
	alert("Form submitted!");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const img = document.querySelector('#ducky');

img.addEventListener('mouseover', () => {
	alert('You are so good looking!');
});