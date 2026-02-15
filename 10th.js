let inputs = document.querySelectorAll("input");
let Button = document.querySelector("button");
let marks = document.querySelector(".marks");
let percentage = document.querySelector(".percentage");
let grade = document.querySelector(".grade");
let result = document.querySelector(".result");



Button.addEventListener("click", ()=>{
   let isEmpty = false;

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === "") {
            isEmpty = true;
            break;
        }
    }

    if (isEmpty) {
        result.innerText = "All marks are required!";
        return;
    }

    result.innerText = "";
   
    let total = 0;
    for(let i = 0; i < inputs.length; i++){
        total = total + Number(inputs[i].value);
    }
   
    marks.innerText = "Total Marks:" + total;
   

    let percent = total / 6;
    percentage.innerText = "percentage:" + percent.toFixed(2) + "%";

    let g = "";

    if(percent > 90){
        g = "A+";
    } else if(percent > 75){
        g = "A";
    } else if(percent > 60){
        g = "B";
    } else if(percent > 50){
        g = "C";
    } else {
        g = "fail";
    }

    grade.innerText = "grade:" + g;
});
