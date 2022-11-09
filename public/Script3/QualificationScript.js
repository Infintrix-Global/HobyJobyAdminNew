
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







//Qualification

var tbody= document.getElementById("tbody2");


    function AddItemToTable1(cat,cby,uat,uby,id,name){
        let trow=document.createElement("tr");
        //let td1=document.createElement("td");
        //let td2=document.createElement("td");
        // let td3=document.createElement("td");
       // let td4=document.createElement("td");
        // let td5=document.createElement("td");
        let td6=document.createElement("td");
        let td7=document.createElement("td");

        let btnq=document.createElement("button");
        btnq.setAttribute("id", "delQ");
        btnq.setAttribute("class", "pooa");
        btnq.innerHTML = '<i class="fa fa-trash-o"></i>';
        td7.appendChild(btnq);


        let btn2q = document.createElement("button");
        btn2q.setAttribute("id", "editQ");
        btn2q.setAttribute("class", "csjs");
        btn2q.innerHTML = '<i class="fas fa-edit"></i>';
        td7.appendChild(btn2q);

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
      //     $("#Saveq").css("background-color", "red");
      //     $("#Saveq").css("color", "white");
      //     $("#Saveq").css("border-color", "white");

      //     $(".cwsq").css("background-color", "red");
      //     $(".cwsq").css("color", "white");
      //     $(".cwsq").css("border-color", "white");
      // });

      var num = String(id);

      btnq.onclick = function () {
        var result = confirm("Are you sure you want to Delete Qualification Details?");
        if (result) {
        deleteDoc(doc(db, "JobConfig", "Master","Qualifiactions",num))
        .then(()=> {  
          setTimeout("location.reload(true);",120);
        })     
        }
      };


      btn2q.onclick = function () {
        var ao = id.toString();
        let text;
        let person = prompt("Please enter Qualifiactions name:", name);
        if (person == null || person == "") {
          text = "User cancelled the prompt.";
        } else {
          // alert(person);
          setDoc(doc(db, "JobConfig", "Master", "Qualifiactions", ao), {
                          name: person,
                          CreatedAt :  dateTime,
                          CreatedBy : "1",
                          UpdatedAt :  dateTime,
                          UpdatedBy : "1",
                          id : ao,
                        })
                        .then(()=> {  
                          setTimeout("location.reload(true);",120);
                        })     
                        .catch((error)=>{
                            console.log(error);
                        }); 
        }
      }; 
    
    }

    function AddAllItemsToTable1(qualification,id){
        tbody.innerHTML="";
        qualification.forEach((element,i) => {
        AddItemToTable1(element.CreatedAt,element.CreatedBy,element.UpdatedAt,element.UpdatedBy,id[i],element.name);    
      });
    }

var cert=[];
var id=[];
var querySnapshot1 =  await getDocs(collection(db, "JobConfig", "Master", "Qualifiactions"),limit(2),{ includeMetadataChanges: true });
querySnapshot1.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
    cert.push(doc.data());
    id.push(doc.id);

   // console.log(doc.id);
    //console.log(doc.data());
    AddAllItemsToTable1(cert,id);

});


