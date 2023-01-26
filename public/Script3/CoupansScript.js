
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







//Qualification

var tbody= document.getElementById("tbody2");


    function AddItemToTable1(cat,cby,uat,uby,id,code,description,discountType,discountValue,maximumNOfUses,numberOfTimesUsed,expiryDate){
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
        let td13=document.createElement("td");
     
        let btnq=document.createElement("button");
        btnq.setAttribute("id", "delQ");
        btnq.setAttribute("class", "pooa");
        btnq.innerHTML = '<i class="fa fa-trash-o"></i>';
        td13.appendChild(btnq);


        let btn2q = document.createElement("button");
        btn2q.setAttribute("id", "editQ");
        btn2q.setAttribute("class", "csjs");
        btn2q.innerHTML = '<i class="fas fa-edit"></i>';
        td13.appendChild(btn2q);

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
        td6.innerHTML=code;
        td7.innerHTML=description;
        if(discountType == 1){
            td8.innerHTML="Percentage"; 
        }
        else{
            td8.innerHTML="Fixed Amount";
        }
        td9.innerHTML=discountValue;
        td10.innerHTML=maximumNOfUses;
        td11.innerHTML=numberOfTimesUsed;
        td12.innerHTML=expiryDate;

        


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
        trow.appendChild(td13);
       
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
        var result = confirm("Are you sure you want to Delete Coupans Details?");
        if (result) {
        deleteDoc(doc(db, "JobConfig", "Master","Coupans",num))
        .then(()=> {  
          setTimeout("location.reload(true);",120);
        })     
        }
      };


      btn2q.onclick = function () {
        document.getElementById("id").value = num;
        document.getElementById("coupanCode").value = code;
        document.getElementById("coupanDescription").value = description;
        document.getElementById("coupanType").value = discountType;
        document.getElementById("coupanValue").value = discountValue;
        document.getElementById("coupanMaximumUses").value = maximumNOfUses;
        document.getElementById("coupanExpiryDate").value = expiryDate;
        document.querySelector("#favDialog").showModal();
        $('#coupanValueDiv').show();
      }; 
    
    }

    function AddAllItemsToTable1(coupans){
        tbody.innerHTML="";
        coupans.forEach((element) => {
        AddItemToTable1(element.CreatedAt,element.CreatedBy,element.UpdatedAt,element.UpdatedBy,element.id,element.Code,element.Description, element.DiscountType, element.DiscountValue, element.MaximumNOfUses, element.NumberOfTimesUsed, element.ExpiryDate);    
      });
    }

var coup=[];
var id=[];
var q1 =  query(collection(db, "JobConfig", "Master", "Coupans"),orderBy("UpdatedAt", "desc"));
var querySnapshot1 =  await getDocs(q1);
querySnapshot1.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
  coup.push(doc.data());

   // console.log(doc.id);
    //console.log(doc.data());
    AddAllItemsToTable1(coup);

});


