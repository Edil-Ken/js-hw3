function checkUser(user) {
    if (user === 'Edil' || user === 'Maksat' || user === 'Aigerim') {
        return `user true welcome, ${user}`
    } else {
        return 'false not correct user'
    }
}
console.log(checkUser('Aigerim'))
              // ---------//----------------//
function februaryDay(day) {
    if (day <= 28 && day > 0) {
        return `today is ${day} of february`
    } else if (day <= 0 || day > 31) {
        return `${day} is not correct day`
    }
    else {
        return `on february only 28 day, your day is ${day} of another month`
    }
}
console.log(februaryDay(23))
// ---------//----------------//
function numFifty(num) {
    if (num === 50) {
        return `${num} is equals of 50`
    } else {
        return `${num} is not correct`
    }
}
console.log(numFifty(10))
// ---------//----------------//
function oldCheck(user, age) {
    if (user && age >= 18) {
        return `${user} ${age} old, welcome`
    } else {
        return `${user} ${age} old, rejected`
    }
}
console.log(oldCheck('Aigerim', 18))

// доделаю до понедельника, если позволите.