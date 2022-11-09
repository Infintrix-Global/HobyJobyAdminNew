
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


var tbody = document.getElementById("tbodygmas");

function AddItemToTable7(cat,cby,uat,uby,des,empid,tile,id){

      
  let trow=document.createElement("tr");
  let td1=document.createElement("td");
  let td2=document.createElement("td");
  let td3=document.createElement("td");
  //let td4=document.createElement("td");
  // let td5=document.createElement("td");
  //let td6=document.createElement("td");
  // let td7=document.createElement("td");
  let td8=document.createElement("td");
  let btn=document.createElement("button");
  btn.setAttribute("id", "Div4");
  btn.setAttribute("class", "tru");
  btn.innerHTML = '<i class="fa fa-trash-o"></i>';
  td8.appendChild(btn);


  let btn2 = document.createElement("button");
  btn2.setAttribute("id", "Div5");
  btn2.setAttribute("class", "ufgi");
  btn2.innerHTML = '<i class="fas fa-edit"></i>';
  td8.appendChild(btn2);

  // let btn3 = document.createElement("button");
  // btn3.setAttribute("id", "Div6");
  // btn3.setAttribute("class", "uopd");
  // btn3.innerHTML = '<i class="fa fa-save"></i>';
  // td8.appendChild(btn3);

  td1.innerHTML= tile ;
  td2.innerHTML=des ;
  td3.innerHTML= empid ;
  //td4.innerHTML=cat ;
  // td5.innerHTML=cby;
  //td6.innerHTML=uat;
  // td7.innerHTML = uby;

  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  //trow.appendChild(td4);
  // trow.appendChild(td5);
  //trow.appendChild(td6);
  // trow.appendChild(td7);
  trow.appendChild(td8);
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

var num = id;

btn.onclick = function () {
  var result = confirm("Are you sure you want to Delete BlogMaster with Id " + num);
  if (result) {
  deleteDoc(doc(db,"BlogMaster",num))
  .then(()=> {  
    setTimeout("location.reload(true);",120);
  }) 
  }
};

btn2.onclick = function () { 
  location.href = 'BlogMasterEdit.html?id=' + num;
};


}

function AddAllItemsToTable7(certification,id){
  tbody.innerHTML="";

  certification.forEach((element,i) => {
  AddItemToTable7(element.CreatedAt,element.CreatedBy,element.UpdatedAt,element.UpdatedBy,element.Description,element.EmployerId,element.Title, id[i]);    
  });

}
var cert=[];
var id=[];
var querySnapshot = await getDocs(collection(db, "BlogMaster"),limit(2));
querySnapshot.forEach((doc) => {
cert.push(doc.data());
id.push(doc.id);
AddAllItemsToTable7(cert,id);

});




