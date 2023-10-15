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
console.log("hi")
