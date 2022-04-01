var c = document.querySelectorAll("#keyboard>div");
var bag = document.querySelector("#display")
for(var i =0; i<c.length; i++){
  c[i].addEventListener("click", myfunction)
}


function myfunction(){
  var targetNumber = event.target.innerText;
  switch(targetNumber){
    case "C":
      bag.innerText="";
      break;
      case "=":
        bag.innerText=eval(bag.innerText);
        break;
        default :
        bag.innerText= bag.innerText+targetNumber;
        break;
  }
}