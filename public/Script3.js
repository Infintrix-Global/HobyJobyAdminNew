
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js";
   import { getFirestore, limit } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
   import { doc, deleteDoc,setDoc, getDoc, getDocs, collection, query, where } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

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



var tbody= document.getElementById("tbody1");


    function AddItemToTable(cat,cby,uat,uby,id,name){

      
        let trow=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        // let td3=document.createElement("td");
        let td4=document.createElement("td");
        // let td5=document.createElement("td");
        let td6=document.createElement("td");
        let td7=document.createElement("td");

        let btn=document.createElement("button");
        btn.setAttribute("id", "Div4");
        btn.setAttribute("class", "tru");
        btn.innerHTML = '<i class="fa fa-trash-o"></i>';
        td7.appendChild(btn);

        let btn2 = document.createElement("button");
        btn2.setAttribute("id", "Div5");
        btn2.setAttribute("class", "ufgi");
        btn2.innerHTML = '<i class="fas fa-edit"></i>';
        td7.appendChild(btn2);

        // let btn3 = document.createElement("button");
        // btn3.setAttribute("id", "Div6");
        // btn3.setAttribute("class", "uopd");
        // btn3.innerHTML = '<i class="fa fa-save"></i>';
        // td7.appendChild(btn3);

        td1.innerHTML= id ;
        td2.innerHTML=cat ;
        // td3.innerHTML= cby;
        td4.innerHTML=uat ;
        // td5.innerHTML=uby;
        td6.innerHTML=name;
        td6.setAttribute("id", "colorchg");
        



        trow.appendChild(td1);
        trow.appendChild(td2);
        // trow.appendChild(td3);
        trow.appendChild(td4);
        // trow.appendChild(td5);
        trow.appendChild(td6);
        trow.appendChild(td7);
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

      var num = String(id);

      btn.onclick = function () {
        var result = confirm("Are you sure you want to delete this Certification Details?");
        if (result) {
        deleteDoc(doc(db, "JobConfig", "Master","Certifications",num));
        setTimeout("location.reload(true);",3000);
        }
      };

      btn2.onclick = function () {
        // td6.contentEditable = true;
        var table = document.getElementById("myTable");
        var a=table.rows.length;
              var b=table.rows.length;
            var ao = a.toString();
            var tio = String(id);
      let text;
      let person = prompt("Please enter Certification name:", name);
      if (person == null || person == "") {
        text = "User cancelled the prompt.";
      } else {
        // alert(person);
        setDoc(doc(db, "JobConfig", "Master", "Certifications", tio), {
                        name: person,
                        CreatedAt :  dateTime,
                        CreatedBy : "1",
                        UpdatedAt :  dateTime,
                        UpdatedBy : "1",
                        id : tio,
                      }).catch((error)=>{
                         console.log(error);
                      });  
                      setTimeout("location.reload(true);",3000);
                      // window.onload = function(){
                        // document.getElementById("defaultOpen1").click();
                      // }
      }
    }
    
    



      // btn3.onclick = function () {
      //   td6.contentEditable = false;
      //   td6.style.backgroundColor = "none";
      //   var tio = String(id);
      //   setDoc(doc(db, "JobConfig", "Master", "Certifications", tio), {
      //     name: td6.innerHTML,
      //     CreatedAt :  dateTime,
      //     CreatedBy : "1",
      //     UpdatedAt :  dateTime,
      //     UpdatedBy : "1",
      //     id : String(id),
      //   });
      //   // setTimeout("location.reload(true);",3000);
      // }; 
    }

    function AddAllItemsToTable(certification){
        tbody.innerHTML="";

        certification.forEach(element => {
        AddItemToTable(element.CreatedAt,element.CreatedBy,element.UpdatedAt,element.UpdatedBy,element.id,element.name);    
        });

    }
    setTimeout(AddItemToTable, 3000);
var cert=[];
var querySnapshot = query(collection(db, "JobConfig", "Master", "Certifications"));
const q = await getDocs(querySnapshot);
q.forEach((doc) => {
    cert.push(doc.data());
  AddAllItemsToTable(cert);

});

// const logCities1 = async () => {
//   var allCities = await getDocs(collection(db, "JobConfig", "Master", "Certifications"),limit(2),{ includeMetadataChanges: true });
//   for(const doc of allCities.docs){
//     console.log(doc.id, '=>', doc.data());
//         cert.push(doc.data());
//         AddAllItemsToTable(cert);
//   }
// }






