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
document.getElementById("options").addEventListener("click", showheader)
function showheader() {
    if (document.getElementById("options").value == "close") {
        document.getElementById("header").style.display = "initial"
        document.getElementById("header").style.transition = "all 3s ease-out"
        document.getElementById("options").innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>'
        document.getElementById("options").value = "open"
        document.getElementById("options").style.backgroundColor = "transparent"
    }

    else {
        document.getElementById("header").style.display = "none"
        document.getElementById("options").innerHTML = '<i class="fa fa-server" aria-hidden="true"></i>'
        document.getElementById("options").value = "close"
        document.getElementById("options").style.backgroundColor = "transparent"
    }

}
document.getElementById("selbtn16").addEventListener("click", openfaq)
function openfaq() {
    window.location.href = "/nss html/faqs.html"
}


function showans(ans_id){
   if(ans_id=="q1"){
    if(document.querySelector(".question").value=="close"){
        document.getElementById("a1").style.display='initial'
        document.querySelector(".question").value="open"
    }
    else{
        document.getElementById("a1").style.display='none'
        document.querySelector(".question").value="close"
    }
   
   }
   else if(ans_id=="q2"){
    if(document.querySelector(".question").value=="close"){
        document.getElementById("a2").style.display='initial'
        document.querySelector(".question").value="open"
    }
    else{
        document.getElementById("a2").style.display='none'
        document.querySelector(".question").value="close"
    }
   }
   else if(ans_id=="q2"){
    if(document.querySelector(".question").value=="close"){
        document.getElementById("a2").style.display='initial'
        document.querySelector(".question").value="open"
    }
    else{
        document.getElementById("a2").style.display='none'
        document.querySelector(".question").value="close"
    }
   }
   else if(ans_id=="q3"){
    if(document.querySelector(".question").value=="close"){
        document.getElementById("a3").style.display='initial'
        document.querySelector(".question").value="open"
    }
    else{
        document.getElementById("a3").style.display='none'
        document.querySelector(".question").value="close"
    }
   }
   else if(ans_id=="q4"){
    if(document.querySelector(".question").value=="close"){
        document.getElementById("a4").style.display='initial'
        document.querySelector(".question").value="open"
    }
    else{
        document.getElementById("a4").style.display='none'
        document.querySelector(".question").value="close"
    }
   }
   else if(ans_id=="q5"){
    if(document.querySelector(".question").value=="close"){
        document.getElementById("a5").style.display='initial'
        document.querySelector(".question").value="open"
    }
    else{
        document.getElementById("a5").style.display='none'
        document.querySelector(".question").value="close"
    }
   }
   else if(ans_id=="q6"){
    if(document.querySelector(".question").value=="close"){
        document.getElementById("a6").style.display='initial'
        document.querySelector(".question").value="open"
    }
    else{
        document.getElementById("a6").style.display='none'
        document.querySelector(".question").value="close"
    }
   }
   else if(ans_id=="q7"){
    if(document.querySelector(".question").value=="close"){
        document.getElementById("a7").style.display='initial'
        document.querySelector(".question").value="open"
    }
    else{
        document.getElementById("a7").style.display='none'
        document.querySelector(".question").value="close"
    }
   }
   else{
    if(document.querySelector(".question").value=="close"){
        document.getElementById("a8").style.display='initial'
        document.querySelector(".question").value="open"
    }
    else{
        document.getElementById("a8").style.display='none'
        document.querySelector(".question").value="close"
    }
   }
}