function addNewWEFeild(){
    //console.log("Adding new field")
    
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weFeild");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 5);
    newNode.setAttribute("placeholder","Enter here");
    
    
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    
    weOb.insertBefore(newNode , weAddButtonOb);
    }
    
    function addNewAqFeild(){
    
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqFeild");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 5);
    newNode.setAttribute("placeholder","Enter Here");
    
    
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    
    aqOb.insertBefore(newNode , aqAddButtonOb);
    
    }
    function addNewInFeild(){
      let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("inFeild");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 5);
    newNode.setAttribute("placeholder","Enter Here");
    
    
    let inOb = document.getElementById("in");
    let inAddButtonOb = document.getElementById("inAddButton");
    
    inOb.insertBefore(newNode , inAddButtonOb);
    
    
    }
    
    
    
    
    //generating resume
    function generateCV(){
        // console.log("generating resume");
        let nameField = document.getElementById("nameFeild").value;
        let nameT1 = document.getElementById("nameT1");
        nameT1.innerHTML = nameField;
    
        document.getElementById("nameT2").innerHTML = nameField;
    
    
        //contacts 
        document.getElementById("contactT").innerHTML = document.getElementById("ContectFeild").value;
    
        // address
        document.getElementById("addressT").innerHTML =  document.getElementById("AddresFeild").value;
    
        //marital status
        document.getElementById("maritalstatusT").innerHTML = document.getElementById("maritalstatus").value;
    
        //mail 
        document.getElementById("emailT").innerHTML = document.getElementById("EmailFeild").value;
    
        //dob
        document.getElementById("dobT").innerHTML = document.getElementById("dobFeild").value;
    
        //gender
        document.getElementById("genderT").innerHTML = document.getElementById("genderstatus").value;
    
        //code for setting photo
    
    
    
       // linkedIn link
    
       document.getElementById("liT").innerHTML = document.getElementById("LIFeild").value;
    
       //insta link
       document.getElementById("instT").innerHTML = document.getElementById("InstaFeild").value;
    
    
       //facebook link
       document.getElementById("fbT").innerHTML = document.getElementById("fbFeild").value;
    
    
       //portfolio link
    
       document.getElementById("pfT").innerHTML = document.getElementById("PFFeild").value;
    
       //objective 
       document.getElementById("ObjectiveT").innerHTML = document.getElementById("ObjectiveField").value;
    
       //work Experience
       let wes = document.getElementsByClassName("weFeild");
       let str = "";
       for (let e of wes) {
           str += `<li>${e.value}</li>`;
       }
       document.getElementById("weT").innerHTML = str;
       // acadmic qualification
       let aqs= document.getElementsByClassName("eqFeild");
       let str1 ="";
       for(let e of aqs){
         str1= str1+`<li> ${e.value}</li>`;
       }
       document.getElementById("aqT").innerHTML = str1;
    
       //internship
       let ins= document.getElementsByClassName("inFeild");
       let str2 ="";
       for(let e of ins){
         str2= str2+`<li> ${e.value}</li>`;
       }
       document.getElementById("inT").innerHTML = str2;
    
    
    
    
    
       //hobbies
       document.getElementById("hobbiesT").innerHTML = document.getElementById("HobbiesField").value;
    
       document.getElementById("cv-form").style.display = "none"; 
       document.getElementById("cv-template").style.display ="block";
       
    
    }
    function printCV(){
        window.print();
    }