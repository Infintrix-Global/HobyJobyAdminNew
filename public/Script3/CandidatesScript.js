
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

//Candidates

var tbody= document.getElementById("tbody2");


   function AddItemToTable1(FirstName,LastName,EmailId,MobileNo,UserType, ActiveStatus,CreatedBy,UpdatedAt,UpdatedBy,id){
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
     
        let btnq=document.createElement("button");
        btnq.setAttribute("id", "editQ");
        btnq.setAttribute("class", "csjs");
        btnq.innerHTML = '<i class="fas fa-edit"></i>';
        td11.appendChild(btnq);

        var status = null;
        if(ActiveStatus == "1")
        {
          status = "Active";
        }
        else{
          status = "Inactive";
        }
 
        
       


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
        td6.innerHTML=FirstName + LastName;
        td7.innerHTML=EmailId;
        td8.innerHTML=MobileNo;
        td9.innerHTML=UserType;
        td10.innerHTML = status;

        


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

      btnq.onclick = async function () {
        var cert=[];
        var q11 = query(collection(db, "UserDetails"),where("MobileNo", "==", MobileNo));
        var querySnapshot11 = await getDocs(q11);
        querySnapshot11.forEach((doc) => {
            cert.push(doc.data());
        });
        var ActiveStatus = null;
        var msg = null;
        var userDetailID = null
        cert.forEach((element,i) => {
          userDetailID = element.UserID;
            if(element.ActiveStatus){
              ActiveStatus = element.ActiveStatus;
              if(ActiveStatus == "0"){
                ActiveStatus = "1";
                msg = "Are  you sure you want to Enable this Candidate?";
              }
              else{
                ActiveStatus = "0";
                msg = "Are  you sure you want to Disable this Candidate?";
              }
            }
            else{
              ActiveStatus = "0";
              msg =  msg = "Are  you sure you want to Disable this Candidate?";
            }
        })
        var result = confirm(msg);
        if (result) {
          updateDoc(doc(db, "UserDetails", userDetailID.toString()), {
            ActiveStatus : ActiveStatus.toString()
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

    function AddAllItemsToTable1(candidate,status){
        console.log(status.length);
        console.log(candidate.length);
        tbody.innerHTML="";
        candidate.forEach((element,i) => {
        AddItemToTable1(element.FirstName, element.LastName, element.Email.EmailId, element.Mobile.MobileNo, element.Role.UserType, status[i], element.CreatedBy,element.UpdatedAt,element.UpdatedBy,element.id);    
      });
    }

var cert=[];
var status = [];

var q1 =  query(collection(db, "CandidateMaster"),orderBy("CreatedAt", "desc"));
var querySnapshot1 =  await getDocs(q1)
  .then(async (querySnapshot1) => {
    // Create an array to store the IDs
   
    querySnapshot1.forEach(async (doc) => {
      cert.push(doc.data());
      
     
      var q11 = query(collection(db, "UserDetails"),where("MobileNo", "==", doc.data().Mobile.MobileNo));
      var querySnapshot11 =  await getDocs(q11)
        .then((querySnapshot11) => {
          
          // Iterate over the array of documents and do something with each document
          querySnapshot11.forEach((doc11) => {
           
              status.push(doc11.data());
  
          });
         
        })
    });
    
  AddAllItemsToTable1(cert,status);
  });

    
 


