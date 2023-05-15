const updateLight = current => {
    return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green'
}

console.log(updateLight('green')) // yellow
console.log(updateLight('yellow')) // red
console.log(updateLight('red')) // green


// Alternate solution //


const updateLights = current => ({
    green: 'yellow',
    red: 'green',
    yellow: 'red',
})[current]

console.log(updateLights('green')) // yellow
console.log(updateLights('yellow')) // red
console.log(updateLights('red')) // green