//packagemaster
var tbody= document.getElementById("tbodypackmas");


    function AddItemToTable9(cat,cby,uat,uby,id,name){
        let trow=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");
        let td5=document.createElement("td");
        // let td6=document.createElement("td");
        let td7=document.createElement("td");
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

        td1.innerHTML= cat;
        td2.innerHTML=cby;
        td3.innerHTML=uby;
        let btn4pa = document.createElement("button");
        btn4pa.setAttribute("id", "bxqiwunqww");
        btn4pa.setAttribute("class", "qwcjwqnco");
        btn4pa.innerHTML = '<i class="fa-solid fa-arrow-down"></i>';
        td4.appendChild(btn4pa);
        td4.setAttribute("id", "yutnm");
        td5.innerHTML = dateTime;
        // td6.innerHTML = name;
        td7.innerHTML = dateTime;
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

     




        trow.appendChild(td1);
        trow.appendChild(td2);
        trow.appendChild(td3);
        trow.appendChild(td4);
        trow.appendChild(td5);
        // trow.appendChild(td6);
        trow.appendChild(td7);
        // trow.appendChild(td8);
        trow.appendChild(td9);
        trow.appendChild(td10);
        var num = String(cat);

        btnpa.onclick = function () {
          var result = confirm("Are you sure you want to Delete Package Master with Id " + num);
          if (result) {
          deleteDoc(doc(db, "PackageMaster",num));
          setTimeout("location.reload(true);",3000);
          }
        };
  
        btn2pa.onclick = function () {
          let text;
          let person = prompt("Please enter PackageMaster PackageName:", cby);
          if (person == null || person == "") {
            text = "User cancelled the prompt.";
          } else {
            let person1 = prompt("Please enter PackageMasteron Featurescolumns:", uat);
            let person2 = prompt("Please enter PackageMasteron Price:", udy);
        
        
            if (person == null || person == "") {
            text = "User cancelled the prompt.";
          } else {
            setDoc(doc(db, "JobConfig", "Master", "PackageMaster", num), {
                            PackageName: person,
                            featurescolumns:person1,
                            price:person2,
                            validity:person2,
                            Id : num,
                            CreatedAt:dateTime,
                            CreatedBy: "1",
                            UpdatedAt: dateTime,
                            UpdatedBy: "1"
                          }).catch((error)=>{
                             console.log(error);
                          }); 
          }
        
          }




          // td5.contentEditable = true;
          // td5.style.backgroundColor = "#BBC4CE";
        }; 
        
        
        tbody.appendChild(trow);

  

    }

    function AddAllItemsToTable9(qualification){
        tbody.innerHTML="";

        qualification.forEach(element => {
        AddItemToTable9(element.Id,element.PackageName,element.featurescolumns,element.price,element.validity,element.CreatedBy,element.UpdatedBy);    
        });
    }

var cert=[];
var querySnapshot1 = await getDocs(collection(db, "PackageMaster"),limit(2));
querySnapshot1.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
    cert.push(doc.data());
    // console.log("24" + doc.data())
  AddAllItemsToTable9(cert);
});

 
      // document.getElementById('bxqiwunqww').onclick = function() {
      //       var values = ["1 Month", "3 Months", "6 Months", "1 Year"];
    
      //       var select = document.createElement("select");
      //       select.name = "pets";
      //       select.id = "pets"
        
      //       for (const val of values)
      //       {
      //           var option = document.createElement("option");
      //           option.value = val;
      //           option.text = val.charAt(0).toUpperCase() + val.slice(1);
      //           select.appendChild(option);
      //       }
        
      //       var label = document.createElement("label");
      //       label.innerHTML = "Duration: "
      //       label.htmlFor = "pets";
        
      //       document.getElementById("yutnm").appendChild(label).appendChild(select);
      //       document.getElementById('bxqiwunqww').style.display = "none";
      // }








