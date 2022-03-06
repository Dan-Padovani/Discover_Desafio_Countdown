let intervalData = setInterval(countdown, 1000)
// Using setInterval to call the function every second
let dateToLauch = new Date('Apr 10, 2022 11:10:00').getTime()
// Using getTime to return in milisenconds

function countdown() {
	let timeNow = new Date().getTime()
	let countdownTimer = dateToLauch - timeNow

	if (countdownTimer > 0) {
		let seconds = Math.floor((countdownTimer % (1000 * 60)) / 1000)
		let minutes = Math.floor((countdownTimer % (1000 * 60 * 60)) / (1000 * 60))
		let hours = Math.floor((countdownTimer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
		let days = Math.floor(countdownTimer / (1000 * 60 * 60 * 24))
	
		seconds <= 9 ? (seconds = `0${seconds}`) : seconds
		minutes <= 9 ? (minutes = `0${minutes}`) : minutes
		hours <= 9 ? (hours = `0${hours}`) : hours
		days <= 9 ? (days = `0${days}`) : days

		document.getElementById('seconds').innerHTML = `${seconds}`
		document.getElementById('minutes').innerHTML = `${minutes} : `
		document.getElementById('hours').innerHTML = `${hours} : `
		document.getElementById('days').innerHTML = `${days} : `
	} else {
		alert('This rocket was launched')
		clearInterval(intervalData)
	}
}
