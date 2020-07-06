// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
function printKata (kataNumber, object) {
    
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
   
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

const active= users.filter(user => user.isActive === true)
const map = users.map(function (user) {
    return user.email 
})
const company = users.some(function (user) {
    return user.company === "OVATION"
})
const age = users.find(function (user) {
    return user.age>38
})
const activeAge= users.filter(user => user.isActive === true).find(user=>user.age>38)
const balence= users.filter(user=>user.company==="ZENCO").map(user => user.balance)

const potato= users.filter(tags=>tags.includes="fugiat").map(user=>user.age)
    printKata(1, active)
    printKata(2, map)
    printKata(3, company)
    printKata(4, age)
    printKata(5, activeAge)
    printKata(6, balence)
    printKata(7, potato)