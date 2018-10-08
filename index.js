// Code your solution in this file
function findMatching(drivers,string){
  const str = string.toLowerCase();
  return drivers.filter(function(driver){
    return driver.toLowerCase() === str;
  });
}

function fuzzyMatch(drivers,string){
  const letter = string[0].toLowerCase();
  return drivers.filter(function(driver){
    return driver[0].toLowerCase() === letter;
  });
}


function matchName(drivers,string){
  const str = string.toLowerCase();
  return drivers.filter(function(driver){
    return driver.name.toLowerCase() === str;
  })
}
