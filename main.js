// Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept 
// three arguments.

// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice

const doctor = (name, specialty, address) => ({
    "name": name,
    "specialty": specialty,
    "address": address
})

const doctorOne = doctor ("Robert", "Surgeon", "123 Fake Lane")
console.log(doctorOne)

const petFactory = (name, breed) => ({
    "name": name,
    "breed": breed
})

let petOne = petFactory ("Matthew", "Elderly Dog")
let petTwo = petFactory ("Drew", "Unhelpful Cat")
let petThree = petFactory ("Tyler", "Most Loyal and Helpful Dog")

bowWowKennels = []

let pushPet = bowWowKennels.push(petOne, petTwo, petThree)
console.log(bowWowKennels)

const jumpStopRecords = []
const chattenRecords = []
const polarRecords = []

const createBlueGrassArtist = (name, age) => ({
    "name": name,
    "age": age, 
    "genre": "Bluegrass"
})

const createFunkArtist = (name, age) => ({
    "name": name,
    "age": age, 
    "genre": "Funk"
})

const createRapArtist = (name, age) => ({
    "name": name,
    "age": age, 
    "genre": "Rap"
})

const createCountryArtist = (name, age) => ({
    "name": name,
    "age": age, 
    "genre": "Country"
})

const createPopArtist = (name, age) => ({
    "name": name,
    "age": age, 
    "genre": "Pop"
})

let bruceAtikins = createCountryArtist("Bruce Atikins", 23)
chattenRecords.push(bruceAtikins)

let jensenBrown = createPopArtist("Jensen Brown", 20)
polarRecords.push(bruceAtikins)

let dreFunkz = createFunkArtist("Dre Funkz", 25)
jumpStopRecords.push(dreFunkz)

console.log(chattenRecords)
console.log(jumpStopRecords)
console.log(polarRecords)


// Bruce Atikins is a Country artist and is 23 years old
// Jensen Brown is a Pop artist and is 20 years old
// Dre Funkz is a Funk artist and is 25 years old
// Dusta Grimes is a Rap artist and is 21 years old
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
// Avilee Dallas is a Country artist and is 19 years old
// Austin Kinkaid is a Pop artist and is 22 years old
// Loyoncé Branis is a Rap artist and is 27 years old