// Code your solution in this file
function findMatching(drivers, name){
  const newDrivers=[]
  for (let driver of drivers){
    if (driver === name.toLowerCase()){
      newDrivers.push(driver)
    }else if (driver === name){
      newDrivers.push(driver)}
  }return newDrivers
}

function fuzzyMatch(drivers, str){
  const newDrivers=[]
  for (let driver of drivers){
    if (str === driver.slice(0,str.length)){
      newDrivers.push(driver)
    }
  }return newDrivers
}

function matchName(drivers, str){
  const newDrivers=[]
  for (let driver of drivers){
    if (driver['name'] === str){
      newDrivers.push(driver)
    }
  }return newDrivers
}
