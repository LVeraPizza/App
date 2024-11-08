window.onload = function () {
    const statusBar = document.getElementById("status-bar");
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();

    const isOpen = (
        (currentDay === 5 || currentDay === 6 || currentDay === 0) &&
        (currentHour >= 19 && currentHour < 23)
    );

    // Limpiar el valor previo de localStorage para forzar actualización
    localStorage.removeItem("estadoPedido");

    // Ahora calculamos el estado y lo actualizamos
    if (isOpen) {
        statusBar.textContent = "ABIERTO";
        statusBar.style.backgroundColor = "green";
        localStorage.setItem("estadoPedido", "abierto");
    } else {
        statusBar.textContent = "CERRADO";
        statusBar.style.backgroundColor = "red";
        localStorage.setItem("estadoPedido", "cerrado");
    }
};
