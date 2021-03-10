
import { CityType , GovernmentBuildingsType, HousesType} from "./05_2.test";


export const getStreetsTitlesOfGovernmentsBuildings = (governmentBuildings: Array<GovernmentBuildingsType>) => {
    return governmentBuildings.map(streets => streets.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HousesType>) => {
    return houses.map(h => h.address.street.title)
}


export const createMessages = (houses: Array<HousesType>) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}