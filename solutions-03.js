// Practice Problem: Access Object values
// Problem -- 01
const student = {
  name: 'Fredie',
  age: 26
}
console.log(student.age)
// Problem -- 02
let data = {
  location: [
    {
      latitude: '34.5, 37.8',
      longitude: '98.77, 58.7',
      city: 'Hyderabad',
      country: 'India'
    }
  ]
}

console.log(data.location[0].city)

// Problem -- 03

const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
}

console.log(user.email);
console.log(user.address);
console.log(user.address.city);
console.log(user.address.geo.lat);
console.log(user.company.name);