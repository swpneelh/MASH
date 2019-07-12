

// function getHome(yourCasa){
    
//     let home = ["Mansion", "Apartment", "Shack", "House", "Trash Can"]
//     home.push(yourCasa)
//     let H = (Math.floor(Math.random()*home.length))
//     return (home[H])
// }
// function halfChance(desires){
//     let userInput = desires
//     let childrenCount = Math.floor(Math.random()*100)
//     let halfChance = Math.floor(Math.random()*2)

//     if(halfChance == 0){
//         return userInput
//     }else if(halfChance == 1){
//         return childrenCount
//     }
     

// }

// function getChildrenCount(){
//     return halfChance()
// }

// function getCar(){
//     let car = ["Lambo", "Ferrari", "Taxi", "Uber", "Box with wheels"]
//     let g = Math.floor(Math.random()*car.length)
//     return car[g]



// }

// function nameSpouse(){
//     let spouse = ["Brie", "Kara", "Megan", "Your friend's mom"]
//     let s = Math.floor(Math.random()*spouse.length)
//     return spouse[s]
// }



// function mash(){
//     return "You will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids!" + ", you will drive a" + " " + getCar() + " your wife is" + " " + nameSpouse()}
// console.log(mash())
const readline = require("readline").createInterface({
    input: process.stdin
    output: process.stdout 
})

readline.question("Add 5 houses", (house) => {
    console.log(house)
    readline.close()
})
// function getHome(){
    
//     let home = []
//     home.push(process.argv[2])
//     home.push(process.argv[3])
//     home.push(process.argv[4])
//     home.push(process.argv[5])
//     home.push(process.argv[6])
//     let H = (Math.floor(Math.random()*home.length))
//     return (home[H])
// }


// function getChildrenCount(){
//     let childrenCount = []
//     childrenCount.push(process.argv[7])
//     childrenCount.push(process.argv[8])
//     childrenCount.push(process.argv[9])
//     childrenCount.push(process.argv[10])
//     childrenCount.push(process.argv[11])
//     let c = (Math.floor(Math.random()*childrenCount.length))
//     return childrenCount[c]
    
    

// }

// function getCar(){
//     let car = []
//     car.push(process.argv[12])
//     car.push(process.argv[13])
//     car.push(process.argv[14])
//     car.push(process.argv[15])
//     car.push(process.argv[16])
//     let g = Math.floor(Math.random()*car.length)
//     return car[g]



// }

// function nameSpouse(){
//     let spouse = []
//     spouse.push(process.argv[17])
//     spouse.push(process.argv[18])
//     spouse.push(process.argv[19])
//     spouse.push(process.argv[20])
//     spouse.push(process.argv[21])
//     let s = Math.floor(Math.random()*spouse.length)
//     return spouse[s]
// }



// // function mash(){
// //     return "You will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids!" + ", you will drive a" + " " + getCar() + " your wife is" + " " + nameSpouse()}
// // console.log(mash())

