
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js";
   import { getFirestore, limit } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
   import { doc, deleteDoc,setDoc, updateDoc, getDocs, collection, query, where, orderBy } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

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

  var tbody= document.getElementById("tbody5");

  function AddItemToTable4(cat,cby,uat){
      let trow=document.createElement("tr");
      //let td1=document.createElement("td");
      let td2=document.createElement("td");
      let td3=document.createElement("td");
      let td4=document.createElement("td");

      let btnc=document.createElement("button");
      btnc.setAttribute("id", "delc");
      btnc.setAttribute("class", "dg");
      btnc.innerHTML = '<i class="fa fa-trash-o"></i>';
      td4.appendChild(btnc);


      let btn2c = document.createElement("button");
      btn2c.setAttribute("id", "editc");
      btn2c.setAttribute("class", "bgr");
      btn2c.innerHTML = '<i class="fas fa-edit"></i>';
      td4.appendChild(btn2c);

      // let btn3c = document.createElement("button");
      // btn3c.setAttribute("id", "Savec");
      // btn3c.setAttribute("class", "bgds");
      // btn3c.innerHTML = '<i class="fa fa-save"></i>';
      // td4.appendChild(btn3c);

     // td1.innerHTML= cat;
      td2.innerHTML=cby;
      td3.innerHTML=uat;


      $(document).ready(function() {
        $("#delc").css("background-color", "red");
        $("#delc").css("color", "white");
        $("#delc").css("border-color", "white");

        $(".dg").css("background-color", "red");
        $(".dg").css("color", "white");
        $(".dg").css("border-color", "white");
      });
      $(document).ready(function() {
        $("#editc").css("background-color", "red");
        $("#editc").css("color", "white");
        $("#editc").css("border-color", "white");

        $(".bgr").css("background-color", "red");
        $(".bgr").css("color", "white");
        $(".bgr").css("border-color", "white");
      });
    //   $(document).ready(function() {
    //     $("#Savec").css("background-color", "red");
    //     $("#Savec").css("color", "white");
    //     $("#Savec").css("border-color", "white");

    //     $(".bgds").css("background-color", "red");
    //     $(".bgds").css("color", "white");
    //     $(".bgds").css("border-color", "white");
    // });
      //trow.appendChild(td1);
      trow.appendChild(td2);
      trow.appendChild(td3);
      trow.appendChild(td4);



      tbody.appendChild(trow);

      var num = String(cat);

      btnc.onclick = function () {
        var result = confirm("Are you sure you want to Delete City?");
        if (result) {
        deleteDoc(doc(db, "JobConfig", "Master","Cities",num))
        .then(()=> {  
          setTimeout("location.reload(true);",120);
        }) 
        }
      };

      btn2c.onclick = function () {
      document.getElementById("id").value = num;
      document.getElementById("cityName").value = cby;
      document.getElementById("stateName").value = uat;
      document.querySelector("#favDialog").showModal();




        // td3.contentEditable = true;
        // td2.contentEditable = true;
        // td3.style.backgroundColor = "#BBC4CE";
        // td2.style.backgroundColor = "#BBC4CE";
      }; 
      

  }

  function AddAllItemsToTable4(qualification){
      tbody.innerHTML="";

      qualification.forEach((element) => {
      AddItemToTable4(element.id,element.City,element.State);    
      });
  }

var cert=[];
var id=[];
var q11 =  query(collection(db, "JobConfig", "Master", "Cities"),where("State", "==", "Maharashtra"));
var querySnapshot11 = await getDocs(q11);
querySnapshot11.forEach((doc) => {
// doc.data() is never undefined for query doc snapshots
//console.log(doc.id, " => ", doc.data());
  cert.push(doc.data());
AddAllItemsToTable4(cert);
});

function timeFunction1() {
setTimeout(async function(){ 
  var q1 = query(collection(db, "JobConfig", "Master", "Cities"),where("State", "==", "Andhra Pradesh"));
var querySnapshot1 = await getDocs(q1);
querySnapshot1.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
    cert.push(doc.data());
  AddAllItemsToTable3(cert);
  const source = doc.metadata.fromCache ? "local cache" : "server";
  console.log("Data came from " + source);
}); 
 }, 6000);
}


