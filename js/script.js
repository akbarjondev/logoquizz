import { data } from './data.js'

// let place = newImg.getBoundingClientRect()

window.onload = (evt) => {
	let index = 1

	for(let d of data) {
		let x = randomRange(0, window.innerWidth)
		let y = randomRange(0, window.innerHeight)

		let img = document.createElement('IMG')
		img.src = `./img/${d}.png`
		img.dataset.id = index
		// img

		box.appendChild(img)
		index++
	}
}

function randomRange(minNum, maxNum) {
 return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
}

