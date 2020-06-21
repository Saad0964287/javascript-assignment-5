let a=2;
document.write("a = "+a+"<br>");
let b=1;
document.write("b = "+b+"<br>");

let result= --a - --b + ++b + b--;
document.write("Result of --a - --b + ++b + b-- = "+result);

/* 
--a;  =(1)
--a - --b;=(1-0)
--a - --b + ++b;=(1-0+1)
--a - --b + ++b + b--;=(1-0+1+1)
*/