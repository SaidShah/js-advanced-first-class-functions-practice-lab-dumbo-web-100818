// Code your solution in this file!
function logDriverNames(givenArray) {
  givenArray.forEach(function (eachDriver) {
    console.log( eachDriver.name)
  })
}

function logDriversByHometown(givenArray, hometown){
  givenArray.forEach(function (eachDriver) {
    if(eachDriver.hometown === hometown){
      console.log(eachDriver.name)
    }
  })
}

const driversByRevenue= function(givenArray) {
  return givenArray.slice().sort(function (salaryOne, salaryTwo) {
      return salaryOne.revenue - salaryTwo.revenue
  });
};

const driversByName = function(givenArray) {
  return givenArray.slice().sort(function (personOne, personTwo) {
      return personOne.name.localeCompare(personTwo.name)
  });
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
