const typewriterSpan = document.getElementById("typewriter")

const texts = ["yummycoffee", "student", "programmer"]
const speed = 100; 
const delayBetweenStringEdit = 1000;
let letters = ""

// javascript "sleep()" tricks
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

// main lifecycle
const type = async () => {

    for (let text of texts) {
        letters = ""

        for (let letter of text) {
            letters += letter
            
            typewriterSpan.innerHTML = letters
            
            await sleep(speed)
        }
        
        await sleep(delayBetweenStringEdit)
        
        for (let letter in letters) {
            letters = letters.slice(0, letters.length - 1)
            
            typewriterSpan.innerHTML = letters
            
            await sleep(speed)
        }

        await sleep(delayBetweenStringEdit)
    }

    type()
}

type()