//Specialization
var tbody= document.getElementById("tbody7");


    function AddItemToTable6(cat,cby,rui){
        let trow=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");



        let btnsp=document.createElement("button");
        btnsp.setAttribute("id", "delsp");
        btnsp.setAttribute("class", "seb");
        btnsp.innerHTML = '<i class="fa fa-trash-o"></i>';
        td4.appendChild(btnsp);


        let btn2sp = document.createElement("button");
        btn2sp.setAttribute("id", "editsp");
        btn2sp.setAttribute("class", "casD");
        btn2sp.innerHTML = '<i class="fas fa-edit"></i>';
        td4.appendChild(btn2sp);

        // let btn3sp = document.createElement("button");
        // btn3sp.setAttribute("id", "Savesp");
        // btn3sp.setAttribute("class", "csaa");
        // btn3sp.innerHTML = '<i class="fa fa-save"></i>';
        // td4.appendChild(btn3sp);


        td1.innerHTML= cat;
        td2.innerHTML=cby;
        td3.innerHTML=rui;


        $(document).ready(function() {
          $("#delsp").css("background-color", "red");
          $("#delsp").css("color", "white");
          $("#delsp").css("border-color", "white");

          $(".seb").css("background-color", "red");
          $(".seb").css("color", "white");
          $(".seb").css("border-color", "white");
        });
        $(document).ready(function() {
          $("#editsp").css("background-color", "red");
          $("#editsp").css("color", "white");
          $("#editsp").css("border-color", "white");

          $(".casD").css("background-color", "red");
          $(".casD").css("color", "white");
          $(".casD").css("border-color", "white");
        });
      //   $(document).ready(function() {
      //     $("#Savesp").css("background-color", "red");
      //     $("#Savesp").css("color", "white");
      //     $("#Savesp").css("border-color", "white");

      //     $(".csaa").css("background-color", "red");
      //     $(".csaa").css("color", "white");
      //     $(".csaa").css("border-color", "white");
      // });



        trow.appendChild(td1);
        trow.appendChild(td2);
        trow.appendChild(td3);
        trow.appendChild(td4);

        var num = String(cat);
        btnsp.onclick = function () {
          var result = confirm("Are you sure you want to Delete Specialization Details?");
          if (result) {
          deleteDoc(doc(db, "JobConfig", "Master","Specialization",num));
          setTimeout("location.reload(true);",3000);
          }
        };
  
        btn2sp.onclick = function () {

          let text;
          let person = prompt("Please enter Specialization Category:", cby);
          if (person == null || person == "") {
            text = "User cancelled the prompt.";
          } else {
            let person1 = prompt("Please enter Specialization SubCategory:", rui);
        
        
            if (person1 == null || person1 == "") {
            text = "User cancelled the prompt.";
          } else {
            setDoc(doc(db, "JobConfig", "Master", "PackageMaster", ao), {
                          Id: ao,
                          Category:person,
                          SubCategory: person1
                          }).catch((error)=>{
                             console.log(error);
                          }); 
          }
        
          }




          // td3.contentEditable = true;
          // td3.style.backgroundColor = "#BBC4CE";
        }; 
        
        // btn3sp.onclick = function () {
        //   td3.contentEditable = false;
        //   var tio = String(cat);
        //   setDoc(doc(db, "JobConfig", "Master", "Specialization", tio), {
        //     Category: "Specialization",
        //     Id: String(cat),
        //     SubCategory: td3.innerHTML
        //   });
        //   setTimeout("location.reload(true);",3000);
        // }; 


        tbody.appendChild(trow);

    }

    function AddAllItemsToTable6(qualification){
        tbody.innerHTML="";

        qualification.forEach(element => {
        AddItemToTable6(element.Id,element.Category,element.SubCategory);    
        });
    }

var cert=[];
var querySnapshot1 = await getDocs(collection(db, "JobConfig", "Master", "Specialization"),limit(2));
querySnapshot1.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
    cert.push(doc.data());
    AddAllItemsToTable6(cert);
});







