setInterval(setClock, 1000)

const body = document.querySelector('body');
const footer = document.querySelector('footer')
const hourHand = document.querySelector('[data-hour-hand')
const minuteHand = document.querySelector('[data-minute-hand')
const secondHand = document.querySelector('[data-second-hand')
const currentTime = new Date()
const hour = currentTime.getHours()
const minute = currentTime.getMinutes();
const clock = document.getElementById('clock')
const typingDemo = document.getElementById("typingDemo");


function setDate(){
	const date = (new Date()).toString().split(' ').splice(1,3).join(' ');
 	document.getElementById('todaysDate').innerHTML = date;
	 document.getElementById('todaysDate').classList.remove('white');
}

function setDateNight(){
	const date = (new Date()).toString().split(' ').splice(1,3).join(' ');
 	document.getElementById('todaysDate').innerHTML = date;
 	document.getElementById('todaysDate').classList.add('white');
}

function morningGreeting () {
	
	typingDemo.classList.remove('whiteText');
	typingDemo.classList.remove('whiteBlink');
	typingDemo.classList.remove('typing-demoNight');
	typingDemo.classList.add('whiteText');
	typingDemo.classList.add('whiteBlink');
	typingDemo.innerHTML = "Good morning!";
}

function eveningGreeting () {
	
	typingDemo.classList.remove('whiteText');
	typingDemo.classList.remove('whiteBlink');
	typingDemo.classList.add('whiteText');
	typingDemo.classList.add('whiteBlink');
	typingDemo.classList.add('typing-demoEvening');
	typingDemo.innerHTML = "Good evening!";
}

function nightGreeting () {
	
	typingDemo.classList.add('whiteText');
	typingDemo.classList.add('whiteBlink');
	typingDemo.classList.add('typing-demoNight');
	typingDemo.innerHTML = "Good night!";
}
	


function setFunctions(){
  const d = new Date();
  const h = d.getHours();
  const m = d.getMinutes();
  setTimeout(setFunctions, 1000);
   if (h >= 6 && h < 16) {
	body.classList.remove('night');
	body.classList.add('morning');
	clock.classList.remove('clockNight');
	footer.classList.remove('dark');
	setDate();
	morningGreeting();
	} else if (h >= 16 && h < 22)  {
	body.classList.remove('morning');
	body.classList.add('evening');
	setDateNight();
	eveningGreeting();
	} else {
	body.classList.remove('evening');
	body.classList.add('night');
	clock.classList.add('clockNight');
	footer.classList.add('dark');
	setDateNight();
	nightGreeting();
	}

}



function setClock() {
	const currentDate = new Date()
	const secondsRatio = currentDate.getSeconds() / 60
	const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
	const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
	setRotation(secondHand, secondsRatio)
	setRotation(minuteHand, minutesRatio)
	setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
	element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock();
setFunctions();







