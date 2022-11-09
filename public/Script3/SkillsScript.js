
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



//skills

var tbody= document.getElementById("tbody3");


    function AddItemToTable2(cat,cby,uat,uby,id,name){
        let trow=document.createElement("tr");
       // let td1=document.createElement("td");
       // let td2=document.createElement("td");
        // let td3=document.createElement("td");
        //let td4=document.createElement("td");
        // let td5=document.createElement("td");
        let td6=document.createElement("td");
        let td7=document.createElement("td");

        let btns=document.createElement("button");
        btns.setAttribute("id", "dels");
        btns.setAttribute("class", "gt");
        btns.innerHTML = '<i class="fa fa-trash-o"></i>';
        td7.appendChild(btns);


        let btn2s = document.createElement("button");
        btn2s.setAttribute("id", "edits");
        btn2s.setAttribute("class", "tyr");
        btn2s.innerHTML = '<i class="fas fa-edit"></i>';
        td7.appendChild(btn2s);

        // let btn3s = document.createElement("button");
        // btn3s.setAttribute("id", "Saves");
        // btn3s.setAttribute("class", "iu7k7");
        // btn3s.innerHTML = '<i class="fa fa-save"></i>';
        // td7.appendChild(btn3s);





       // td1.innerHTML= id ;
       //td2.innerHTML=cat ;
        // td3.innerHTML= cby ;
        //td4.innerHTML=uat ;
        // td5.innerHTML=uby;
        td6.innerHTML=name;


        
        $(document).ready(function() {
          $("#dels").css("background-color", "red");
          $("#dels").css("color", "white");
          $("#dels").css("border-color", "white");

          $(".gt").css("background-color", "red");
          $(".gt").css("color", "white");
          $(".gt").css("border-color", "white");
        });
        $(document).ready(function() {
          $("#edits").css("background-color", "red");
          $("#edits").css("color", "white");
          $("#edits").css("border-color", "white");

          $(".tyr").css("background-color", "red");
          $(".tyr").css("color", "white");
          $(".tyr").css("border-color", "white");
        });
      //   $(document).ready(function() {
      //     $("#Saves").css("background-color", "red");
      //     $("#Saves").css("color", "white");
      //     $("#Saves").css("border-color", "white");

      //     $(".iu7k7").css("background-color", "red");
      //     $(".iu7k7").css("color", "white");
      //     $(".iu7k7").css("border-color", "white");
      // });




        //trow.appendChild(td1);
        //trow.appendChild(td2);
        // trow.appendChild(td3);
       // trow.appendChild(td4);
        // trow.appendChild(td5);
        trow.appendChild(td6);
        trow.appendChild(td7);

        tbody.appendChild(trow);


        var num = String(id);

      btns.onclick = function () {
        var result = confirm("Are you sure you want to Delete Skill with Id " + num);
        if (result) {
        deleteDoc(doc(db, "JobConfig", "Master","Skills",num)) .then(()=> {  
          setTimeout("location.reload(true);",120);
        }) 
        }
      };

      btn2s.onclick = function () {
        let text;
        let person = prompt("Please enter Skills name:", name);
        if (person == null || person == "") {
          text = "User cancelled the prompt.";
        } else {
          // alert(person);
          setDoc(doc(db, "JobConfig", "Master", "Skills", num), {
                          name: person,
                          CreatedAt :  dateTime,
                          CreatedBy : "1",
                          UpdatedAt :  dateTime,
                          UpdatedBy : "1",
                          id : num,
                        })
                        .then(()=> {  
                          setTimeout("location.reload(true);",120);
                        })     
                        .catch((error)=>{
                            console.log(error);
                        }); 
        }
      





        // td6.contentEditable = true;
        // td6.style.backgroundColor = "#BBC4CE";
      }; 
      
      // btn3s.onclick = function () {
      //   td6.contentEditable = false;
      //   var tio = String(id);
      //   console.log(td6.innerHTML);
      //   setDoc(doc(db, "JobConfig", "Master", "Skills", tio), {
      //     name: td6.innerHTML,
      //     CreatedAt :  dateTime,
      //     CreatedBy : "1",
      //     UpdatedAt :  dateTime,
      //     UpdatedBy : "1",
      //     id : String(id),
      //   });
      //   setTimeout("location.reload(true);",2000);
      // }; 
    }

    function AddAllItemsToTable2(qualification,id){
        tbody.innerHTML="";

        qualification.forEach((element,i) => {
        AddItemToTable2(element.CreatedAt,element.CreatedBy,element.UpdatedAt,element.UpdatedBy,id[i],element.name);    
        });
    }

var cert=[];
var id=[];
var querySnapshot1 = await getDocs(collection(db, "JobConfig", "Master", "Skills"),limit(2));
querySnapshot1.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
    cert.push(doc.data());
    id.push(doc.id);
  AddAllItemsToTable2(cert,id);

});


