// Write your solution in this file!

let driver = {};


function updateDriverWithKeyAndValue(driver, key, value){

    const newDriver = {};

    // return with the original key value pairs 
    // and the NEW KEY VALUE PAIR
    return Object.assign(newDriver, driver, {[key]: value});

}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){

    driver[key] = value;
    
    return driver;

}

function deleteFromDriverByKey(driver, key){

    const newDriver = Object.assign({}, driver);

    delete newDriver[key];

    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){

    delete driver[key];

    return driver;
}