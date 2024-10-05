const prompt = require('prompt-sync')()
const name = prompt('What is your name? ')
console.log('Hello', name, 'Welcome to our game!')

const shouldWePlay = prompt('Do you want to play?' )

if (shouldWePlay.toLowerCase() === 'yes') {
  // Game Logic
  const leftOrRight = prompt('You have entered a maze, do you want to go left or right? ')
  if (leftOrRight === 'left'){
    console.log('You want left and you see a cat!')
    const pet = prompt('Do you want to pet the cat? ')
    if (pet === 'yes') {
      console.log('You get bit you and you turn into a mouse')
    }
  } else {
    console.log('You went right and fell down a hole :(')
  }
 
  



} else if (shouldWePlay.toLowerCase() === 'no') {
  console.log('Okay :(')
}

else {
  console.log('Did you mean to say that?')
}
