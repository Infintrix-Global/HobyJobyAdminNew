
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js";
   import { getFirestore, limit } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
   import { doc, deleteDoc,setDoc, getDoc, getDocs, collection, query, where } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

   //import $ from '/public/jquery.fancyTable-master/jquery.fancyTable-master/node_modules/jquery';
  //  import { query, orderBy, limit, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"


   var today = new Date();

   var date = (today.getMonth()+1)  +'/'+today.getDate()+'/'+today.getFullYear() + ',';

   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   
   var dateTime = date+' '+time;

   const firebaseConfig = {
    apiKey: "AIzaSyAADC0o-0zy-R8WWzSY4hq_ckhLzNv6CHM",
    authDomain: "hobyjoby-8b9ca.firebaseapp.com",
    projectId: "hobyjoby-8b9ca",
    storageBucket: "hobyjoby-8b9ca.appspot.com",
    messagingSenderId: "755782612092",
    appId: "1:755782612092:web:98ed2fb25735eb435985f9",
    measurementId: "G-L23JY97GH8"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  var tbody= document.getElementById("tbody5");

  var tbody= document.getElementById("tbody1");


  function AddItemToTable(cat,cby,uat,uby,id,name){

    
      let trow=document.createElement("tr");
      //let td1=document.createElement("td");
      //let td2=document.createElement("td");
      // let td3=document.createElement("td");
      //let td4=document.createElement("td");
      // let td5=document.createElement("td");
      let td6=document.createElement("td");
      let td7=document.createElement("td");

      let btn=document.createElement("button");
      btn.setAttribute("id", "Div4");
      btn.setAttribute("class", "tru");
      btn.innerHTML = '<i class="fa fa-trash-o"></i>';
      td7.appendChild(btn);

      let btn2 = document.createElement("button");
      btn2.setAttribute("id", "Div5");
      btn2.setAttribute("class", "ufgi");
      btn2.innerHTML = '<i class="fas fa-edit"></i>';
      td7.appendChild(btn2);

      // let btn3 = document.createElement("button");
      // btn3.setAttribute("id", "Div6");
      // btn3.setAttribute("class", "uopd");
      // btn3.innerHTML = '<i class="fa fa-save"></i>';
      // td7.appendChild(btn3);

      //td1.innerHTML= id ;
      //td2.innerHTML=cat ;
      // td3.innerHTML= cby;
      //td4.innerHTML=uat ;
      // td5.innerHTML=uby;
      td6.innerHTML=name;
      td6.setAttribute("id", "colorchg");
      



      //trow.appendChild(td1);
      //trow.appendChild(td2);
      // trow.appendChild(td3);
      //trow.appendChild(td4);
      // trow.appendChild(td5);
      trow.appendChild(td6);
      trow.appendChild(td7);
      tbody.appendChild(trow);

   

      $(document).ready(function() {
        $("#Div4").css("background-color", "red");
        $("#Div4").css("color", "white");
        $("#Div4").css("border-color", "white");

        $(".tru").css("background-color", "red");
        $(".tru").css("color", "white");
        $(".tru").css("border-color", "white");
      });
      $(document).ready(function() {
        $("#Div5").css("background-color", "red");
        $("#Div5").css("color", "white");
        $("#Div5").css("border-color", "white");

        $(".ufgi").css("background-color", "red");
        $(".ufgi").css("color", "white");
        $(".ufgi").css("border-color", "white");
    });
    //   $(document).ready(function() {
    //     $("#Div6").css("background-color", "red");
    //     $("#Div6").css("color", "white");
    //     $("#Div6").css("border-color", "white");

    //     $(".uopd").css("background-color", "red");
    //     $(".uopd").css("color", "white");
    //     $(".uopd").css("border-color", "white");
    // });

    var num = String(id);

    btn.onclick = function () {
      var result = confirm("Are you sure you want to delete this Certification Details?");
      if (result) {
      deleteDoc(doc(db, "JobConfig", "Master","Certifications",num))
      .then(()=> {  
        setTimeout("location.reload(true);",120);
      }) 
      //setTimeout("location.reload(true);",3000);
      }
    };

    btn2.onclick = function () {
      // td6.contentEditable = true;
      var table = document.getElementById("myCertiTable");
      var a=table.rows.length;
            var b=table.rows.length;
          var ao = a.toString();
          var tio = String(id);
    let text;
    let person = prompt("Please enter Certification name:", name);
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      // alert(person);
      setDoc(doc(db, "JobConfig", "Master", "Certifications", tio), {
                      name: person,
                      CreatedAt :  dateTime,
                      CreatedBy : "1",
                      UpdatedAt :  dateTime,
                      UpdatedBy : "1",
                      id : tio,
                    })
                    .then(()=> {  
                      setTimeout("location.reload(true);",120);
                    })     
                    .catch((error)=>{
                        console.log(error);
                    }); 
                    // window.onload = function(){
                      // document.getElementById("defaultOpen1").click();
                    // }
    }
  }
  
  



    // btn3.onclick = function () {
    //   td6.contentEditable = false;
    //   td6.style.backgroundColor = "none";
    //   var tio = String(id);
    //   setDoc(doc(db, "JobConfig", "Master", "Certifications", tio), {
    //     name: td6.innerHTML,
    //     CreatedAt :  dateTime,
    //     CreatedBy : "1",
    //     UpdatedAt :  dateTime,
    //     UpdatedBy : "1",
    //     id : String(id),
    //   });
    //   // setTimeout("location.reload(true);",3000);
    // }; 
  }

  function AddAllItemsToTable(certification,id){
      tbody.innerHTML="";

      certification.forEach((element,i) => {
      AddItemToTable(element.CreatedAt,element.CreatedBy,element.UpdatedAt,element.UpdatedBy,id[i],element.name);    
      });

  }
  setTimeout(AddItemToTable, 3000);
var cert=[];
var id=[];
var querySnapshot = query(collection(db, "JobConfig", "Master", "Certifications"));
const q = await getDocs(querySnapshot);
q.forEach((doc) => {
  cert.push(doc.data());
  id.push(doc.id);

 // console.log(doc.id);
  //console.log(doc.data());
  AddAllItemsToTable(cert,id);

});

