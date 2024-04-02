const array = [5,4,1,20,0, -4, -8, 100,4,-74,-5,0,0,1,2,7]

const arrayMap = array.map(element => element*5)

const arrayFilter = array.filter(element => element>0)

const cars = [
    {
        "brand": "Mercedes-Benz",
        "model": "Citan",
        "carBody": "van",
        "color": "red",
        "price": "10000$",
        "year": 2010
    },
    {
        "brand": "Lexus",
        "model": "GX",
        "carBody": "4WD",
        "color": "black",
        "price": "50000$",
        "year": 2020
    },
    {
        "brand": "Toyota",
        "model": "RAV4",
        "carBody": "crossover",
        "color": "gray",
        "price": "15000$",
        "year": 2015
    },
    {
        "brand": "Hyundai",
        "model": "Grand i10 Nios",
        "carBody": "hatchback",
        "color": "yellow",
        "price": "30000$",
        "year": 2018
    },
    {
        "brand": "Honda",
        "model": "Civic",
        "carBody": "sedan",
        "color": "blue",
        "price": "25000$",
        "year": 2010
    }
]
const carsMap = cars.map(element => {
    return{
        brand: element.brand,
        model: element.model,
        price: +element.price.slice(0,element.price.length-1)*90,
        mileage: element.year*10000+' km'
    }
})

const carsFilter = cars.filter(element => element.year > 2017)




