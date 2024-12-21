
let username=prompt("enter the name")
let product=prompt("enter the product name")
let price=prompt("enter the cost")
let on=prompt("enter the day")
let occasion=prompt("enter the occasion of")
let platform=prompt("enter the platform")


let obj={
    name:username,
    devise:product,
    cost:price,
    day:on,
    special:occasion,
    flipkart:platform,
}
console.log(`${obj.name} has purchased a ${obj.devise} which costs ${obj.cost} on ${obj.day} on occation of ${obj.special} in ${obj.flipkart}`)