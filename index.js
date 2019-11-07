// Write your solution in this file!

let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    let newObject = {...driver};
    newObject[key] = value
    return newObject
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key) {
    let newObject = {...driver}
    delete newObject[key]
    return newObject
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}