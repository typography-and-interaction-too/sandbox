const fileSelection = () => {
	const visibleClass = 'visible'

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

document.addEventListener('DOMContentLoaded', () => {
	fileSelection()
})
