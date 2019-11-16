// Write your solution in this file!
const driver = {}
// the below method works but I want to refactor for experiance and make cleaner
// function updateDriverWithKeyAndValue(driver, key, value){
//     const newDriver = {...driver}
//     newDriver[key] = value
//     return newDriver
// }

// the below function works the same as above function but cleaner :)
function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({}, driver, { [key]: value })
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
     driver[key] = value
     return driver
}

function deleteFromDriverByKey(driver, key){
    const newObj = {...driver}
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}