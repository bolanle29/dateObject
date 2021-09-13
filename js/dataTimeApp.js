// Question 1
// Create a JavaScript application that will take date input from user and display how old they are.

        //for input   
// let year=eval(prompt("Enter your year of birth"))
// console.log(dates.getFullYear())
          //To get age of User
// dates=new Date()
// let age = dates.getFullYear()-year
// console.log("You are " + age + " years old")


      

       //Get Month
// console.log(dates.getMonth()+1)
      //Get Month
// console.log(dates.getDate())
      //    Get day
// console.log(dates)
      //Get Age
// console.log(dates.getTime())




// // Question 2

// // dates=new Date
// current = new Date()
// // console.log(current)
// expiry = new Date ("May 29 2023")
// // dd=expiry.getFullYear()
// let diff = expiry-current;
// // console.log(diff)

//       //  get days
// let days = Math.floor(diff/(1000*60*60*24));

//       // get hours
// let hours = Math.floor(diff/(1000*60*60));   

//       // get secs
// let seconds = Math.floor(diff/(1000*60));   

// if (expiry===current){
//         console.log("Buhari's term end today" + expiry)
//  }else{
//        console.log("Buhari's Tenure ends in "+ days + " days, " + hours + " hour, " + seconds+ " seconds to go")
//   }





// Question 3



let countDown = new Date ("September 15, 2021 12:00:00")

// To update per second
let count = setInterval(function(){
//Get current time
let currentDate = new Date().getTime();
// distance between countDown date & time and current date & time
let difference = countDown - currentDate

// to get time remaining days

// get days
let days = Math.floor(difference/(1000*60*60*24))
// console.log(days)

// get hours
 let hours = Math.floor(difference/(1000*60*60*24))/(1000*60*24)
//  console.log (hours)

// get minutes
let Minutes = Math.floor(difference/(1000*60*60))/(1000*60)

// get seconds
let Seconds = Math.floor(difference/(1000*60))/(1000)
})

//  if (difference>=24)
 if (hours>=24){
       console.log("You have exceeded grace period, your Provide Help order has been redirected to another Participant")
 } else{
       console.log( `You have ${days} days ${ hours} hours ${Minutes} minutes ${Seconds} seconds left`)
 }


