let subject1=prompt("Please input 1st subject Total","100");
let subject2=prompt("Please input 2nd subject Total","100");
let subject3=prompt("Please input 3rd subject Total","100");

let obtained1=prompt("Input marks of 1st subject","60");
let obtained2=prompt("Input marks of 2nd subject","70");
let obtained3=prompt("Input marks of 3rd subject","80");

let totalObtained=parseInt(obtained1)+parseInt(obtained2)+parseInt(obtained3);
let totalMarks=parseInt(subject1)+parseInt(subject2)+parseInt(subject3);
let percentage=totalObtained/totalMarks*100;
let grade;
let remarks;

if(percentage>=80){
    grade="A+"
    remarks="Excellent";
}
else if(percentage>=70 && percentage<=80){
    grade="A"
    remarks="Good";
}
else if(percentage>=60 && percentage<=70){
    grade="B"
    remarks="Need Improvement";
}
else if(percentage<=60){
    grade="F"
    remarks="Fail";
}

document.write(`
<h1>Marks Sheet</h1>
<h3>Total Marks: ${totalMarks}</h3>
<h3>Total Obtained: ${totalObtained}</h3>
<h3>Percentage: ${percentage}</h3>
<h3>Grade: ${grade} </h3>
<h3>Remarks: ${remarks}</h3>
`);
