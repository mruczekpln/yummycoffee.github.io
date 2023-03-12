const projects = document.getElementById('projects-container')
console.log(projects.clientWidth)
let clientStart,
	finalDelta = 0,
	lastDeltaPercentage = 0

const onMove = e => {
	if (clientStart === 0) return

	const clientDelta = clientStart - e.clientX
	const deltaPercentage = (clientDelta / (projects.clientWidth / 2)) * -100
	const newDeltaPercentage = deltaPercentage + lastDeltaPercentage
	finalDelta = Math.max(Math.min(newDeltaPercentage, 0), -100)

	const transform = `translateX(${finalDelta}%)`
	projects.animate(
		{
			transform: transform
		},
		{ duration: 1200, fill: 'forwards' }
	)

	for (const image of projects.getElementsByClassName('image')) {
		image.animate(
			{
				objectPosition: `${100 + finalDelta}% center`
			},
			{ duration: 1200, fill: 'forwards' }
		)
	}

	// console.log(e)
	// console.log(finalDelta, deltaPercentage, clientDelta)
}

projects.addEventListener('mousedown', e => {
	console.log('mounted', e.clientX)
	clientStart = e.clientX

	projects.addEventListener('mousemove', onMove)
})

window.addEventListener('mouseup', e => {
	clientStart = 0
	// console.log(finalDelta)

	if (finalDelta < -80) {
		console.log('going back')
		finalDelta = 0

		const transform = `translateX(${finalDelta}%)`
		projects.animate(
			{
				transform: transform
			},
			{ duration: 1200, easing: 'ease-in-out', fill: 'forwards' }
		)
	}

	lastDeltaPercentage = finalDelta
	console.log('demounted', lastDeltaPercentage)
})