//jobtypes
var tbody= document.getElementById("tbody6");


    function AddItemToTable5(cat,cby){
      console.log(cat + cby);
        let trow=document.createElement("tr");
        let td1=document.createElement("td");
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


        td1.innerHTML= cat;
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
        trow.appendChild(td1);
        trow.appendChild(td2);
        trow.appendChild(td3);

        var num = String(cat);
        btnj.onclick = function () {
          var result = confirm("Are you sure you want to Delete JobType Details");
          if (result) {
          deleteDoc(doc(db, "JobConfig", "Master","JobTypes",num));
          setTimeout("location.reload(true);",3000);
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
            setDoc(doc(db, "JobConfig", "Master", "JobTypes", num), {
                            name: person,
                            CreatedAt :  dateTime,
                            CreatedBy : "1",
                            UpdatedAt :  dateTime,
                            UpdatedBy : "1",
                            id : num,
                          }).catch((error)=>{
                             console.log(error);
                          }); 
                          
            document.getElementById("demo").innerHTML = text;
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

        qualification.forEach(element => {
        AddItemToTable5(element.id,element.name);    
        });
    }

// async function type()
// {
  var cert=[];
var querySnapshot1 = await getDocs(collection(db, "JobConfig", "Master", "JobTypes"),limit(2), { includeMetadataChanges: true });
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





//blogmaster

var tbody = document.getElementById("tbodygmas");

function AddItemToTable7(cat,cby,uat,uby,des,empid,tile){

      
  let trow=document.createElement("tr");
  let td1=document.createElement("td");
  let td2=document.createElement("td");
  let td3=document.createElement("td");
  let td4=document.createElement("td");
  // let td5=document.createElement("td");
  let td6=document.createElement("td");
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
  td4.innerHTML=cat ;
  // td5.innerHTML=cby;
  td6.innerHTML=uat;
  // td7.innerHTML = uby;

  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  // trow.appendChild(td5);
  trow.appendChild(td6);
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


btn.onclick = function () {
  var result = confirm("Are you sure you want to Delete BlogMaster with Id " + num);
  if (result) {
  deleteDoc(doc(db,"BlogMaster",num));
  // setTimeout("location.reload(true);",3000);
  }
};


}

function AddAllItemsToTable7(certification){
  tbody.innerHTML="";

  certification.forEach(element => {
  AddItemToTable7(element.CreatedAt,element.CreatedBy,element.UpdatedAt,element.UpdatedBy,element.Description,element.EmployerId,element.Title);    
  });

}
var cert=[];
var querySnapshot = await getDocs(collection(db, "BlogMaster"),limit(2));
querySnapshot.forEach((doc) => {
cert.push(doc.data());
AddAllItemsToTable7(cert);

});

// try {
//   const docsSnap = await getDocs(collection(db, "BlogMaster"),limit(2));
//   if(docsSnap.docs.length > 0) {
//      docsSnap.forEach(doc => {
//         // console.log(doc.data());
//         // console.log(doc.id);
//         cert.push(doc.data());
//         AddAllItemsToTable7(cert);
//      })
//   }
// } catch (error) {
//   console.log(error);
// }










//Qualification

var tbody= document.getElementById("tbody2");


    function AddItemToTable1(cat,cby,uat,uby,id,name){
        let trow=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        // let td3=document.createElement("td");
        let td4=document.createElement("td");
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
        

        td1.innerHTML= id ;
        td2.innerHTML=cat ;
        // td3.innerHTML= cby ;
        td4.innerHTML=uat ;
        // td5.innerHTML=uby;
        td6.innerHTML=name;


        trow.appendChild(td1);
        trow.appendChild(td2);
        // trow.appendChild(td3);
        trow.appendChild(td4);
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
        deleteDoc(doc(db, "JobConfig", "Master","Qualifiactions",num));
        setTimeout("location.reload(true);",3000);
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
                        }).catch((error)=>{
                           console.log(error);
                        }); 
                        
          document.getElementById("demo").innerHTML = text;
        }
      }; 
      



    }

    function AddAllItemsToTable1(qualification){
        tbody.innerHTML="";

        qualification.forEach(element => {
        AddItemToTable1(element.CreatedAt,element.CreatedBy,element.UpdatedAt,element.UpdatedBy,element.id,element.name);    
        });
    }

var cert=[];
var querySnapshot1 =  await getDocs(collection(db, "JobConfig", "Master", "Qualifiactions"),limit(2),{ includeMetadataChanges: true });
querySnapshot1.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
    cert.push(doc.data());
  AddAllItemsToTable1(cert);

});

// const logCities2 = async () => {
//   let allCities = await getDocs(collection(db, "JobConfig", "Master", "Qualifiactions"),limit(2),{ includeMetadataChanges: true });
//   for(const doc of allCities.docs){
//     console.log(doc.id, '=>', doc.data());
//         cert.push(doc.data());
//         AddAllItemsToTable1(cert);
//   }
// }




