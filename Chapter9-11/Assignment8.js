let input=prompt("Input number to check divivsibility");
let divisible=parse.Int(input)%3;

if(divisible==0){
    alert(input+" is divisisble by 3")
}
else{
    alert(input+" is not divisisble by 3")
}