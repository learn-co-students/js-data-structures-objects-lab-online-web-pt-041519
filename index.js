// Write your solution in this file!

const driver = {} 

function updateDriverWithKeyAndValue(driver, key, value) {
    let newDriver = {...driver}; 
    newDriver[key] = value; 
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, keyToDelete) {
    let newDriver = {...driver}
    delete newDriver[keyToDelete]; 
    return newDriver; 
}

function destructivelyDeleteFromDriverByKey(driver, keyToDelete){
    delete driver[keyToDelete];
    return driver;
}