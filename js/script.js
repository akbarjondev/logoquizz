import { data } from './data.js'

let arrData = shuffle(data)

window.onload = (evt) => {

	for(let d of arrData) {

		let x = randomRange(0, window.innerWidth)
		let y = randomRange(0, window.innerHeight)

		let img = document.createElement('IMG')
		img.src = `./img/${d}.png`
		img.dataset.id = d
		img.style.cssText = `left: ${Math.abs(x - 156)}px; top:${Math.abs(y - 128)}px;`
		img.onclick = getId

		box.appendChild(img)
	}
}

let index = arrData.length - 1
modal.textContent = `find ${arrData[index]}`

function getId (evt) {
	if(evt.target.dataset.id === arrData[index]) {
		let foundImg = arrData.indexOf(evt.target.dataset.id)
		arrData.splice(foundImg, 1)
		evt.target.remove()

		index--
		if(arrData[index]) {
			modal.textContent = `find ${arrData[index]}`
		} else {
			modal.textContent = 'You win!'
			modal.classList.add('green')
			window.clearInterval(intervalId)
		}		
	} else {
		modal.classList.add('shake')
		setTimeout(() => {
			modal.classList.remove('shake')
		}, 1000)
	}
}

function randomRange(minNum, maxNum) {
	return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
}

function shuffle(arr) {
	const copiedArr = [...arr]
	return copiedArr.sort(() => Math.random() - 0.5)
}

let sec = arrData.length * 2 // second per logo

let intervalId = setInterval(() => {
	modalTime.textContent = sec

	if(sec === 0) {
		window.clearInterval(intervalId)

		modal.textContent = 'You loose!'
		modal.classList.add('alert')
	}	else {
		sec--
	}

}, 1000)
