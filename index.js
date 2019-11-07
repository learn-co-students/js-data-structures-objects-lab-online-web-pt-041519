// Write your solution in this file!
const driver = {}

// returns a clone with new data without modifying original
function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, {[key]: value});
}

// updates driver destructively
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

// clones original with a key removed
function deleteFromDriverByKey(driver, key) {
  let clone = Object.assign({}, driver);
  delete clone[key];
  return clone;
}

// modifies original object
function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}