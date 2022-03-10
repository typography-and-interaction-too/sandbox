const visibleClass = 'visible'

const selectFile = () => {
	const files = [...document.querySelector('#files ul').children]
	const source = [...document.getElementById('source').children]

	files.forEach((file) => {
		(file).onclick = () => {
			let index = files.indexOf(file)

			files.forEach((element) => element.classList.remove(visibleClass))
			source.forEach((element) => element.classList.remove(visibleClass))

			file.classList.add(visibleClass)
			source[index].classList.add(visibleClass)
		}
	})
}

const copyFile = () => {
	const copyButton = 	document.getElementById('copy')

	copyButton.onclick = () => {
		let source = document.getElementById('source').querySelector('.visible code').innerText

		navigator.clipboard.writeText(source)
	}
}

const iframeCheck = () => {
	if (window.self != window.top) {
		document.body.classList.add('iframe')
	}
}

const selectAll = () => {
	window.addEventListener('click', (event) => {
		if (event.detail == 4) {
			let source = document.getElementById('source').querySelector('.visible code')
			let selection = window.getSelection()
			let range = document.createRange()

			range.selectNodeContents(source)
  		selection.removeAllRanges()
			selection.addRange(range)
		}
	})
}

const codeResize = () => {
	const codeTray = document.querySelector('main > section')
	const iframe = document.querySelector('iframe')
	const affordance = codeTray.querySelector('aside')

	let vertical = true
	let codeTrayX = parseInt(getComputedStyle(codeTray, '').width)
	let codeTrayY = parseInt(getComputedStyle(codeTray, '').height)
	let mouseX
	let mouseY

	if (window.innerWidth >= 568) vertical = false

	window.addEventListener('resize', () => {
		(window.innerWidth >= 568) ? vertical = false : vertical = true
		codeTray.style.removeProperty('height')
		codeTray.style.removeProperty('width')
		codeTrayX = parseInt(getComputedStyle(codeTray, '').width)
		codeTrayY = parseInt(getComputedStyle(codeTray, '').height)
	})

	const codeResize = (event) => {
		document.getSelection().removeAllRanges()
		if (vertical) {
			const delta = event.y - mouseY
			codeTray.style.height = (codeTrayY + delta) + 'px'
		}
		else {
			const delta = event.x - mouseX
			codeTray.style.width = (codeTrayX + delta) + 'px'
		}
	}

	affordance.addEventListener('mousedown', (event) => {
		if (vertical) {
			mouseY = event.y
			document.addEventListener('mousemove', codeResize, false)
		}
		else {
			mouseX = event.x
			document.addEventListener('mousemove', codeResize, false)
		}
	})

	document.addEventListener('mouseup', (event) => {
		codeTrayX = parseInt(getComputedStyle(codeTray, '').width)
		codeTrayY = parseInt(getComputedStyle(codeTray, '').height)
		document.removeEventListener('mousemove', codeResize, false)
	})

	affordance.addEventListener('click', (event) => {
		if (event.detail == 2) {
			codeTray.style.removeProperty('height')
			codeTray.style.removeProperty('width')
			codeTrayX = parseInt(getComputedStyle(codeTray, '').width)
			codeTrayY = parseInt(getComputedStyle(codeTray, '').height)
		}
	})

}



document.addEventListener('DOMContentLoaded', () => {
	selectFile()
	copyFile()
	iframeCheck()
	selectAll()
	codeResize()
})
