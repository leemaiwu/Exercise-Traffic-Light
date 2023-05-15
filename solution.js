const updateLight = (current) => {
    return current === 'green' || current !== 'yellow' ? current === 'red' ? 'green' : 'yellow' : 'red'
}

console.log(updateLight('green')) // yellow
console.log(updateLight('yellow')) // red
console.log(updateLight('red')) // green
