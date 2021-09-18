function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

 var powerOfR1;
 var powerOfR2;
 var powerOfR3;
 var powerOfV1;
 var powerOfV2;
 var I;

function V1Change(){


  
  if(document.getElementById("VA1").value == "Short")
  {

    document.getElementById("V1").value = "0";
    document.getElementById("V1").readOnly = true;

  }
  else{
    
    document.getElementById("V1").value = "0";
    document.getElementById("V1").readOnly = false;
  }
}


function V2Change(){


  
  if(document.getElementById("VA2").value == "Short")
  {

    document.getElementById("V2").value = "0";
    document.getElementById("V2").readOnly = true;

  }
  else{
    
    document.getElementById("V2").value = "0";
    document.getElementById("V2").readOnly = false;
  }
}


var flag=0;

  function verify(){

    flag=1;
    
  var R1 = document.getElementById("R1").value;
  var R2 = document.getElementById("R2").value;
  var R3 = document.getElementById("R3").value;
  var V1;
  var V2;
  // var V1 = document.getElementById("V1").value;
  // var V2 = document.getElementById("V2").value;

  // var Sum1 = parseInt(R1)+parseInt(R3);
  // var Sum2 = parseInt(R2)+parseInt(R3);

  


  if(document.getElementById("VA1").value == "Open")
  {

    V1 = document.getElementById("V1").value;

  }
  else{

    V1 = 0;
    document.getElementById("V1").value = "0";
    document.getElementById("V1").readOnly = true;
  }


  if(document.getElementById("VA2").value == "Open")
  {

    V2 = document.getElementById("V2").value;

  }
  else{

    V2 = 0;
  }

  // console.log(R1,R2,R3,flagV1,VA2.value);



  //  var I = nerdamer.solveEquations([`200x - 100y = 10`, `-100x + 200y = -10`]);
//  console.log(Sum1, typeof Sum1);
//  console.log(R3);
//  console.log(V1);
//  console.log(R3);
//  console.log(Sum2);
//  console.log(V2);


 

   I = nerdamer.solveEquations([`${parseInt(R1)+parseInt(R3)}x + ${R3}y = ${V1}`, `${R3}x + ${parseInt(R2)+parseInt(R3)}y = ${V2}`]);
  console.log(I.toString());



 console.log(I);


// Collecting the powers of each components
  powerOfR1 = -Math.round((Math.pow(I[0][1], 2))*R1*10000)/10000;
  powerOfR2 = -Math.round((Math.pow(I[1][1], 2))*R2*10000)/10000;
  powerOfR3 = -Math.round((Math.pow((I[0][1] + I[1][1]), 2))*R3*10000)/10000;
  powerOfV1 = Math.round(V1*(I[0][1])*10000)/10000;
  powerOfV2 = Math.round(V2*(I[1][1])*10000)/10000;


//  console.log(powerOfR1);
//  console.log(powerOfR2);
//  console.log(powerOfR3);
//  console.log(powerOfV1);
//  console.log(powerOfV2);

 

document.getElementById("V1check").value = powerOfV1;
document.getElementById("V2check").value = powerOfV2;
document.getElementById("R1check").value = powerOfR1;
document.getElementById("R2check").value = powerOfR2;
document.getElementById("R3check").value = powerOfR3;
document.getElementById("total").value = parseInt(powerOfV1) + parseInt(powerOfV2) + parseInt(powerOfR1) + parseInt(powerOfR2) + parseInt(powerOfR3);


  }
 var i=1;



  // Adding in table
function addToTable(){


 if(flag==1)
    {

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, add to table'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            
            'Successfully added to table.',
            
          )
        }
      })



      document.getElementById(`R1Value_${i}`).innerHTML = R1.value;
      document.getElementById(`R1Power_${i}`).innerHTML = powerOfR1;
      document.getElementById(`R2Value_${i}`).innerHTML = R2.value;
      document.getElementById(`R2Power_${i}`).innerHTML = powerOfR2;
      document.getElementById(`R3Value_${i}`).innerHTML = R3.value;
      document.getElementById(`R3Power_${i}`).innerHTML = powerOfR3;
      document.getElementById(`V1Value_${i}`).innerHTML = V1.value;
      document.getElementById(`V1Power_${i}`).innerHTML = powerOfV1;
      document.getElementById(`V2Value_${i}`).innerHTML = V2.value;
      document.getElementById(`V2Power_${i}`).innerHTML = powerOfV2;
      document.getElementById(`I1Value_${i}`).innerHTML = Math.round(I[0][1]*1000)/1000;
      document.getElementById(`I2Value_${i}`).innerHTML = Math.round(I[1][1]*1000)/1000;

      i++;
      flag=0;

    }
    else{
      alert("First RUN the simulator");
    }
    

  }


