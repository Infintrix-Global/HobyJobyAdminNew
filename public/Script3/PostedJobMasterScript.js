
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js";
import { getFirestore, limit } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
import { doc, deleteDoc,updateDoc, getDoc, getDocs, collection, query, orderBy, where } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

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



//skills

var tbody= document.getElementById("tbody3");

async function getCountOfInvitedJobs(jobIds) {
 
  const counts = await Promise.all(
    jobIds.map(async (jobId) => {
      const appliedJobRef = collection(db, "AppliedJobMaster");
      const q = query(appliedJobRef, where("JobId", "==", jobId), where("Status", "==", "INVITED"));
      const querySnapshot = await getDocs(q);
      return querySnapshot.size;
    })
  );
  return counts;
}

async function getCountOfAcceptedJobs(jobIds) {
 
  const counts = await Promise.all(
    jobIds.map(async (jobId) => {
      const appliedJobRef = collection(db, "AppliedJobMaster");
      const q = query(appliedJobRef, where("JobId", "==", jobId), where("Status", "==", "ACCEPTED"));
      const querySnapshot = await getDocs(q);
      return querySnapshot.size;
    })
  );
  return counts;
}

async function AddAllItemsToTable2(qualification) {
  tbody.innerHTML = "";

  const jobIds = qualification.map((element) => element.JobId);

  // Get the count of invited jobs for all posted jobs in parallel
  const invitedJobCounts = await getCountOfInvitedJobs(jobIds);
  // Get the count of accepteds jobs for all posted jobs in parallel
  const acceptedJobCounts = await getCountOfAcceptedJobs(jobIds);

  for (let i = 0; i < qualification.length; i++) {
    const { CreatedAt, CreatedBy, UpdatedAt, UpdatedBy, JobId, JobTitle } = qualification[i];
    const countInvitedJobs = invitedJobCounts[i];
    const countAcceptedJobs  = acceptedJobCounts[i];
    const trow = document.createElement("tr");
    const td6 = document.createElement("td");
    td6.innerHTML = JobTitle;
    trow.appendChild(td6);

    const td8 = document.createElement("td");
    td8.innerHTML = countInvitedJobs;
    trow.appendChild(td8);

    const td9 = document.createElement("td");
    td9.innerHTML = countAcceptedJobs;
    trow.appendChild(td9);

    const td7 = document.createElement("td");
    const btns = document.createElement("button");
    btns.setAttribute("id", "dels");
    btns.setAttribute("class", "gt");
    btns.innerHTML = '<i class="fa fa-trash-o"></i>';
    td7.appendChild(btns);

    let btn2 = document.createElement("button");
    btn2.setAttribute("id", "views");
    btn2.setAttribute("class", "ufgi");
    btn2.innerHTML = '<i class="fa-solid fa-eye"></i>';
    td7.appendChild(btn2);

    $(document).ready(function() {
      $("#dels").css("background-color", "red");
      $("#dels").css("color", "white");
      $("#dels").css("border-color", "white");

      $(".gt").css("background-color", "red");
      $(".gt").css("color", "white");
      $(".gt").css("border-color", "white");
    });

    $(document).ready(function() {
      $("#views").css("background-color", "red");
      $("#views").css("color", "white");
      $("#views").css("border-color", "white");
      $("#views").css("left-margin", "20px;");

      $(".ufgi").css("background-color", "red");
      $(".ufgi").css("color", "white");
      $(".ufgi").css("border-color", "white");
      $(".ufgi").css("left-margin", "20px;");

    });
    btns.onclick = function () {
      var result = confirm("Are you sure you want to Delete this Job: ");
      if (result) {
        deleteDoc(doc(db, "PostedJobMaster", JobId)).then(() => {
          setTimeout("location.reload(true);", 120);
        });
      }
    };

    btn2.onclick = function () { 
      location.href = 'PostedJobCandidatesDetails.html?id=' + JobId;
    };
    
    trow.appendChild(td7);

    tbody.appendChild(trow);
  }

  // After adding the data, initialize the fancyTable
  $(".myTableSkill").fancyTable({ 	
    globalSearch: true,
    sortable: true,
    pagination: true, 			
    perPage: 5, 				
  });
}

// ... Your existing code ...

// Fetch the data and populate the table
var cert = [];
var q1 = query(collection(db, "PostedJobMaster"), orderBy("UpdatedAt", "desc"));
var querySnapshot1 = await getDocs(q1);
querySnapshot1.forEach((doc) => {
  cert.push(doc.data());
});

AddAllItemsToTable2(cert);

