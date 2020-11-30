// destructuring object

// without destructuring
let user = {
  name: "mohamed",
  age: 25,
  address: {
    city: "cité el khadhra",
    cp: 1400,
  },
};
let a = (userr) => {
  return `my name is ${user.name}, and i'm ${user.age} and i live in ${user.address.city} `;
};
console.log(a(user));

// destructuring user
let user = {
  name: "mohamed",
  age: 25,
  address: {
    city: "cité el khadhra",
    cp: 1400,
  },
};
let a = ({ name, age, address: { city, cp } }) => {
  return `my name is ${name}, and i'm ${age} and i live in ${city}: ${cp} `;
};
console.log(a(user));

// destructuring array
let tab = [1, 2, 5];
const [first, second, third] = tab;
console.log(first);
