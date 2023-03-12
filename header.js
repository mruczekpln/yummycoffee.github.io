const titleLeading = document.getElementById('title-leading')

const ascend = async string => {
	return new Promise(res => {
		let i = 0
		const interval = setInterval(() => {
			titleLeading.textContent += string[i]
			i++

			if (i === string.length) {
				res()
				clearInterval(interval)
			}
		}, 100)
	})
}
const descend = async string => {
	return new Promise(res => {
		let i = 0
		const interval = setInterval(() => {
			titleLeading.textContent = titleLeading.textContent.slice(0, -1)
			i++

			if (i === string.length) {
				res()
				clearInterval(interval)
			}
		}, 100)
	})
}

const master = async () => {
	const arr = ['frontend junior dev', 'audiophile', 'wapo zaza abuser']

	while (1) {
		for (text of arr) {
			await ascend(text)
			await new Promise((resolve, reject) => setTimeout(() => resolve(), 3000))
			await descend(text)
			await new Promise((resolve, reject) => setTimeout(() => resolve(), 1000))
		}
	}
}

setTimeout(master, 7000)
