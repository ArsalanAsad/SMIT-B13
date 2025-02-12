const hcd = document.querySelector('#hcd')

function writeOperation(newValue) {
    const prevValue = hcd.innerHTML
    hcd.innerHTML = prevValue + newValue
}

function performCalculation () {
    const values = hcd.innerHTML
    const result = eval(values)
    hcd.innerHTML = result
}

function clearAll () {
    const defaultValue = ''
    hcd.innerHTML = defaultValue
}

function lastValue () {
    const lastValue = hcd.innerHTML
    hcd.innerHTML = lastValue.slice(0, -1)
}