function handleTimeOut () {
    console.log('timed out')
}

const handleTimeOut2 = () => {
    console.log('timed out... again!')
}


setTimeout(handleTimeOut, 2000)
setTimeout(handleTimeOut2, 4000)


function handleValue (value) {
    value()
}


handleValue(() => {
    console.log('hello word')
})