let benefitLabel = document.querySelector("#benefit");
let costsLabel = document.querySelector("#costs");
let memberships = document.querySelectorAll(".radio");
memberships[0].onchange = () => {
    benefitLabel.textContent = "There are no benefits associated with this membership";
    costsLabel.innerHTML = "Free";
}
memberships[1].onchange = () => {
    benefitLabel.innerHTML = `- Access to basic services<br>- Fast-track approval of permits`;
    costsLabel.innerHTML = "- $20 per Month<br>- $220 Annual Plan";
}
memberships[2].onchange = () => {
    benefitLabel.innerHTML = `- Access to basic and middle services<br>- Fast-track approval of permits and liscences<br>- 10% store discount`; 
    costsLabel.innerHTML = "- $50 per Month<br>- $570 Annual Plan";
}
memberships[3].onchange = () => {
    benefitLabel.innerHTML = `- Access to basic, middle, and premium services<br>- Fast-track approval of permits and liscences<br>- 25% store discount<br>- VIP Level tickets to commerce evemts`;
    costsLabel.innerHTML = "- $90 per Month<br>- $1,000 Annual Plan";
}
const hiddenInput = document.querySelector("#datetime");
hiddenInput.value = `${new Date()}`;