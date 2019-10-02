let users = [];

    let user1 = {
     name: "John",
     grades: [80, 40, 75]
    };

    let user2 = {
        name: "Mark",
        grades: [50, 63, 71]
       };

       let user3 = {
        name: "Maggie",
        grades: [90, 95, 100]
       };
    users.push(user1);
    users.push(users2);
    users.push(users3);
/*
 *Prints out the user's name and their average grade
 * @param {*} users list of users
 */
function calculateAverage(users) {
    //looping through the users array
     for( var index=0; index<users.length; index++) {
       var user = users[index];
       console.log(user.name);
       console.log(user.grades);
       var sumGrades = 0;
       for(var gIndex=0 ; gIndex<user.grades.length; gIndex++) {
         sumGrades+= user.grades[gIndex];
       }
       var avgGrade = 0;

       if(user.grades.length>0) {
         avGrade = sumGrades / user.grades.length;
       }
       console.log(`avg = ${avgGrade}`);
       
     }


 }
  calculateAverage(users);