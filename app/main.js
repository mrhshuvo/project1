// const date = new Date();

// const days = [
//     "Sunday",
//     "Monday", 
//     "Tuesday",
//      "Wednesday",
//       "Thursday", 
//       "Friday",
//       "Saturday",
      
// ];

// const months = [
//     "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
// ]



// if ( date.getHours() > 12){
//     console.log(date.getHours() - 12 + " PM");
// }else{
//     console.log(`${date.getHours()} AM ${date.getMinutes()} ${date.getSeconds()} seconds`)
// }


const old_date = new Date("01 june 2023");

const today = new Date();

const result =  today.getTime() - old_date.getTime();

const claulate = (1000 * 60 * 60 * 24);

const finalReasult = result / claulate ;

console.log(finalReasult);