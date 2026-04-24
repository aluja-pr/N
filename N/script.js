// Función para abrir/cerrar el panel de presupuesto
function toggleBudget() {
    document.querySelector('.budget-panel').classList.toggle('active');
    document.querySelector('.budget-overlay').classList.toggle('active');
}
const accordions = document.querySelectorAll('.accordion');

// Abrir el panel del Día 1 por defecto
accordions[0].classList.add('active');
accordions[0].nextElementSibling.style.maxHeight = accordions[0].nextElementSibling.scrollHeight + "px";

accordions.forEach(acc => {
    acc.addEventListener('click', function () {
        accordions.forEach(otherAcc => {
            if (otherAcc !== this && otherAcc.classList.contains('active')) {
                otherAcc.classList.remove('active');
                otherAcc.nextElementSibling.style.maxHeight = null;
            }
        });

        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});
