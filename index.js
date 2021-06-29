// Code your solution in this file!

const homeSpot = 42;
const feetPerBlock = 264

function distanceFromHqInBlocks(blocks){
if (blocks < 42){

let first = homeSpot - blocks;

return first  
}
let second = blocks - homeSpot;
return second
}

function  distanceFromHqInFeet(blocks) {

    if (blocks < 42 ){
        let homeFeet = 42 - blocks
        return homeFeet *feetPerBlock
    }
    let feetHome =   blocks - 42;
    return feetHome*feetPerBlock

    }
function distanceTravelledInFeet(pointA, pointB) {

    let disFeet = pointB - pointA;

    if (disFeet < 0){
        let disFeet = pointA -pointB
        return disFeet * feetPerBlock
    }
    return disFeet * feetPerBlock 

}
function calculatesFarePrice(start, destination){
    
    let blocks = (start - destination);
    
     let feet =  (Math.abs(blocks) * feetPerBlock) ;
 
     if (feet <= 400){
          return feet = 0
     }
 
     else if (feet  < 2000 ){
 
         let round = (feet -400) * .02;
         return round 
     }
 
     else if (feet >= 2001 && feet < 2500){
         let charge =25;
         return charge
     }
 
     else if (feet >= 2501 ){
         return 'cannot travel that far'
     }
   
     }