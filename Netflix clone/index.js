function valid(e,spainid) {
    console.log(e)
    if (e.value == "") {
        document.getElementById(spainid).style.color = "yellow"
        document.getElementById(spainid).innerHTML = "<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Please enter a valid email address or phone number."
    }
    else{
        document.getElementById(spainid).innerHTML = ""
    }
}

function valid1(e,spainid) {
    console.log(e)
    if (e.value == "") {
        document.getElementById(spainid).style.color = "yellow"
        document.getElementById(spainid).innerHTML = "<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Your password must contain between 4 and  60 characters."
    }
    else{
        document.getElementById(spainid).innerHTML = ""
    }
}


// function gmail1(e,spainid) {
//     let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//     if (email.test(e.value)) {
//         document.getElementById(spainid).innerHTML = ""
//     }
//     else{
//         document.getElementById(spainid).style.color = "yellow"
//         document.getElementById(spainid).innerHTML = "<br> Please enter a valid email address or phone number."
//     }
// }