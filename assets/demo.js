const visibleClass = 'visible'

const selectFile = () => {
	const files = [...document.getElementById('files').children]
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



document.addEventListener('DOMContentLoaded', () => {
	selectFile()
	copyFile()
	iframeCheck()
	selectAll()
})
