document.addEventListener('DOMContentLoaded', async () => {
    console.log("Initializing...");
    const servercount = document.getElementById('servercount');
    await new Promise(resolve => setTimeout(resolve, 1000)); // lol
    fetch('https://japi.rest/discord/v1/application/1095523301192904844')
        .then(res => {
            if (!res.ok) {
                throw new Error("Failed");
            }
            return res.json();
        })
        .then(data => {
            const count = data.data.bot.approximate_guild_count;
            console.log("Server count:", count);
            servercount.innerHTML = `Currently in <strong><a href="/invite">${count}</a></strong> servers with 33,000+ messages`;
            console.log("Done");
        })
        .catch(err => {
            console.error(err);
            servercount.innerHTML = "";
        });
});