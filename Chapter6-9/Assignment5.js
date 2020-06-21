let subject1=prompt("Please input 1st subject name","English");
let subject2=prompt("Please input 2nd subject name","Maths");
let subject3=prompt("Please input 3rd subject name","History");
let totalMarks=100;
let obtained1=prompt("Input marks of 1st subject","60");
let obtained2=prompt("Input marks of 2nd subject","70");
let obtained3=prompt("Input marks of 3rd subject","80");
let totalObtained=parseInt(obtained1)+parseInt(obtained2)+parseInt(obtained3);

document.write("<h1>Mark Sheet</h1>");
document.write(`
<table>
<th>Subject</th>
<th>Total</th>
<th>Obtained</th>
<th>Percentage</th>
<tr>
<td>${subject1}</td>
<td>${totalMarks}</td>
<td>${obtained1}</td>
<td>${obtained1/totalMarks*100}%</td>
</tr>
<tr><td>${subject2}</td>
<td>${totalMarks}</td>
<td>${obtained2}</td>
<td>${obtained2/totalMarks*100}%</td>
</tr>
<tr><td>${subject3}</td>
<td>${totalMarks}</td>
<td>${obtained3}</td>
<td>${obtained3/totalMarks*100}%</td>
</tr>
<tfoot>
<td></td>
<td>${totalMarks*3}</td>
<td>${totalObtained}</td>
<td>${totalObtained/(totalMarks*3)*100}%</td>
</tfoot>
</table>`);