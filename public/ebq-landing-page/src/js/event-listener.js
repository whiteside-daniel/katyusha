// Event Listener JS CODE
// Created by Daniel Whiteside


const buttonLis = document.querySelector(".special-event-trigger")
buttonLis.addEventListener('click', e => {
    var mail = document.createElement("a");
    mail.href = "mailto:alexis.leverette@ebq.com";
    mail.click();
})