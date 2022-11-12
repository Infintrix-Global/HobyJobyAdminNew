
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






//jobtypes
var tbody= document.getElementById("tbody6");


    function AddItemToTable5(cat,cby){
        let trow=document.createElement("tr");
        //let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");



        let btnj=document.createElement("button");
        btnj.setAttribute("id", "delj");
        btnj.setAttribute("class", "bfds");
        btnj.innerHTML = '<i class="fa fa-trash-o"></i>';
        td3.appendChild(btnj);


        let btn2j = document.createElement("button");
        btn2j.setAttribute("id", "editj");
        btn2j.setAttribute("class", "bsns");
        btn2j.innerHTML = '<i class="fas fa-edit"></i>';
        td3.appendChild(btn2j);

        // let btn3j = document.createElement("button");
        // btn3j.setAttribute("id", "Savej");
        // btn3j.setAttribute("class", "VA");
        // btn3j.innerHTML = '<i class="fa fa-save"></i>';
        // td3.appendChild(btn3j);


        //td1.innerHTML= cat;
        td2.innerHTML=cby;


        $(document).ready(function() {
          $("#delj").css("background-color", "red");
          $("#delj").css("color", "white");
          $("#delj").css("border-color", "white");

          $(".bfds").css("background-color", "red");
          $(".bfds").css("color", "white");
          $(".bfds").css("border-color", "white");
        });
        $(document).ready(function() {
          $("#editj").css("background-color", "red");
          $("#editj").css("color", "white");
          $("#editj").css("border-color", "white");

          $(".bsns").css("background-color", "red");
          $(".bsns").css("color", "white");
          $(".bsns").css("border-color", "white");
        });
      //   $(document).ready(function() {
      //     $("#Savej").css("background-color", "red");
      //     $("#Savej").css("color", "white");
      //     $("#Savej").css("border-color", "white");

      //     $(".VA").css("background-color", "red");
      //     $(".VA").css("color", "white");
      //     $(".VA").css("border-color", "white");
      // });
       // trow.appendChild(td1);
        trow.appendChild(td2);
        trow.appendChild(td3);

        var num = String(cat);
        btnj.onclick = function () {
          var result = confirm("Are you sure you want to Delete JobType Details");
          if (result) {
          deleteDoc(doc(db, "JobConfig", "Master","JobTypes",num))
          .then(()=> {  
            setTimeout("location.reload(true);",120);
          }) 
          }
        };
  
        btn2j.onclick = function () {
          // td2.contentEditable = true;
          // td2.style.backgroundColor = "#BBC4CE";

          let text;
          let person = prompt("Please enter JobTypes name:", cby);
          if (person == null || person == "") {
            text = "User cancelled the prompt.";
          } else {
            // alert(person);
            updateDoc(doc(db, "JobConfig", "Master", "JobTypes", num), {
                            name: person,
                            UpdatedAt :  dateTime.toString(),
                            UpdatedBy : "1",
                            id : Number(cat),
                          })
                          .then(()=> {  
                            setTimeout("location.reload(true);",120);
                          })     
                          .catch((error)=>{
                              console.log(error);
                          }); 
          }



        }; 
        
        // btn3j.onclick = function () {


        // //   td2.contentEditable = false;
        // //   var tio = String(cat);
        // //   setDoc(doc(db, "JobConfig", "Master", "JobTypes", tio), {
        // //     name: td2.innerHTML,
        // //     id : String(cat),
        // //   });
        // //   setTimeout("location.reload(true);",3000);
        // }; 
        tbody.appendChild(trow);

    }

    function AddAllItemsToTable5(qualification){
        tbody.innerHTML="";

        qualification.forEach((element) => {
        AddItemToTable5(element.id,element.name);    
        });
    }

// async function type()
// {
  var cert=[];
  var id=[];
  var q1 =  query(collection(db, "JobConfig", "Master", "JobTypes"),orderBy("UpdatedAt", "desc"));
var querySnapshot1 =  await getDocs(q1);
querySnapshot1.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
    cert.push(doc.data());
   
    AddAllItemsToTable5(cert);
  // const source = doc.metadata.fromCache ? "local cache" : "server";
  // console.log("Data came from " + source);
});


// try {
//   const docsSnap = await getDocs(collection(db, "JobConfig", "Master", "JobTypes"),limit(2), { includeMetadataChanges: true });
//   if(docsSnap.docs.length > 0) {
//      docsSnap.forEach(doc => {
//         // console.log(doc.data());
//         // console.log(doc.id);
//         cert.push(doc.data());
//   AddAllItemsToTable5(cert);
//      })
//   }
// } catch (error) {
//   console.log(error);
// }


