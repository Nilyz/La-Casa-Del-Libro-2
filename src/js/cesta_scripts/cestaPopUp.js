const payBtn = document.getElementById('payBtn');
const directionFormPopUp = document.getElementById('directionFormPopUp');
const confirmBtn = document.getElementById('directionFormPopUp__btnCont--confirm');
const cancelBtn = document.getElementById('directionFormPopUp__btnCont--cancel');
const overlay  = document.getElementById('overlay');

let opened = false;

payBtn.addEventListener('click', () => {
    if (opened) {
        directionFormPopUp.style.display = 'none';
        overlay.style.display = 'none';
        opened = false;
    } else {
        directionFormPopUp.style.display = 'block'; 
        overlay.style.display = 'block';
        opened = true;
    }
}
);


cancelBtn.addEventListener('click', () => {
    directionFormPopUp.style.display = 'none';
    overlay.style.display = 'none';
    opened = false;
});