setInterval(() => {
    const date = new Date();
    console.log(date.toString());
    document.getElementById("time").innerHTML = date.toString().split("GMT")[0];
}, 1);
