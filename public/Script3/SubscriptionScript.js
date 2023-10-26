
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js";
   import { getFirestore, limit } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
   import { doc, deleteDoc,setDoc, updateDoc, getDocs, collection, query, orderBy, where } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

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







//Qualification

var tbody= document.getElementById("tbody2");


    function AddItemToTable1(uby,id, paymentDate, Discount , PaidAmount, NoOfJobPostAllow, Title, Name){

        let trow=document.createElement("tr");
        //let td1=document.createElement("td");
        //let td2=document.createElement("td");
        // let td3=document.createElement("td");
       // let td4=document.createElement("td");
        // let td5=document.createElement("td");
        let td6=document.createElement("td");
        let td7=document.createElement("td");
        let td8=document.createElement("td");
        let td9=document.createElement("td");
        let td10=document.createElement("td");
        let td11=document.createElement("td");
        let td12=document.createElement("td");
     
      


  
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
        td6.innerHTML=id;
        td7.innerHTML=paymentDate;
        td8.innerHTML=Discount;
        td9.innerHTML=PaidAmount;
        td10.innerHTML=NoOfJobPostAllow;
        td11.innerHTML=Title;
        td12.innerHTML = Name;

        


       //trow.appendChild(td1);
       // trow.appendChild(td2);
        // trow.appendChild(td3);
        //trow.appendChild(td4);
        // trow.appendChild(td5);
        trow.appendChild(td6);
        trow.appendChild(td7);
        trow.appendChild(td8);
        trow.appendChild(td9);
        trow.appendChild(td10);
        trow.appendChild(td11);
        trow.appendChild(td12);

       
        tbody.appendChild(trow);

      //   $(document).ready(function() {
      //     $("#Saveq").css("background-color", "red");
      //     $("#Saveq").css("color", "white");
      //     $("#Saveq").css("border-color", "white");

      //     $(".cwsq").css("background-color", "red");
      //     $(".cwsq").css("color", "white");
      //     $(".cwsq").css("border-color", "white");
      // });

    
    }

    function AddAllItemsToTable1(qualification,emp){
        tbody.innerHTML="";
        qualification.forEach((element,i) => {
        AddItemToTable1(element.CreatedAt,element.SubId,element.OrderPaymentObject.CreatedAt, element.OrderPaymentObject.Discount, element.OrderPaymentObject.PaidAmount, element.PlanObject.NoOfJobPostAllow, element.PlanObject.Title,emp[i]);    
      });
    }

var cert=[];
var emp=[];
var q1 =  query(collection(db, "Subscriptions"));
var querySnapshot1 =  await getDocs(q1);
querySnapshot1.forEach(async (doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
    cert.push(doc.data());
    console.log(doc.data().OrderPaymentObject.UserType);
    if(doc.data().OrderPaymentObject.UserType == "2"){
      var q1 = query(collection(db, "CandidateMaster"),where("UserID", "==", doc.data().UserId));
      var querySnapshot1 = await getDocs(q1);
      querySnapshot1.forEach((doc) => {
        emp.push(doc.data().FirstName.toLocaleString() + " " + doc.data().LastName.toLocaleString());
         
      });
    }
    else{
      var q1 = query(collection(db, "EmployerMaster"),where("UserID", "==", doc.data().UserId));
      var querySnapshot1 = await getDocs(q1);
      querySnapshot1.forEach((doc) => {
        emp.push(doc.data().FirstName.toLocaleString() + " " + doc.data().LastName.toLocaleString());
      });
    }
   // console.log(doc.id);
    //console.log(doc.data());
    AddAllItemsToTable1(cert,emp);

});


