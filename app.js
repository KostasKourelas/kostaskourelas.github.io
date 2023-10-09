// Get the button element
const buttons = document.querySelectorAll(".menu_link");

// Add a click event listener to each button
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Deactivate all buttons with the "active" class
    buttons.forEach(function(btn) {
      btn.classList.remove("active");
    });

    // Activate the clicked button
    button.classList.add("active");
  });
});

function startLoader() {
	let counterElement = document.getElementById("cntr");
	let currentValue = 0;


		function updateCounter() {
			if (currentValue === 100) {
				return;
			}
		

		currentValue += Math.floor(Math.random() * 10) + 1;

		if (currentValue > 100) {
			currentValue = 100;
		}

		counterElement.textContent = currentValue;

		let delay = Math.floor(Math.random() * 200) + 50;
		setTimeout(updateCounter, delay);
	}

	updateCounter();
}

startLoader();

gsap.to(".counter", 0.25, {
	delay: 3,
	opacity: 0,
	display: "none"
})

gsap.to(".block", 1.5, {
	delay: 3,
	height: 0,
	stagger: {
		amount: 0.5,
	},
	ease: "power4.inOut"
})


gsap.to(".line", 1.5, {
    delay: 2.5,
    height: 0,
})

gsap.to(".overlay", 1.5, {
	delay: 3.1,
	display: "none"
})

