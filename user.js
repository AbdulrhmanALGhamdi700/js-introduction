// Abdulrhman AL-Ghamdi 2140786

 //grade
function calculateGrade() {
    var gradeInput = document.getElementById("gradeInput").value;
    var message;
  
    if (gradeInput > 100) {
      message = "Terrific! You have over 100%!";
    } else if (gradeInput == 100) {
      message = "Super! You have 100%";
    } else if (gradeInput > 95) {
      message = "Excellent work! Your score is between 95-99.";
    } else if (gradeInput > 90) {
      message = "Great work! Your score is between 90-95.";
    } else {
      message = "Your score is below 90.";
    }
  
    alert(message);
  }

 //product
function calculateProduct() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
    
    var product = num1 * num2 * num3;
    
    alert("The product is: " + product);
  }

 //sum
var sum = 0;
var isCalculating = true;

function calculateSum() {
  var numberInput = parseFloat(document.getElementById("numberInput").value);

  if (!isNaN(numberInput)) {
    sum += numberInput;
    alert("Current sum: " + sum);
  } else {
    alert("Invalid number. Please enter a valid number.");
  }
}

function cancel() {
  isCalculating = false;
  alert("Final sum: " + sum);
}

//greeting
function printGreeting() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
  
    var currentDate = new Date();
    var formattedDate = currentDate.toDateString();
  
    var greeting = "Hello " + firstName + " " + lastName + "! Today is " + formattedDate + ".";
    alert(greeting);
  }