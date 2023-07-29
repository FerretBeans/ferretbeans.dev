setInterval(() => {
    // DD/MM/YYYY
    const time = new Date();
    const dd = time.toDateString();
    document.getElementById("dd").innerHTML = dd;

    // HH/MM/SS (creates the time)
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    document.getElementById("time").textContent = ("0" + hour).substr(-2) + ":" + ("0" + minute).substr(-2) + ":" + ("0" + second).substr(-2);

    // DAY - MONTH (MM/YYYY)
    const day = time.getDate();
    const month = time.getMonth();
    const year = time.getFullYear();
    document.getElementById("date").innerHTML = day + "/" + month + "/" + year;
}, 1);