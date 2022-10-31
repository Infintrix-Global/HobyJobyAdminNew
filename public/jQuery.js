window.onload = function(){
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


$("#menu-toggle1").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


$("#menu-toggle2").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


$("#menu-toggle3").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});



$("#menu-toggle4").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


$("#menu-toggle5").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$("#menu-toggle6").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

$("#menu-toggle7").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

$("#menu-toggle8").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

$("#menu-toggle9").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});
};


function openMaster(evt, mastername) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(mastername).style.display = "block";
  evt.currentTarget.className += " active";
}
      

        function entertype(){
          setTimeout("location.reload(true);",2000);
        }
        function showTableData() {
                document.getElementById('info').innerHTML = "";
                var myTab = document.getElementById('myTable');
                var i = 0;
                // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
                for (i = 1; i < myTab.rows.length; i++) {
      
                    // GET THE CELLS COLLECTION OF THE CURRENT ROW.
                    var objCells = myTab.rows.item(i).cells;
      
                    // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
                    for (var j = 0; j < objCells.length; j++) {
                        info.innerHTML = info.innerHTML + ' ' + objCells.item(j).innerHTML;
                    }
                    info.innerHTML = info.innerHTML + '<br />';     // ADD A BREAK (TAG).
                    var df = JSON.stringify(info)
                    console.log(df);
                }
            }
      
      

          