const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    return {...driver, [key]: value};
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key){
    const deletedDriver = Object.assign({}, driver);
    delete deletedDriver[key];
    return deletedDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}