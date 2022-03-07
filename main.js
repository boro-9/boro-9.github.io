document.getElementById('myimage').style.display = 'none'

/*const counters = document.querySelectorAll('.count')
const speed = 200;

counters.forEach((experience) =>{
	const updateCount = () => {
		const target = parseInt(experience.getAttribute('data-target'));
		const count = parseInt(experience.innerText);
		const increment = Math.trunc(target / speed);

		if (count < target) {
			experience.innerText = count + increment;
			setTimeOut(updateCount, 1);
		} else {
			experience.innerText = target;
		}
	};
	updateCount();
})*/

//Get the button
var	mybutton = document.getElementById("myBtn");

//When the user scrolls down 20px from the top document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

//When the user clicks on the button, scroll to the top of document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
