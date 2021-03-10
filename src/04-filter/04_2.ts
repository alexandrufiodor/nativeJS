import {CityType, GovernmentBuildingsType} from "./04_2.test";

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (governmentBuildings: Array<GovernmentBuildingsType>, staffCount: number) => {
    return governmentBuildings.filter(g => g.staffCount === staffCount)
}