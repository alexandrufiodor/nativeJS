import {
    createMessages,
    demolishHousesOnTheStreet,
    getBuildingsWithStaffCountGreaterThen, getStreetsTitlesOfGovernmentsBuildings, getStreetsTitlesOfHouses

} from "./05_2";

export type HousesType = {
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
                budget: 500000, staffCount: 200
            },
            {
                type: "FIRE-STATION",
                address: { street: {title: "South Str"}, number: 12 },
                budget: 500000, staffCount: 1000
            }
        ],
        citizensNumber: 1000000
    }
})

// 01. дополните тип HosesType (добавьте порядковый id от 1 и по возрастанию)
// 02. создайте в том  же файле еще одну функцию чтобы тесты прошли

//
// test("Houses should be destroyed", () => {
//     demolishHousesOnTheStreet(city, "Happy street");
//
//     expect(city.houses.length).toBe(1);
//     expect(city.houses[0].id).toBe(1);
// })

// 01. создайте в том  же файле еще одну функцию чтобы тесты прошли

test('list of streets titles of governments buildings', () => {
    let streets = getStreetsTitlesOfGovernmentsBuildings(
        city.governmentBuildings
    )
    expect(streets.length).toBe(2)
    expect(streets[0]).toBe("Central Str")
    expect(streets[1]).toBe("South Str")
})

test('list of streets titles', () => {
    let streets = getStreetsTitlesOfHouses(
        city.houses
    )
    expect(streets.length).toBe(3)
    expect(streets[0]).toBe("White street")
    expect(streets[1]).toBe("Happy street")
    expect(streets[2]).toBe("Happy s treet")
})

test('create greeting messages for streets', () => {
    let messages = createMessages(
        city.houses
    )
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello guys from White street")
    expect(messages[1]).toBe("Hello guys from Happy street")
    expect(messages[2]).toBe("Hello guys from Happy street")
})