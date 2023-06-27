//Create an empty generic object
var obj=Object();
document.write("<br/"+typeof(obj));
document.write("<br/"obj.firstname+""+obj.lastNmae);
var arr=[1,23,45,87];
var arr2=["a","b","c"];
{
document.write("<br/>",name);
document.write("<br/>",num);
document.write("<br/>",float);
document.write("<br/>",bool);
document.write("<br/>",arr);
document.write("<br/>",arr2,"<br>");
}
document.write("<br/>Printing types:<br>");
{
    document.write("<br/>",typeof(name));
    document.write("<br/>",typeof(num));
    document.write("<br/>",typeof(float));
    document.write("<br/>",typeof(bool));
    document.write("<br/>",typeof(arr));
    document.write("<br/>",typeof(arr2));   
}
document.write("<br>Object");
//non primitive Datatype



var obj = new Object();
document.write("<br/>"+typeof(obj));

document.write("<br/>"+obj.FirstName+""+obj.LastName);

//Create a user defined object
var car = {
    model: "BMW X3",
    color: "white",
    doors: 5
}
    document.write("<br/>"+car.model+""+car.color+""+car.doors);

    //Array Datatype
    var Demo = ["BMW","Mercedes-Benz","Volkswagen"];
    document.write("<br/>"+cars[0]);
    document.write("<br/>"+cars[1]);
    document.write("<br/>"+cars[2]);
    document.write("<br/>"+cars[n]);

    //Function datatype
    var Demo = function(){
        return "Hello Welcome to Javascript!";
    }
    document.write("<br/>"+typeof(Demo));
    document.write("<br/>"+(Demo));




