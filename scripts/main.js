x=prompt("Enter a number: ");
if (x<=40) {
    alert("Akwaaba");
} else{
    alert("Fisi!");
}


var myHeading=document.querySelector("h1");
var myimage=document.querySelector("#myImage");
var image1="images/wil4.jpg";
var image2="images/Nairobi.jpg";

myimage.onclick=function(){
    var mySrc=myImage.getAttribute("src");
    if(mySrc===image1){
        myImage.setAttribute("src",image2);
    }else{
        myImage.setAttribute("src",image1);
    }
}

function changeColor(x){
    if(x.style.color === "red"){
        x.style.color = "white";
    }else{
        x.style.color = "red";
    }
}