//skills

var tbody= document.getElementById("tbody3");


    function AddItemToTable2(cat,cby,uat,uby,id,name){
        let trow=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        // let td3=document.createElement("td");
        let td4=document.createElement("td");
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





        td1.innerHTML= id ;
        td2.innerHTML=cat ;
        // td3.innerHTML= cby ;
        td4.innerHTML=uat ;
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




        trow.appendChild(td1);
        trow.appendChild(td2);
        // trow.appendChild(td3);
        trow.appendChild(td4);
        // trow.appendChild(td5);
        trow.appendChild(td6);
        trow.appendChild(td7);

        tbody.appendChild(trow);


        var num = String(id);

      btns.onclick = function () {
        var result = confirm("Are you sure you want to Delete Skill with Id " + num);
        if (result) {
        deleteDoc(doc(db, "JobConfig", "Master","Skills",num));
        setTimeout("location.reload(true);",2000);
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
                        }).catch((error)=>{
                           console.log(error);
                        }); 
                        
          document.getElementById("demo").innerHTML = text;
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

    function AddAllItemsToTable2(qualification){
        tbody.innerHTML="";

        qualification.forEach(element => {
        AddItemToTable2(element.CreatedAt,element.CreatedBy,element.UpdatedAt,element.UpdatedBy,element.id,element.name);    
        });
    }

var cert=[];
var querySnapshot1 = await getDocs(collection(db, "JobConfig", "Master", "Skills"),limit(2));
querySnapshot1.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
    cert.push(doc.data());
  AddAllItemsToTable2(cert);

});



//cities
var tbody= document.getElementById("tbody5");


    function AddItemToTable4(cat,cby,uat){
        let trow=document.createElement("tr");
        let td1=document.createElement("td");
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

        td1.innerHTML= cat;
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
        trow.appendChild(td1);
        trow.appendChild(td2);
        trow.appendChild(td3);
        trow.appendChild(td4);
        var num = String(cat);

        btnc.onclick = function () {
          var result = confirm("Are you sure you want to Delete City with Id " + num);
          if (result) {
          deleteDoc(doc(db, "JobConfig", "Master","Cities",num));
          setTimeout("location.reload(true);",3000);
          }
        };
  
        btn2c.onclick = function () {
          let text;
  let person = prompt("Please enter Cities name:", cby);
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    // alert(person);
    if (person1 == null || person1 == "") {
      text = "User cancelled the prompt.";
    } else {
      let person1 = prompt("Please enter State name:",uat);
    Update(doc(db, "JobConfig", "Master", "Cities", num), {
                   City: person,
                    State:person1,
                    id : num,
                  }).catch((error)=>{
                     console.log(error);
                  }); 
                  
    document.getElementById("demo").innerHTML = text;
      }
  }




          // td3.contentEditable = true;
          // td2.contentEditable = true;
          // td3.style.backgroundColor = "#BBC4CE";
          // td2.style.backgroundColor = "#BBC4CE";
        }; 
        
        // btn3c.onclick = function () {
        //   td3.contentEditable = false;
        //   td2.contentEditable = false;
        //   var tio = String(cat);
        //   setDoc(doc(db, "JobConfig", "Master", "Cities", tio), {
        //     City: td2.innerHTML,
        //     State:td3.innerHTML,
        //     id : String(cat),
        //   });
        //   setTimeout("location.reload(true);",3000);
        // }; 
        tbody.appendChild(trow);
        // getMarkers();
        // timeFunction1();
    }

    function AddAllItemsToTable4(qualification){
        tbody.innerHTML="";

        qualification.forEach(element => {
        AddItemToTable4(element.id,element.City,element.State);    
        });
    }

var cert=[];
var q11 = query(collection(db, "JobConfig", "Master", "Cities"),where("State", "==", "Maharashtra"));
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

