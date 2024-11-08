window.onload = function () {
    const statusBar = document.getElementById("status-bar");
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();

    const isOpen = (
        (currentDay === 5 || currentDay === 6 || currentDay === 0) &&
        (currentHour >= 12 && currentHour < 23)
    );

    // Comprobar si el estado en localStorage está actualizado
    const savedStatus = localStorage.getItem("estadoPedido");

    if (!savedStatus) {
        // Si no existe en localStorage, calculamos el estado
        if (isOpen) {
            statusBar.textContent = "ABIERTO";
            statusBar.style.backgroundColor = "green";
            localStorage.setItem("estadoPedido", "abierto");
        } else {
            statusBar.textContent = "CERRADO";
            statusBar.style.backgroundColor = "red";
            localStorage.setItem("estadoPedido", "cerrado");
        }
    } else {
        // Si ya está en localStorage, usamos ese valor
        if (savedStatus === "abierto") {
            statusBar.textContent = "ABIERTO";
            statusBar.style.backgroundColor = "green";
        } else {
            statusBar.textContent = "CERRADO";
            statusBar.style.backgroundColor = "red";
        }
    }

    // Forzar la recarga de la página si el estado no está actualizado
    if (localStorage.getItem("estadoPedido") !== savedStatus) {
        localStorage.removeItem("estadoPedido");
        location.reload();  // Esto recargará la página forzosamente
    }
};
