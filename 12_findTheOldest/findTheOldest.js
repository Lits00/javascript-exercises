const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear(); // Get the current year

    const oldestPerson = arr.reduce((oldest, person) => {
        const oldestAge = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : currentYear - oldest.yearOfBirth;
        const personAge = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : currentYear - person.yearOfBirth;
        return personAge > oldestAge ? person : oldest;
      });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
