import {
    demolishHousesOnTheStreet,
    getBuildingsWithStaffCountGreaterThen

} from "./04_2";

type HousesType = {
    id?: number,
    buildedAt: number,
    repaired: boolean,
    address: AddressType
}
type AddressType = {
    number: number,
    street: StreetType
}
type StreetType = {
    title: string
}
export type GovernmentBuildingsType = {
    type: string,
    address: AddressType,
    budget: number,
    staffCount: number
}
export  type CityType = {
    title: string,
    houses:  Array<HousesType>,
    governmentBuildings: Array<GovernmentBuildingsType>,
    citizensNumber: number
}

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: "White street"}
                }
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: "Happy street"}
                }
            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {title: "Happy street"}
                }
            },
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                address: { street: {title: "Central Str"}, number: 12 },
                budget: 500000, staffCount: 1000
            },
            {
                type: "FIRE-STATION",
                address: { street: {title: "Central Str"}, number: 12 },
                budget: 500000, staffCount: 500
            }
        ],
        citizensNumber: 1000000
    }
})

// 01. дополните тип HosesType (добавьте порядковый id от 1 и по возрастанию)
// 02. создайте в том  же файле еще одну функцию чтобы тесты прошли


test("Houses should be destroyed", () => {
    demolishHousesOnTheStreet(city, "Happy street");

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
})

// 01. создайте в том  же файле еще одну функцию чтобы тесты прошли
test("buildings with correct staff count", () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500);

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION');
})