const loader = document.getElementById('loader')
const loaderContent = document.getElementById('loader-content')
const main = document.querySelector('main')

let i = 0
const interval = setInterval(() => {
	i++
	loaderContent.textContent = `${i}%`

	if (i === 100) clearInterval(interval)
}, 50)

setTimeout(() => {
	loader.style.opacity = 1
	loader.style.transition = 'opacity 1s ease-out'
}, 1000)

setTimeout(() => {
	loader.style.opacity = 0
	main.style.opacity = 1
}, 5500)
