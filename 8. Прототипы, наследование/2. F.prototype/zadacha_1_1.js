function User(name) {
    this.name = name;
}

let user = new User('Tigra');
let user2 = new user.constructor('Petrol');

console.log(user2.name);