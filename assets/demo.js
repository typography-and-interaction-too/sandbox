const fileSelection = () => {
	const visibleClass = 'visible'

	const files = [...document.getElementById('files').children]
	const source = document.getElementById('source')

	files.forEach((file) => {
		(file).onclick = () => {
			files.forEach((element) => element.classList.remove(visibleClass))
			file.classList.add(visibleClass)
		}
	})
}

document.addEventListener('DOMContentLoaded', () => {
	fileSelection()
})
