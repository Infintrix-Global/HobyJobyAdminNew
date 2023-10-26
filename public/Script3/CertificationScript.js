import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js";
import { getFirestore, limit } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
import { doc, deleteDoc,setDoc, updateDoc, getDocs, collection, query, orderBy } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

//import $ from '/public/jquery.fancyTable-master/jquery.fancyTable-master/node_modules/jquery';
//  import { query, orderBy, limit, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"


var dateTime = new Date().toLocaleString().replace(',','');

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


  var tbody= document.getElementById("tbody1");


  function AddItemToTable(cat,cby,uat,uby,id,name){

      let trow=document.createElement("tr");
      //let td1=document.createElement("td");
      //let td2=document.createElement("td");
      // let td3=document.createElement("td");
     // let td4=document.createElement("td");
      // let td5=document.createElement("td");
      let td6=document.createElement("td");
      let td7=document.createElement("td");
   
      let btn=document.createElement("button");
      btn.setAttribute("id", "delQ");
      btn.setAttribute("class", "pooa");
      btn.innerHTML = '<i class="fa fa-trash-o"></i>';
      td7.appendChild(btn);


      let btn2 = document.createElement("button");
      btn2.setAttribute("id", "editQ");
      btn2.setAttribute("class", "csjs");
      btn2.innerHTML = '<i class="fas fa-edit"></i>';
      td7.appendChild(btn2);

      // let btn3q = document.createElement("button");
      // btn3q.setAttribute("id", "Saveq");
      // btn3q.setAttribute("class", "cwsq");
      // btn3q.innerHTML = '<i class="fa fa-save"></i>';
      // td7.appendChild(btn3q);
      

     // td1.innerHTML= id ;
     // td2.innerHTML=cat ;
      // td3.innerHTML= cby ;
     // td4.innerHTML=uat ;
      // td5.innerHTML=uby;
      td6.innerHTML=name;

      


     //trow.appendChild(td1);
     // trow.appendChild(td2);
      // trow.appendChild(td3);
      //trow.appendChild(td4);
      // trow.appendChild(td5);
      trow.appendChild(td6);
      trow.appendChild(td7);
     
      tbody.appendChild(trow);

      
      $(document).ready(function() {
        $("#delQ").css("background-color", "red");
        $("#delQ").css("color", "white");
        $("#delQ").css("border-color", "white");

        $(".pooa").css("background-color", "red");
        $(".pooa").css("color", "white");
        $(".pooa").css("border-color", "white");
      });
      $(document).ready(function() {
        $("#editQ").css("background-color", "red");
        $("#editQ").css("color", "white");
        $("#editQ").css("border-color", "white");

        $(".csjs").css("background-color", "red");
        $(".csjs").css("color", "white");
        $(".csjs").css("border-color", "white");
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
      document.getElementById("id").value = num;
      document.getElementById("certificationName").value = name;
      document.querySelector("#favDialog").showModal();
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
  

  function AddAllItemsToTable(certification){
      tbody.innerHTML="";

      certification.forEach((element) => {
      AddItemToTable(element.CreatedAt,element.CreatedBy,element.UpdatedAt,element.UpdatedBy,element.id,element.name);    
      });

  }
var cert=[];
var id=[];
var q1 =  query(collection(db, "JobConfig", "Master", "Certifications"),orderBy("UpdatedAt", "desc"));
var querySnapshot =  await getDocs(q1);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
    cert.push(doc.data());

 // console.log(doc.id);
  //console.log(doc.data());
  AddAllItemsToTable(cert);

});

