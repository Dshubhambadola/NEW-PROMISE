/**
 * Created by shubham on 24/11/17.
 */

 var isBhavikHappy = false;

  var willGetSalary = new Promise(
      function (resolve ,reject) {
          if(isBhavikHappy){
              var salary = {
                  empSalary : $,
                  dateOfSalary : "always after 5th"
              };
              resolve(salary);
          }else {
               var resoneForNotHappy = new Error('Always Tech team Not Working Coming Late specially Shubham badola ')
              reject(resoneForNotHappy);
          }
      }
  );




function askHrWhySalaryIsNotCreadited() {
    willGetSalary.then(function (salaryStatus) {
        console.log(salaryStatus);
    })
        .catch(function (error) {
            console.log(error.message);
        })
}

askHrWhySalaryIsNotCreadited();