window.onload = function () {
    const statusBar = document.getElementById("status-bar");
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();

    const isOpen = (
        (currentDay === 5 || currentDay === 6 || currentDay === 0) &&
        (currentHour >= 12 && currentHour < 23)
    );

    // Verificar el estado guardado en sessionStorage
    const savedStatus = sessionStorage.getItem("estadoPedido");

    if (savedStatus === "abierto") {
        statusBar.textContent = "ABIERTO";
        statusBar.style.backgroundColor = "green";
    } else if (savedStatus === "cerrado") {
        statusBar.textContent = "CERRADO";
        statusBar.style.backgroundColor = "red";
    } else {
        // Si no hay estado guardado, calculamos el estado
        if (isOpen) {
            statusBar.textContent = "ABIERTO";
            statusBar.style.backgroundColor = "green";
            sessionStorage.setItem("estadoPedido", "abierto");
        } else {
            statusBar.textContent = "CERRADO";
            statusBar.style.backgroundColor = "red";
            sessionStorage.setItem("estadoPedido", "cerrado");
        }
    }
};
