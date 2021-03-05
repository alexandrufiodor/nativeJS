
type CityType = {
    title: string,
    country: string
}
type AddressType = {
    streetTitle: string,
    city: CityType
}
type TechnologiesType = {
    id: number,
    title: string
}

type StudentType = {
    name: string,
    age: number,
    isActivity: boolean,
    address: AddressType,
    technologies: Array<TechnologiesType>
}

export const student: StudentType = {
    name: 'Alex',
    age: 25,
    isActivity: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: 'Minsk',
            country: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: "React"
        }
    ]
}


console.log(student.name);