//literally just to get my discord pfp
//MTMyMjA3MDk5NTQ2NDQ5MTAxOA.GqDfF5.y6wWlgOeuYiL2q6Kg-A99b4k0Pe2yIUVHM3EIE

function pfp() {
    fetch("https://discord.com/api/v10/users/938014927262711819", {
        method: "GET",
        headers: [
            "Authorization: Bot MTMyMjA3MDk5NTQ2NDQ5MTAxOA.GqDfF5.y6wWlgOeuYiL2q6Kg-A99b4k0Pe2yIUVHM3EIE"
        ]
    });
    this(res => res.json)
    this(res => console.log(res.json))
}

pfp();