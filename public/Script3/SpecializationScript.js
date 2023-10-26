
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js";
   import { getFirestore, limit } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
   import { doc, deleteDoc,updateDoc, getDoc, getDocs, collection, query, orderBy } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

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


var tbody= document.getElementById("tbody7");


    function AddItemToTable6(cat,cby,rui){
        let trow=document.createElement("tr");
        //let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");



        let btnsp=document.createElement("button");
        btnsp.setAttribute("id", "delsp");
        btnsp.setAttribute("class", "seb");
        btnsp.innerHTML = '<i class="fa fa-trash-o"></i>';
        td4.appendChild(btnsp);


        let btn2sp = document.createElement("button");
        btn2sp.setAttribute("id", "editsp");
        btn2sp.setAttribute("class", "casD");
        btn2sp.innerHTML = '<i class="fas fa-edit"></i>';
        td4.appendChild(btn2sp);

        // let btn3sp = document.createElement("button");
        // btn3sp.setAttribute("id", "Savesp");
        // btn3sp.setAttribute("class", "csaa");
        // btn3sp.innerHTML = '<i class="fa fa-save"></i>';
        // td4.appendChild(btn3sp);


       // td1.innerHTML= cat;
        td2.innerHTML=cby;
        td3.innerHTML=rui;


        $(document).ready(function() {
          $("#delsp").css("background-color", "red");
          $("#delsp").css("color", "white");
          $("#delsp").css("border-color", "white");

          $(".seb").css("background-color", "red");
          $(".seb").css("color", "white");
          $(".seb").css("border-color", "white");
        });
        $(document).ready(function() {
          $("#editsp").css("background-color", "red");
          $("#editsp").css("color", "white");
          $("#editsp").css("border-color", "white");

          $(".casD").css("background-color", "red");
          $(".casD").css("color", "white");
          $(".casD").css("border-color", "white");
        });
      //   $(document).ready(function() {
      //     $("#Savesp").css("background-color", "red");
      //     $("#Savesp").css("color", "white");
      //     $("#Savesp").css("border-color", "white");

      //     $(".csaa").css("background-color", "red");
      //     $(".csaa").css("color", "white");
      //     $(".csaa").css("border-color", "white");
      // });



        //trow.appendChild(td1);
        trow.appendChild(td2);
        trow.appendChild(td3);
        trow.appendChild(td4);

      

        var num = String(cat);
        btnsp.onclick = function () {
          var result = confirm("Are you sure you want to Delete Specialization Details?");
          if (result) {
          deleteDoc(doc(db, "JobConfig", "Master","Specialization",num)) .then(()=> {  
            setTimeout("location.reload(true);",120);
          }) 
          }
        };
  
        btn2sp.onclick = function () {
          document.getElementById("id").value = num;
          document.getElementById("categoryName").value = cby;
          document.getElementById("subCategoryName").value = rui;
          document.querySelector("#favDialog").showModal();

          // td3.contentEditable = true;
          // td3.style.backgroundColor = "#BBC4CE";
        }; 
        
        // btn3sp.onclick = function () {
        //   td3.contentEditable = false;
        //   var tio = String(cat);
        //   setDoc(doc(db, "JobConfig", "Master", "Specialization", tio), {
        //     Category: "Specialization",
        //     Id: String(cat),
        //     SubCategory: td3.innerHTML
        //   });
        //   setTimeout("location.reload(true);",3000);
        // }; 


        tbody.appendChild(trow);

    }

    function AddAllItemsToTable6(qualification){
        tbody.innerHTML="";

        qualification.forEach((element,i) => {
        AddItemToTable6(element.id,element.Category,element.SubCategory);    
        });
    }

var cert=[];
var id=[];
var q1 =  query(collection(db, "JobConfig", "Master", "Specialization"),orderBy("Category"),orderBy("SubCategory"));
var querySnapshot1 =  await getDocs(q1);
querySnapshot1.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
    cert.push(doc.data());
    AddAllItemsToTable6(cert);
});


