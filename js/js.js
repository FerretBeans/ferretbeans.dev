//literally just to get my discord pfp

function pfp() {
    fetch("https://cors-dun.vercel.app/discord?userId=870628551823609926")
    .then(response => response.json())
    .then(data => {
        var meow = document.getElementById("img");
        meow.src = `https://discord.com/api/v10/users/870628551823609926/${data.avatar}.png`
    });
}

pfp();
