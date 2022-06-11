alert("Hello! Tell me some information about you and i will make a marksheet for you.");

var group=prompt("What is your Group");
var passedYear=parseInt(prompt("Enter your passed year"));
var rollNumber=parseInt(prompt("Enter your roll number"));
var stdName= prompt("Enter your full name");
var fatherName=prompt("Enter your Father name");
var birthDate=parseInt(prompt("Enter your Date of Birth"));
var institute=prompt("Enter your Institute name");

if(group.value===" " || group.value===null){
    alert("You didn't input group!")
}
else if(passedYear.value===" " || passedYear.value===null){
    alert("You didn't input passed year!")
}
else  if(rollNumber.value===" " || rollNumber.value===null){
    alert("You didn't input roll number!")
}
else  if(stdName.value===" " || stdName.value===null){
    alert("You didn't input your full name!")
}
else  if(fatherName.value===" " || fatherName.value===null){
    alert("You didn't input your Father name!")
}
else  if(birthDate.value===" " || birthDate.value===null){
    alert("You didn't input your Date of Birth!")
}
else  if(institute.value===" " || institute.value===null){
    alert("You didn't input your Institute name!")
}
else{
    document.getElementById("group").innerText = group+" ";
    document.getElementById("year").innerText = passedYear;
    document.getElementById("rollnbr").innerText = rollNumber;
    document.getElementById("stdname").innerText = stdName;
    document.getElementById("fathername").innerText = fatherName;
    document.getElementById("birth").innerText = birthDate;
    document.getElementById("institute").innerText = institute;
};

    var chem=parseInt(prompt("Enter your Chemistry marks out of 100"));
    var phy=parseInt(prompt("Enter your Physics marks out of 100"));
    var urdu=parseInt(prompt("Enter your Urdu marks out of 100"));
    var eng=parseInt(prompt("Enter your English marks out of 100"));  
    var maths=parseInt(prompt("Enter your Mathematics marks out of 100"));
    var islamiat=parseInt(prompt("Enter your Islamiat marks out of 100"));
    var pst=parseInt(prompt("Enter your Pakistan Studies marks out of 100"));

    var allMarks=[chem,phy,urdu,eng,maths,islamiat,pst];

 for (j=0; j<allMarks.length; j++){
    if(allMarks[j]>100 || allMarks[j]<1){
        alert("Out of 100!\nPlease enter correct marks! ");break;
    }
    else{
        document.getElementById("chem").innerText = chem;
        document.getElementById("phy").innerText = phy;
        document.getElementById("math").innerText = maths;
        document.getElementById("urdu").innerText = urdu;
        document.getElementById("eng").innerText = eng;
        document.getElementById("isl").innerText = islamiat;
        document.getElementById("pst").innerText = pst;
    }
};
    var obtainedMarks=chem+phy+maths+islamiat+eng+pst+urdu;
    document.getElementById("obtmark").innerText = obtainedMarks;
    var percentage=Math.round(((obtainedMarks*100)/700));
    document.getElementById("percent").innerText = percentage+"%";


    if (percentage>=100){
        document.getElementById("grade").innerText = "Error";
    }
    else if(percentage>=80){
        document.getElementById("grade").innerText = "A-1 grade";
        }
            else if(percentage>=70){
            document.getElementById("grade").innerText = "A grade";
            }
            else if(percentage>=60){
            document.getElementById("grade").innerText = "B grade";
        }
            else if(percentage>=50){
            document.getElementById("grade").innerText = "C grade";
        }
        else{
            document.getElementById("grade").innerText = "Fail";
        };
    



