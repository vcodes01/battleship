
class Ussship {
    constructor (name, hull, firepower, accuracy, type) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.type = type; 
    }

    //if enemy acc < Math.random, subtract firepower from enemy's hull 
    attack(target){
        let checkAgainst = Math.random()
        if(target.accuracy < checkAgainst){
            target.hull -= this.firepower
            if(target.type === "enemy"){
                console.log(`We hit ${target.name}! \nHull: ${target.hull}`)
            }else{
                console.log(`We've been hit! \nHull: ${target.hull}`)
            }
        }else{
            console.log(`We missed, ${target.type} attacks now. Brace yourself!`)
        }
       if(target.hull < 1){
           return true; 
       } else{
           return false; 
       }
    }
}

class Alienship  extends Ussship{
    constructor (name, hull, firepower, accuracy, type) {
        super(name, hull, firepower, accuracy, type)
    }
}  

let ussschwartz = new Ussship('Ussschwartz', 20, 5, .7, "Player")

let alienShips = []
for( let i = 0; i < 6; i++){
    let alienHp = Math.round((Math.random() * (6 - 3)) + 3)
    let alienFp = Math.round((Math.random() * (4 - 2)) + 2)
    let alienAcc = (Math.random()* (2) + 6) / 10
    alienShips.push(new Alienship (`enemy${i+1}`, alienHp, alienFp, alienAcc, "enemy"))
}

let battleBegin = null; 
while(battleBegin !== ("yes" || "no")){
    battleBegin = window.prompt("The aliens are ready to jump us. Do you want to start the battle?:", "yes/no")
    console.log(battleBegin)
}

let attackOrRetreat = null;
if(battleBegin === "yes"){
    let activeEnemy = 0; 
    while(ussschwartz.hull > 0){
        attackOrRetreat = null; 
        while(attackOrRetreat !== ("attack" || "retreat")){
            attackOrRetreat = window.prompt("Would you like to attack or retreat?", "attack/retreat")
        }
        if(attackOrRetreat === "attack"){
            if(ussschwartz.attack(alienShips[activeEnemy])){
                activeEnemy++;
                console.log("Enemy destroyed!") 
            }else{
                alienShips[activeEnemy].attack(ussschwartz)
            }
            
        }else{
            window.prompt("We are retreating")
        }
    }
}
// class Ussship {
//     constructor (name, hull, firepower, accuracy) {
//         this.name = name;
//         this.hull = hull;
//         this.firepower = firepower;
//         this.accuracy = accuracy;
//     }
// }
// class Alienship  extends Ussship{
//     constructor (name, hull, firepower, accuracy) {
//         super(name, hull, firepower, accuracy)
        
// }
// }
 
// // let remainingHull = true


// let ussschwartz = new Ussship('Ussschwartz', 20, 5, .7)

// let alienHull = [];
// for (let i = 0; i < 6; i++) {
//     let alienHp = Math.round((Math.random() * (6 - 3)) + 3)
//     alienHull.push (alienHp)
// }
// let alienFirepower = [];
// for (let i = 0; i < 6; i++) {
//     let alienFp = Math.round((Math.random() * (4 - 2)) + 2)
//     alienFirepower.push (alienFp)
// }   
// let alienAccuracy = [];
// for (let i = 0; i < 6; i++) {
//     let alienAcc = (Math.random()* (2) + 6) / 10
//     alienAccuracy.push(alienAcc)
// } 


// // let alienship1 = new Alienship('enemy1', alienHull[0], alienFirepower[0], alienAccuracy[0])

// // let alienship2 = new Alienship('enemy2', alienHull[1], alienFirepower[1], alienAccuracy[1])
// // let alienship3 = new Alienship('enemy3', alienHull[2], alienFirepower[2], alienAccuracy[2])
// // let alienship4 = new Alienship('enemy4', alienHull[3], alienFirepower[3], alienAccuracy[3])
// // let alienship5 = new Alienship('enemy5', alienHull[4], alienFirepower[4], alienAccuracy[4])
// // let alienship6 = new Alienship('enemy6', alienHull[5], alienFirepower[5], alienAccuracy[5])

// // console.log(alienship1)
// // console.log(alienship2)
// // console.log(alienship3)
// // console.log(alienship4)
// // console.log(alienship5)
// // console.log(alienship6)

// let alienships = []
// for (let i = 0; i < 6; i++) {
//     let alienHp = Math.round((Math.random() * (6 - 3)) + 3)
//     let alienFp = Math.round((Math.random() * (4 - 2)) + 2)
//     let alienAcc = (Math.random()* (2) + 6) / 10
//     alienShips.push(new Alienship (`enemy ${i+1}, alienHp, alienFp, alienAcc, "enemy"`))

//     letbattleBegn = null;
//     while (battleBegin !== ("yes" ||"no")){
//         battleBegin = window.prompt("The aliens are ready to jump us. Do you want to start the battle", "yes/no") 
//         console.log(battleBegin) 
//       }
// }
// if(battleBegin === ("yes")) {
//     while(ussschwartz.hull > 0) {
//         let attackOrRetreat = null; 
//     while !== ("attack || "retreat")) {
//             attackOrRetreat = window.prompt("Would you like to attack or retreat?")
//         }
//         if(attackOrRetreat === "attack") {
//             activeEnemy++;
//             console.log("Enemy destroyed!")
//         } else {
//             window.prompt("We are retreating")
//         }
//     } 
// }