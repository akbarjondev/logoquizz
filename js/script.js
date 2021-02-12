import { data } from './data.js'

window.onload = (evt) => {

	for(let d of data) {

		let x = randomRange(0, window.innerWidth)
		let y = randomRange(0, window.innerHeight)

		let img = document.createElement('IMG')
		img.src = `./img/${d}.png`
		img.dataset.id = d
		img.style.cssText = `left: ${Math.abs(x - 128)}px; top:${Math.abs(y - 128)}px;`
		img.onclick = getId

		box.appendChild(img)
	}
}

function randomRange(minNum, maxNum) {
 return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
}


let arrData = [...data]

setInterval(() => {
	if(arrData[randomRange(0, arrData.length - 1)]) {
		modal.textContent = `find ${arrData[randomRange(0, arrData.length - 1)]}`
	} else {
		modal.textContent = 'You win!'
	}
}, 15000)

function getId (evt) {
	modal.textContent = `find ${arrData[randomRange(0, arrData.length - 1)]}`

	let foundImg = arrData.indexOf(evt.target.dataset.id)
	arrData.splice(foundImg, 1)
	evt.target.remove()
}
