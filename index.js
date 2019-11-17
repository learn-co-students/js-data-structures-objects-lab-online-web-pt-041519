// Write your solution in this file!

const driver = {}


const updateDriverWithKeyAndValue = (driver, key, value) => {
  return Object.assign({}, driver, { [key]: value })
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
  driver[key] = value
  return driver
}

const deleteFromDriverByKey = (driver, key) => {

  const clone = {...driver}
  delete clone[key]
  return clone
}

const destructivelyDeleteFromDriverByKey = (driver, key) => {
  
  delete driver[key]

  return driver;
}

