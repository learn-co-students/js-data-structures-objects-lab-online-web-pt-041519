let driver = {
  "thing1": "Yes, this is thing 1.",
  "thing2": "Now, to thing 2."
}

// Return new driver that has an updated value for the key passed in.
function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value })
}

// Return mutated driver for input parameter
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, { [key]: value })
}

// Delete value from new driver
function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver)
  delete newDriver[key]
  return newDriver
}

// Delete value from existing driver
function destructivelyDeleteFromDriverByKey(driver, key, value) {
  delete driver[key]
  return driver
}