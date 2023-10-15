document.getElementById("selbtn12").addEventListener("click", openclgweb)
function openclgweb() {
    window.open("https://www.iiitk.ac.in/")
}

document.getElementById("selbtn11").addEventListener("click", opennssweb)
function opennssweb() {
    window.open("https://nss.gov.in/")
}

document.getElementById("selbtn13").addEventListener("click", openevents)
function openevents() {
    window.location.href = "/nss html/Events.html"
}
document.getElementById("selbtn14").addEventListener("click", openmembers)
function openmembers() {
    window.location.href = "/nss html/members.html"
}
document.getElementById("selbtn16").addEventListener("click", openfaq)
function openfaq() {
    window.location.href = "/nss html/faqs.html"
}
// document.getElementById("selbtn14").addEventListener("click", openmembersopt)
// function openmembersopt() {
//     if (document.getElementById("selbtn14").value == "close") {
//         document.getElementById("selbtn14").value = "open"
//         document.getElementById("member-opt").style.height = "6vw"
//         document.getElementById("member-opt").style.visibility = "visible"
//         document.getElementById("member-opt").style.transform = "translateY(80px)"
//         document.getElementById("member-opt").style.transitionDuration = "0.4s"
//         document.getElementById("member-btn").style.height = "2.5vw"
//         document.getElementById("member-btn").style.visibility = "visible"
//         document.getElementById("coordinator-btn").style.visibility = "visible"
//         document.getElementById("coordinator-btn").style.height = "2.5vw"
//     }
//     else if (document.getElementById("selbtn14").value == "open") {
//         document.getElementById("selbtn14").value = "close"
//         document.getElementById("member-opt").style.visibility = "hidden"
//         document.getElementById("member-btn").style.visibility = "hidden"
//         document.getElementById("coordinator-btn").style.visibility = "hidden"
//         document.getElementById("member-opt").style.transform = "translateY(-60px)"
//         document.getElementById("member-opt").style.transform = "scale(1)"
//         document.getElementById("member-opt").style.transitionDuration = "0.4s"
//         document.getElementById("member-opt").style.height = "1vw"
//         document.getElementById("member-btn").style.height = "1vw"
//         document.getElementById("coordinator-btn").style.height = "1vw"
//     }
// }



document.getElementById("selbtn15").addEventListener("click", opencontacts)
function opencontacts() {
    window.location.href = "/nss html/contacts.html"
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



document.querySelector("#eventscroll1").addEventListener("click", show, false)
function show(e) {
    document.getElementById("up-event-des").style.display = "initial"
    console.log(e.target.id)
    if (e.target.id == "event1") {
        document.getElementById("event-matter").innerHTML = document.getElementById("event11").innerHTML
        console.log("hi")
    }
    else if (e.target.id == "event2") {
        document.getElementById("event-matter").innerHTML = document.getElementById("event22").innerHTML
        console.log("hello")
    }
    else if (e.target.id == "event3") {
        document.getElementById("event-matter").innerHTML = document.getElementById("event33").innerHTML
    }
    else if (e.target.id == "event4") {
        document.getElementById("event-matter").innerHTML = document.getElementById("event44").innerHTML
    }
    else if (e.target.id == "event5") {
        document.getElementById("event-matter").innerHTML = document.getElementById("event55").innerHTML
    }
    e.stopPropagation();
}


function closedes() {
    document.getElementById("up-event-des").style.display = "none"
}

const slides = document.querySelectorAll(".test-slides")
console.log(slides)

var counter = 0;

setInterval(function () {

    counter++

    if (counter > 5) {
        counter = 0
    }
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
            slide.style.transition - "smooth"
        }
    )
}, 7000)

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`

});
function slidediv() {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
            slide.style.transition - "smooth"
        }
    )
}


function prevslide() {
    counter--;
    slidediv();
    if (counter < 0) {
        counter = 6
    }
}
function nextslide() {
    counter++;
    slidediv();
    if (counter > 4) {
        counter = 0
    }
}

var counter1=0;

const sneak_peak=document.querySelectorAll(".sneak-peak")
sneak_peak.forEach(
    (slide,index)=>{
        slide.style.left=`${index*100}%`
    }
)
function slide_sneak_peak(){
    sneak_peak.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter1*100}%)`
        }
    )
}
function prevslide_sneak() {
    counter1--;
    slide_sneak_peak();
    if (counter1 < 0) {
        counter1 = 6
    }
}
function nextslide_sneak() {
    counter1++;
    slide_sneak_peak();
    if (counter1 > 4) {
        counter1 = 0
    }
}
setInterval(function(){
    counter1++
    if(counter1>5){
        counter1=0;
    }
    sneak_peak.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter1*100}%)`
        }
    )
},7000)