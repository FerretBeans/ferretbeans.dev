//literally just to get my discord pfp

function pfp() {
    const a = "MTE1MDA1NzcxMzY2MTkwNzAwNw.";
    const b = "GzJAwx.";
    const c = "9VwKOCtRhGcOiNOJ0o2_MXjeFmr_z3wGh4lLgw";

    // Use a CORS proxy service
    const corsProxy = "https://cors-anywhere.herokuapp.com/";

    fetch(corsProxy + "https://discord.com/api/v10/users/870628551823609926", {
        method: "GET",
        headers: {
            "Authorization": `Bot ${a + b + c}`
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

pfp();