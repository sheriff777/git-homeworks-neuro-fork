<<<<<<< HEAD
<<<<<<< HEAD
(async () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const coordsEl = document.querySelector('#user-coords');
            coordsEl.textContent = `${position.coords.latitude}, ${position.coords.longitude}`
            coordsEl.parentElement.classList.remove('invisible');
        });
    }
=======
(() => {
    const earlyorderForm = document.querySelector('#earlyorder-form');

    earlyorderForm.addEventListener('submit', ev => {
        ev.preventDefault();

        const earlyorderContact = earlyorderForm.querySelector('#earlyorder-contact');
        const contact = earlyorderContact.value.trim();

        if (contact === '') {
            return;
        }
        
        // TODO: send email simulation:
        setTimeout(() => {
            $('#earlyorderModal').modal('show');
            earlyorderContact.value = '';
        }, 500);
    });
>>>>>>> feature/earlyorder
=======
(async () => {
    // TODO: add custom logic here
>>>>>>> 857e3d95477bfbd9c93fb04804a64d0007c1c075
})();