// $(document).ready(function() {
//   timeFunction1();
// });







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
          var result = confirm("Are you sure you want to Delete Functional Area with Id " + num);
          if (result) {
          deleteDoc(doc(db, "JobConfig", "Master","FunctionalArea",num));
          setTimeout("location.reload(true);",3000);
          }
        };
  
        btn2f.onclick = function () {
          var ao = a.toString();
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
            setDoc(doc(db, "JobConfig", "Master", "FunctionalArea", num), {
                            // CId: cell2.innerHTML,
                            Category:person,
                            SCId : num,
                            SubCategory: person1
                          }).catch((error)=>{
                             console.log(error);
                          }); 
                          
            document.getElementById("demo").innerHTML = text;
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

        qualification.forEach(element => {
        AddItemToTable3(element.Category,element.CId,element.SubCategory,element.SCId);    
        });
    }

var cert=[];
var q1 = query(collection(db, "JobConfig", "Master", "FunctionalArea"),where("CId", "==", "1"));
var querySnapshot1 = await getDocs(q1);
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

// $(document).ready(function() {
//   timeFunction();
//   // $( window ).on( "load", function() {
//     setTimeout(async function(){ 
//       console.log("function execute 6000");
//   $(".myTableFunc").fancyTable({ 	
//     globalSearch: true,
//     sortable: false,
//     pagination: true, 			
//     perPage:5, 				
//   });
// }, 6000);
// // });
// });

// $(document).ready(async function() {
//   var q1 = query(collection(db, "JobConfig", "Master", "FunctionalArea"),where("CId", "!=", "1"));
//   var querySnapshot1 = await getDocs(q1);
//   querySnapshot1.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     //console.log(doc.id, " => ", doc.data());
//       cert.push(doc.data());
//     AddAllItemsToTable3(cert);
//     const source = doc.metadata.fromCache ? "local cache" : "server";
//     console.log("Data came from " + source);
// }); 
// });

// const logCities = async () => {
//   let allCities = await getDocs(collection(db, "JobConfig", "Master", "FunctionalArea"),limit(25),{ includeMetadataChanges: true });
//   for(const doc of allCities.docs){
//     console.log(doc.id, '=>', doc.data());
//         cert.push(doc.data());
//         AddAllItemsToTable3(cert);
//   }
// }








// //cities

// var tbody= document.getElementById("tbody5");


//     function AddItemToTable4(cat,cby,uat){
//         let trow=document.createElement("tr");
//         let td1=document.createElement("td");
//         let td2=document.createElement("td");
//         let td3=document.createElement("td");
//         let td4=document.createElement("td");

//         let btnc=document.createElement("button");
//         btnc.setAttribute("id", "delc");
//         btnc.setAttribute("class", "dg");
//         btnc.innerHTML = '<i class="fa fa-trash-o"></i>';
//         td4.appendChild(btnc);


//         let btn2c = document.createElement("button");
//         btn2c.setAttribute("id", "editc");
//         btn2c.setAttribute("class", "bgr");
//         btn2c.innerHTML = '<i class="fas fa-edit"></i>';
//         td4.appendChild(btn2c);

//         let btn3c = document.createElement("button");
//         btn3c.setAttribute("id", "Savec");
//         btn3c.setAttribute("class", "bgds");
//         btn3c.innerHTML = '<i class="fa fa-save"></i>';
//         td4.appendChild(btn3c);

//         td1.innerHTML= cat;
//         td2.innerHTML=cby;
//         td3.innerHTML=uat;


//         $(document).ready(function() {
//           $("#delc").css("background-color", "red");
//           $("#delc").css("color", "white");
//           $("#delc").css("border-color", "white");

//           $(".dg").css("background-color", "red");
//           $(".dg").css("color", "white");
//           $(".dg").css("border-color", "white");
//         });
//         $(document).ready(function() {
//           $("#editc").css("background-color", "red");
//           $("#editc").css("color", "white");
//           $("#editc").css("border-color", "white");

//           $(".bgr").css("background-color", "red");
//           $(".bgr").css("color", "white");
//           $(".bgr").css("border-color", "white");
//         });
//         $(document).ready(function() {
//           $("#Savec").css("background-color", "red");
//           $("#Savec").css("color", "white");
//           $("#Savec").css("border-color", "white");

//           $(".bgds").css("background-color", "red");
//           $(".bgds").css("color", "white");
//           $(".bgds").css("border-color", "white");
//       });
//         trow.appendChild(td1);
//         trow.appendChild(td2);
//         trow.appendChild(td3);
//         trow.appendChild(td4);
//         var num = String(cat);

