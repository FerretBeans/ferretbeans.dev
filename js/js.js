//literally just to get my discord pfp

function pfp() {
    fetch("https://cors-dun.vercel.app/discord?userId=870628551823609926")
    .then(response => response.json())
    .then(data => {
        console.log(data);  // The data returned from Discord API
    });
}

pfp();
