let priceOfItem1=400;
let priceOfItem2=300;
let quantityOfItem1=2;
let quantityOfItem2=5;
let shippingCharges=100;
let total = (priceOfItem1*quantityOfItem1)+(priceOfItem2*quantityOfItem2)+shippingCharges;

    document.write("Price of Item 1 is "+priceOfItem1+" Rs.<br>");
    document.write("Quantity of Item 1 is "+quantityOfItem1+"<br>");
    document.write("Price of Item 2 is "+priceOfItem2+" Rs.<br>");
    document.write("Quantity of Item 2 is "+quantityOfItem2+"<br>");
    document.write("Shipping Charges are "+shippingCharges+" Rs.<br>");
    document.write("Total is "+total+" Rs.");
document.getElementsByTagName("body")