
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js";
   import { getFirestore, limit } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
   import { doc, deleteDoc,updateDoc, orderBy, getDocs, collection, query, where } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

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



//functionalarea

var tbody= document.getElementById("tbody4");


    function AddItemToTable3(cat,cby,uat,iut){
        let trow=document.createElement("tr");
        let td1=document.createElement("td");
        // let td2=document.createElement("td");
        let td3=document.createElement("td");
        // let td4=document.createElement("td");
        let td5 = document.createElement("td");

        let btnf=document.createElement("button");
        btnf.setAttribute("id", "delf");
        btnf.setAttribute("class", "csq");
        btnf.innerHTML = '<i class="fa fa-trash-o"></i>';
        td5.appendChild(btnf);


        let btn2f = document.createElement("button");
        btn2f.setAttribute("id", "editf");
        btn2f.setAttribute("class", "txssyr");
        btn2f.innerHTML = '<i class="fas fa-edit"></i>';
        td5.appendChild(btn2f);

        // let btn3f = document.createElement("button");
        // btn3f.setAttribute("id", "Savef");
        // btn3f.setAttribute("class", "xsas");
        // btn3f.innerHTML = '<i class="fa fa-save"></i>';
        // td5.appendChild(btn3f);



        td1.innerHTML= cat;
        // td2.innerHTML=cby;
        td3.innerHTML=uat;
        // td4.innerHTML = iut;


        $(document).ready(function() {
          $("#delf").css("background-color", "red");
          $("#delf").css("color", "white");
          $("#delf").css("border-color", "white");

          $(".csq").css("background-color", "red");
          $(".csq").css("color", "white");
          $(".csq").css("border-color", "white");
        });
        $(document).ready(function() {
          $("#editf").css("background-color", "red");
          $("#editf").css("color", "white");
          $("#editf").css("border-color", "white");

          $(".txssyr").css("background-color", "red");
          $(".txssyr").css("color", "white");
          $(".txssyr").css("border-color", "white");
        });
      //   $(document).ready(function() {
      //     $("#Savef").css("background-color", "red");
      //     $("#Savef").css("color", "white");
      //     $("#Savef").css("border-color", "white");

      //     $(".xsas").css("background-color", "red");
      //     $(".xsas").css("color", "white");
      //     $(".xsas").css("border-color", "white");
      // });

        trow.appendChild(td1);
        // trow.appendChild(td2);
        trow.appendChild(td3);
        // trow.appendChild(td4);
        trow.appendChild(td5);

        var num = String(iut);

      

        btnf.onclick = function () {
          var result = confirm("Are you sure you want to Delete Functional Area?");
          if (result) {
          deleteDoc(doc(db, "JobConfig", "Master","FunctionalArea",num))
          .then(()=> {  
            setTimeout("location.reload(true);",120);
          }) 
          }
        };
  
        btn2f.onclick = function () {
          let text;
          let person = prompt("Please enter FunctionalArea Category:", cat);
          if (person == null || person == "") {
            text = "User cancelled the prompt.";
          } else {

            let person1 = prompt("Please enter FunctionalArea SubCategory:",uat);
            if (person1 == null || person1 == "") {
              text = "User cancelled the prompt.";
            } else {
            // alert(person);
            updateDoc(doc(db, "JobConfig", "Master", "FunctionalArea", num), {
                            CId: '1',
                            Category:person,
                            UpdatedAt :  dateTime.toString(),
                            UpdatedBy : "1",
                            SCId : Number(iut),
                            SubCategory: person1,
                            id: Number(iut)
                          })   
                          .then(()=> {  
                            setTimeout("location.reload(true);",120);
                          })     
                          .catch((error)=>{
                              console.log(error);
                          }); 
          }
        }






          // td1.contentEditable = true;
          // td3.contentEditable = true;
          // td1.style.backgroundColor = "#BBC4CE";
          // td3.style.backgroundColor = "#BBC4CE";
        }; 
        
        // btn3f.onclick = function () {
        //   td1.contentEditable = false;
        //   td3.contentEditable = false;
        //   var tio = String(iut);
        //   setDoc(doc(db, "JobConfig", "Master", "FunctionalArea", tio), {
        //     CId: td2.innerHTML,
        //     Category:td1.innerHTML,
        //     SCId : String(iut),
        //     SubCategory: td3.innerHTML
        //   });
        //   setTimeout("location.reload(true);",3000);
        // }; 
        tbody.appendChild(trow);
    }

    function AddAllItemsToTable3(qualification){
      tbody.innerHTML="";

        qualification.forEach((element,i) => {
        AddItemToTable3(element.Category,element.CId,element.SubCategory,element.id);    
        });
    }

var cert=[];
var id=[];
var q1 =  query(collection(db, "JobConfig", "Master", "FunctionalArea"),orderBy("UpdatedAt", "desc"));
var querySnapshot1 =  await getDocs(q1);
querySnapshot1.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
  cert.push(doc.data());
  AddAllItemsToTable3(cert);
  const source = doc.metadata.fromCache ? "local cache" : "server";
  // console.log("Data came from " + source);
});

function timeFunction() {
  setTimeout(async function(){ 
    var q1 = query(collection(db, "JobConfig", "Master", "FunctionalArea"),where("CId", "!=", "2"));
    var q2 = query(collection(db, "JobConfig", "Master", "FunctionalArea"),where("CId", "==", "2"));
    var querySnapshot2 = await getDocs(q2);
  var querySnapshot1 = await getDocs(q1);
  querySnapshot1.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, " => ", doc.data());
      cert.push(doc.data());
    AddAllItemsToTable3(cert);
    const source = doc.metadata.fromCache ? "local cache" : "server";
    // console.log("Data came from " + source);
}); 
querySnapshot2.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
    cert.push(doc.data());
  AddAllItemsToTable3(cert);
  const source = doc.metadata.fromCache ? "local cache" : "server";
  // console.log("Data came from " + source);
}); 
   }, 4000);
}


