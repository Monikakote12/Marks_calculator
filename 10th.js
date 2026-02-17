let inputs = document.querySelectorAll("input");
let Button = document.querySelector("button");
let marks = document.querySelector(".marks");
let percentage = document.querySelector(".percentage");
let grade = document.querySelector(".grade");
let result = document.querySelector(".result");
let performance = document.querySelector(".performance");



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
        performance.innerText = " Performance :Very Good performance, keep it up.";
    } else if(percent > 75){
        g = "A";
        performance.innerText = "Performance :Good performance, keep it up.";
    } else if(percent > 60){
        g = "B";
        performance.innerText = "Performance :You need to improve for better performance, keep it up";
    } else if(percent > 50){
        g = "C";
        performance.innerText = "Performance :You need to improve for better performance."
    } else {
        g = "fail";
        performance.innerText = "Performance :Focus on your studies, learn from your mistake."
    }

    grade.innerText = "grade:" + g;
});