//         btnc.onclick = function () {
//           var result = confirm("Are you sure you want to Delete City with Id " + num);
//           if (result) {
//           deleteDoc(doc(db, "JobConfig", "Master","Cities",num));
//           setTimeout("location.reload(true);",3000);
//           }
//         };
  
//         btn2c.onclick = function () {
//           td3.contentEditable = true;
//           td2.contentEditable = true;
//         }; 
        
//         btn3c.onclick = function () {
//           td3.contentEditable = false;
//           td2.contentEditable = false;
//           var tio = String(cat);
//           setDoc(doc(db, "JobConfig", "Master", "Cities", tio), {
//             City: td2.innerHTML,
//             State:td3.innerHTML,
//             id : String(cat),
//           });
//           setTimeout("location.reload(true);",3000);
//         }; 
//         tbody.appendChild(trow);

//     }

//     function AddAllItemsToTable4(qualification){
//         tbody.innerHTML="";

//         qualification.forEach(element => {
//         AddItemToTable4(element.id,element.City,element.State);    
//         });
//     }

// var cert=[];
// var querySnapshot1 = await getDocs(collection(db, "JobConfig", "Master", "Cities"),limit(2));
// querySnapshot1.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   //console.log(doc.id, " => ", doc.data());
//     cert.push(doc.data());
//   AddAllItemsToTable4(cert);

// });










// //jobtypes
// var tbody= document.getElementById("tbody6");


//     function AddItemToTable5(cat,cby){
//       console.log(cat + cby);
//         let trow=document.createElement("tr");
//         let td1=document.createElement("td");
//         let td2=document.createElement("td");
//         let td3=document.createElement("td");



//         let btnj=document.createElement("button");
//         btnj.setAttribute("id", "delj");
//         btnj.setAttribute("class", "bfds");
//         btnj.innerHTML = '<i class="fa fa-trash-o"></i>';
//         td3.appendChild(btnj);


//         let btn2j = document.createElement("button");
//         btn2j.setAttribute("id", "editj");
//         btn2j.setAttribute("class", "bsns");
//         btn2j.innerHTML = '<i class="fas fa-edit"></i>';
//         td3.appendChild(btn2j);

//         let btn3j = document.createElement("button");
//         btn3j.setAttribute("id", "Savej");
//         btn3j.setAttribute("class", "VA");
//         btn3j.innerHTML = '<i class="fa fa-save"></i>';
//         td3.appendChild(btn3j);


//         td1.innerHTML= cat;
//         td2.innerHTML=cby;


//         $(document).ready(function() {
//           $("#delj").css("background-color", "red");
//           $("#delj").css("color", "white");
//           $("#delj").css("border-color", "white");

//           $(".bfds").css("background-color", "red");
//           $(".bfds").css("color", "white");
//           $(".bfds").css("border-color", "white");
//         });
//         $(document).ready(function() {
//           $("#editj").css("background-color", "red");
//           $("#editj").css("color", "white");
//           $("#editj").css("border-color", "white");

//           $(".bsns").css("background-color", "red");
//           $(".bsns").css("color", "white");
//           $(".bsns").css("border-color", "white");
//         });
//         $(document).ready(function() {
//           $("#Savej").css("background-color", "red");
//           $("#Savej").css("color", "white");
//           $("#Savej").css("border-color", "white");

//           $(".VA").css("background-color", "red");
//           $(".VA").css("color", "white");
//           $(".VA").css("border-color", "white");
//       });
//         trow.appendChild(td1);
//         trow.appendChild(td2);
//         trow.appendChild(td3);

//         var num = String(cat);
//         btnj.onclick = function () {
//           var result = confirm("Are you sure you want to Delete JobType with Id " + num);
//           if (result) {
//           deleteDoc(doc(db, "JobConfig", "Master","JobTypes",num));
//           setTimeout("location.reload(true);",3000);
//           }
//         };
  
//         btn2j.onclick = function () {
//           td2.contentEditable = true;
//         }; 
        
//         btn3j.onclick = function () {
//           td2.contentEditable = false;
//           var tio = String(cat);
//           setDoc(doc(db, "JobConfig", "Master", "JobTypes", tio), {
//             name: td2.innerHTML,
//             id : String(cat),
//           });
//           setTimeout("location.reload(true);",3000);
//         }; 
//         tbody.appendChild(trow);

//     }

