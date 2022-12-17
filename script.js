
let items  = document.getElementsByName('radioDias').forEach(item =>
    { item.addEventListener('change',selectItem)
});
let userIdElement = document.getElementById('user-id');
let zoneIdElement = document.getElementById('zone-id');
let totalPriceElement = document.getElementById('total');
// let buyButton = document.getElementById('btn-toCheckout').addEventListener('ons', toCheckout);
let modalDiamond = document.getElementById('modal-diamond');
let modalOverlay = document.getElementById('modal-overlay');
let dias  = null;
let price = null;
let userId = null;
let zoneId = null;
let form = document.getElementById('mlbb-form').addEventListener('submit', toCheckout)
let toPay = document.getElementById('to-pay');
function selectItem(){
    if(this.checked){
        dias = this.value.split(' ')[0];
        price  = this.value.split(' ')[1];
        totalPriceElement.innerText = '₹ '+price;
    }
}
let navLinks = document.getElementById('nav-links');
        let hamburger = document.getElementById('hamburger-menu').addEventListener('click', toggleMenu);
        function toggleMenu(){
            navLinks.classList.toggle('active')
        }
function toCheckout(e){
    e.preventDefault();
    userId = userIdElement.value;
    zoneId = zoneIdElement.value;
    modalDiamond.innerText = dias;
    window.open("https://www.upilinks.in/payment-link/upi1508290771",)
    modalOverlay.style.display = 'flex';
    
}



