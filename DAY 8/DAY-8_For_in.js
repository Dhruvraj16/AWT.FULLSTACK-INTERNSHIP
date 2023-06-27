const Human = {FirstName: "Dhruvrajsinh", LastName:"Chauhan", age:19};
for (let H in Human){
    document.write("<br/>"+H);
}
document.write("<br/>");

for (let H in Human) {
    document.write("<br/>"+Human[H]);   
}