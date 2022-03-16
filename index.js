function calculateAge() 
{
  const date = document.getElementById("date").value;
  const dob = new Date(date);
  const now = new Date();
  const diff = Math.abs(now - dob );
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); 
  if(age<=1){
    document.getElementById("date2").innerHTML= "Your age is : 0";
  }
  else{
    document.getElementById("date2").innerHTML= "Your age is : " + age ;
  }
 
  console.log(date);
  console.log(dob);
  console.log(now);
  console.log(age);
}
