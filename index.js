// Write your solution in this file!
const driver = {

}

// non-destructively add a key/value pair to driver, return the new driver
function updateDriverWithKeyAndValue(obj, key, value) {
   let newDriver = { ...obj }
   newDriver[key] = value
   return newDriver
}

//  destructively update driver with new key value pair, return updated driver
function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
   obj[key] = value
   return obj
}

// delete key from a clone of driver and return new driver, non-destrictively
function deleteFromDriverByKey(obj, key) {
   let driverCopy = Object.assign({}, obj)
   delete driverCopy[key]
   return driverCopy
}

// destructively delete the key value pair from the obj
function destructivelyDeleteFromDriverByKey(obj, key) {
   delete obj[key]
   return obj
}