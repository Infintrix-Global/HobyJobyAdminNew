
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


  var tbody= document.getElementById("tbodypackmas");


  function AddItemToTable9(cat,cby,uat,uby,ugz,id,name){
      let trow=document.createElement("tr");
      //let td1=document.createElement("td");
      let td2=document.createElement("td");
      let td3=document.createElement("td");
      let td4=document.createElement("td");
      //let td5=document.createElement("td");
      // let td6=document.createElement("td");
      //let td7=document.createElement("td");
      // let td8=document.createElement("td");
      let td9=document.createElement("td");
      let td10=document.createElement("td");

      let btnpa=document.createElement("button");
      btnpa.setAttribute("id", "delpa");
      btnpa.setAttribute("class", "sdc");
      btnpa.innerHTML = '<i class="fa fa-trash-o"></i>';
      td10.appendChild(btnpa);


      let btn2pa = document.createElement("button");
      btn2pa.setAttribute("id", "editpa");
      btn2pa.setAttribute("class", "casca");
      btn2pa.innerHTML = '<i class="fas fa-edit"></i>';
      td10.appendChild(btn2pa);

      // let btn3pa = document.createElement("button");
      // btn3pa.setAttribute("id", "Savepa");
      // btn3pa.setAttribute("class", "rrtr");
      // btn3pa.innerHTML = '<i class="fa fa-save"></i>';
      // td10.appendChild(btn3pa);

      //td1.innerHTML= cat;
      td2.innerHTML=cby;
      td3.innerHTML=uby;
      td4.innerHTML=ugz;
      //td5.innerHTML = dateTime;
      // td6.innerHTML = name;
      //td7.innerHTML = dateTime;
      // td8.innerHTML = name;
      td9.innerHTML=uat;




      $(document).ready(function() {
        $("#delpa").css("background-color", "red");
        $("#delpa").css("color", "white");
        $("#delpa").css("border-color", "white");

        $(".sdc").css("background-color", "red");
        $(".sdc").css("color", "white");
        $(".sdc").css("border-color", "white");
      });
      $(document).ready(function() {
        $("#editpa").css("background-color", "red");
        $("#editpa").css("color", "white");
        $("#editpa").css("border-color", "white");

        $(".casca").css("background-color", "red");
        $(".casca").css("color", "white");
        $(".casca").css("border-color", "white");
      });
    //   $(document).ready(function() {
    //     $("#Savepa").css("background-color", "red");
    //     $("#Savepa").css("color", "white");
    //     $("#Savepa").css("border-color", "white");

    //     $(".rrtr").css("background-color", "red");
    //     $(".rrtr").css("color", "white");
    //     $(".rrtr").css("border-color", "white");
    // });

   




      //trow.appendChild(td1);
      trow.appendChild(td2);
      trow.appendChild(td3);
      trow.appendChild(td4);
      //trow.appendChild(td5);
      // trow.appendChild(td6);
      //trow.appendChild(td7);
      // trow.appendChild(td8);
      trow.appendChild(td9);
      trow.appendChild(td10);
      
      var num = String(cat);

      btnpa.onclick = function () {
        var result = confirm("Are you sure you want to Delete this package:");
        if (result) {
          deleteDoc(doc(db, "JobConfig", "Master","PackageMaster",num))
          .then(()=> {  
            setTimeout("location.reload(true);",120);
          }) 
        }
      };

      btn2pa.onclick = function () {
        location.href = 'PackageMasterEdit.html?id=' + num;

      }; 
      
      
      tbody.appendChild(trow);



  }

  function AddAllItemsToTable9(qualification){
      tbody.innerHTML="";

      qualification.forEach((element) => {
      AddItemToTable9(element.id,element.PackageName,element.featurescolumns,element.price,element.validity,element.CreatedBy,element.UpdatedBy);    
      });
  }

  var cert=[];
  var id=[];
  var q1 =  query(collection(db, "JobConfig", "Master", "PackageMaster"),orderBy("UpdatedAt", "desc"));
var querySnapshot1 =  await getDocs(q1);
querySnapshot1.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
    cert.push(doc.data());
    AddAllItemsToTable9(cert);
});


