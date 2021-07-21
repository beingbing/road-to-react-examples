class Developer {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName() {
        return this.firstName + ' ' + this.lastName;
    }
}

const sam = new Developer('samar', 'taj');

console.log(sam.getName());

const dennis = new Developer('dennis', 'ritchie');

console.log(dennis.getName());