// Question 2

// Write a javascript program that will take 2 numbers from the HTML page and display them on the
// HTML page after the addition of those 2 numbers.

function add()
{
    var c=document.getElementsByClassName("num");
    var s=Number(c[0].value)+Number(c[1].value);
    // console.log(s);
    document.getElementById("answer").value=s;
}



