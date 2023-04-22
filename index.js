const returnFirstTwoDrivers = ([driveOne, driveTwo]) => {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = ([driveThree, driveFour]) => {
    return drivers.slice(2)
}

const createFareMultiplier = () => {
    return fareMultiplier = (multiplierOne) => {
        return multiplierOne * multiplierOne
    }
}

const fareDoubler = (createFareMultiplier) => {
    return createFareMultiplier * 2
}

const fareTripler = (createFareMultiplier) => {
    return createFareMultiplier * 3
}

const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(drivers)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']