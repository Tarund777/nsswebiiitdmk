document.getElementById("selbtn11").addEventListener("click",openhome)
function openhome(){
    window.location.href="/nss html/nss.html"
}
document.getElementById("selbtn12").addEventListener("click",openclgweb)
function openclgweb(){
    window.open("https://www.iiitk.ac.in/")
}


document.getElementById("selbtn13").addEventListener("click",openevents)
function openevents(){
    window.location.href="/nss html/Events.html"
}
document.getElementById("selbtn14").addEventListener("click", openmembers)
function openmembers() {
    window.location.href = "/nss html/members.html"
}
document.getElementById("selbtn15").addEventListener("click",opencontacts)
function opencontacts(){
    window.location.href="/nss html/contacts.html"
}
document.getElementById("options").addEventListener("click",showheader)
function showheader(){
    if(document.getElementById("options").value=="close"){
    document.getElementById("header").style.display="initial"
    document.getElementById("options").innerHTML='<i class="fa fa-bars" aria-hidden="true"></i>'
    document.getElementById("options").value="open"
    document.getElementById("options").style.backgroundColor="transparent"
}

   else {
        document.getElementById("header").style.display="none"
        document.getElementById("options").innerHTML='<i class="fa fa-server" aria-hidden="true"></i>'
        document.getElementById("options").value="close"
        document.getElementById("options").style.backgroundColor="transparent"}
    
}
document.getElementById("selbtn16").addEventListener("click", openfaq)
function openfaq() {
    window.location.href = "/nss html/faqs.html"
}

// function show(){
//         console.log("hi")
//         document.getElementById("eve-matter-display").innerHTML = document.querySelector('#eve1 pre').innerHTML
    
// }

// document.getElementById("events_cont").addEventListener("click",show )
// function show(e){
//     if(e.target.id="eve1"){
//         document.getElementById("eve-matter-display").innerHTML = document.querySelector('#eve1 pre').innerHTML
//     }
//    else if(e.target.id="eve2"){
//         document.getElementById("eve-matter-display").innerHTML = document.querySelector('#eve2 pre').innerHTML
//         console.log("tar")
//     }
//     else if(e.target.id="eve3"){
//         document.getElementById("eve-matter-display").innerHTML = document.querySelector('#eve3 pre').innerHTML
//         console.log("ved")
//     }
//     else if(e.target.id="eve4"){
//         document.getElementById("eve-matter-display").innerHTML = document.querySelector('#eve4 pre').innerHTML
//     }
//     else if(e.target.id="eve5"){
//         document.getElementById("eve-matter-display").innerHTML = document.querySelector('#eve5 pre').innerHTML
//     }
//     else if(e.target.id="eve6"){
//         document.getElementById("eve-matter-display").innerHTML = document.querySelector('#eve6 pre').innerHTML
//     }
//     else if(e.target.id="eve7"){
//         document.getElementById("eve-matter-display").innerHTML = document.querySelector('#eve7 pre').innerHTML
//     }
//     else if(e.target.id="eve8"){
//         document.getElementById("eve-matter-display").innerHTML = document.querySelector('#eve8 pre').innerHTML
//     }
//     else if(e.target.id="eve9"){
//         document.getElementById("eve-matter-display").innerHTML = document.querySelector('#eve9 pre').innerHTML
//     }
//     else if(e.target.id="eve10"){
//         document.getElementById("eve-matter-display").innerHTML = document.querySelector('#eve10 pre').innerHTML
//     }
//     else if(e.target.id="eve11"){
//         document.getElementById("eve-matter-display").innerHTML = document.querySelector('#eve11 pre').innerHTML
//     }
//     else if(e.target.id="eve12"){
//         document.getElementById("eve-matter-display").innerHTML = document.querySelector('#eve12 pre').innerHTML
//     }
//     else if(e.target.id="eve13"){
//         document.getElementById("eve-matter-display").innerHTML = document.querySelector('#eve13 pre').innerHTML
//     }
//     else if(e.target.id="eve14"){
//         document.getElementById("eve-matter-display").innerHTML = document.querySelector('#eve14 pre').innerHTML
//     }
//     else if(e.target.id="eve15"){
//         document.getElementById("eve-matter-display").innerHTML = document.querySelector('#eve15 pre').innerHTML
//     }
//     else{
//         document.getElementById("eve-matter-display").innerHTML = document.querySelector('#eve16 pre').innerHTML
//     }
//     e.stopPropagation();
// }
document.getElementById("close").addEventListener("click",close)
function close(){
    document.getElementById("eve-matter-display").style.display='none'
    document.getElementById("close").style.display='none'
}

function reply_click(clicked_id)
  {
      var tar1=clicked_id;
      document.getElementById("close").style.display='initial'
      document.getElementById("eve-matter-display").style.display='initial'
     document.getElementById("eve-matter-display1").innerHTML = document.getElementById(clicked_id).innerHTML
     document.getElementById("eve-matter-display").innerHTML = document.querySelector("#eve-matter-display1 pre").innerHTML
    
  }