//     function AddAllItemsToTable5(qualification){
//         tbody.innerHTML="";

//         qualification.forEach(element => {
//         AddItemToTable5(element.id,element.name);    
//         });
//     }

// var cert=[];
// var querySnapshot1 = await getDocs(collection(db, "JobConfig", "Master", "JobTypes"),limit(2), { includeMetadataChanges: true });
// querySnapshot1.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   //console.log(doc.id, " => ", doc.data());
//     cert.push(doc.data());
//   AddAllItemsToTable5(cert);
//   const source = doc.metadata.fromCache ? "local cache" : "server";
//   console.log("Data came from " + source);
// });





// //Specialization
// var tbody= document.getElementById("tbody7");


//     function AddItemToTable6(cat,cby,rui){
//         let trow=document.createElement("tr");
//         let td1=document.createElement("td");
//         let td2=document.createElement("td");
//         let td3=document.createElement("td");
//         let td4=document.createElement("td");



//         let btnsp=document.createElement("button");
//         btnsp.setAttribute("id", "delsp");
//         btnsp.setAttribute("class", "seb");
//         btnsp.innerHTML = '<i class="fa fa-trash-o"></i>';
//         td4.appendChild(btnsp);


//         let btn2sp = document.createElement("button");
//         btn2sp.setAttribute("id", "editsp");
//         btn2sp.setAttribute("class", "casD");
//         btn2sp.innerHTML = '<i class="fas fa-edit"></i>';
//         td4.appendChild(btn2sp);

//         let btn3sp = document.createElement("button");
//         btn3sp.setAttribute("id", "Savesp");
//         btn3sp.setAttribute("class", "csaa");
//         btn3sp.innerHTML = '<i class="fa fa-save"></i>';
//         td4.appendChild(btn3sp);


//         td1.innerHTML= cat;
//         td2.innerHTML=cby;
//         td3.innerHTML=rui;


//         $(document).ready(function() {
//           $("#delsp").css("background-color", "red");
//           $("#delsp").css("color", "white");
//           $("#delsp").css("border-color", "white");

//           $(".seb").css("background-color", "red");
//           $(".seb").css("color", "white");
//           $(".seb").css("border-color", "white");
//         });
//         $(document).ready(function() {
//           $("#editsp").css("background-color", "red");
//           $("#editsp").css("color", "white");
//           $("#editsp").css("border-color", "white");

//           $(".casD").css("background-color", "red");
//           $(".casD").css("color", "white");
//           $(".casD").css("border-color", "white");
//         });
//         $(document).ready(function() {
//           $("#Savesp").css("background-color", "red");
//           $("#Savesp").css("color", "white");
//           $("#Savesp").css("border-color", "white");

//           $(".csaa").css("background-color", "red");
//           $(".csaa").css("color", "white");
//           $(".csaa").css("border-color", "white");
//       });



//         trow.appendChild(td1);
//         trow.appendChild(td2);
//         trow.appendChild(td3);
//         trow.appendChild(td4);

//         var num = String(cat);
//         btnsp.onclick = function () {
//           var result = confirm("Are you sure you want to Delete Specialization with Id " + num);
//           if (result) {
//           deleteDoc(doc(db, "JobConfig", "Master","Specialization",num));
//           setTimeout("location.reload(true);",3000);
//           }
//         };
  
//         btn2sp.onclick = function () {
//           td3.contentEditable = true;
//         }; 
        
//         btn3sp.onclick = function () {
//           td3.contentEditable = false;
//           var tio = String(cat);
//           setDoc(doc(db, "JobConfig", "Master", "Specialization", tio), {
//             Category: "Specialization",
//             Id: String(cat),
//             SubCategory: td3.innerHTML
//           });
//           setTimeout("location.reload(true);",3000);
//         }; 


//         tbody.appendChild(trow);

//     }

//     function AddAllItemsToTable6(qualification){
//         tbody.innerHTML="";

//         qualification.forEach(element => {
//         AddItemToTable6(element.Id,element.Category,element.SubCategory);    
//         });
//     }

// var cert=[];
// var querySnapshot1 = await getDocs(collection(db, "JobConfig", "Master", "Specialization"),limit(2));
// querySnapshot1.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   //console.log(doc.id, " => ", doc.data());
//     cert.push(doc.data());
//     AddAllItemsToTable6(cert);
// });

