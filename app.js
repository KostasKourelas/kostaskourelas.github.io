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

// gsap.from("li", 2, {
// 	delay: 4,
// 	x: 700, 
// 	stagger : {
// 		amount: 0.5,
// 	},
// 	ease: "power4.inOut",
// })

gsap.from(".animate-card", 2, {
	delay: 4,
	y: 700, 
	stagger : {
		amount: 0.5,
	},
	ease: "Back.easeOut",
})

gsap.to(".left", 1, {
	delay: 7,
	x: -800, 
	stagger : {
		amount: 0.5,
	},
	ease: "power4.inOut",
})

gsap.to(".right", 1, {
	delay: 7,
	x: 800, 
	stagger : {
		amount: 0.5,
	},
	ease: "power4.inOut",
})


gsap.to(".overlay2", 3, {
	delay: 5.2,
	display: "none",
	ease: "power4.inOut",
})

// gsap.from(".card", 4, {
// 	delay: 7,
// 	y: 700, 
// 	stagger : {
// 		amount: 0.5,
// 	},
// 	ease: "power4.inOut",
// })
