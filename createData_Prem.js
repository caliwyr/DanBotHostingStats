const axios = require("axios");

global.gamingPREM = [27]; // Gaming nodes
global.botswebdbPREM = [26, 28, 29, 31]; // Bots, Websites and Databases nodes
global.storagePREM = [13]; // Storage nodes

/*
Donator Nodes as followed:
Dono-01  : 26
Dono-02  : 27
Dono-03  : 28
Dono-04  : 29
Dono-05  : 31
*/

let data = (serverName, userID) => {
    let toReturn = {
        nginx: null,
        nodejs: null,
        python: null,
        aio: null,
        storage: null,
        java: null,
        paper: null,
        forge: null,
        altv: null,
        multitheftauto: null,
        samp: null,
        bedrock: null,
        pocketminemp: null,
        gmod: null,
        csgo: null,
        arkse: null,
        ts3: null,
        mumble: null,
        rust: null,
        mongodb: null,
        redis: null,
        postgres: null,
        daystodie: null,
        arma: null,
        assettocorsa: null,
        avorion: null,
        barotrauma: null,
        waterfall: null,
        spigot: null,
        sharex: null,
        codeserver: null,
        gitea: null,
        haste: null,
        uptimekuma: null,
        rustc: null,
        redbot: null,
        grafana: null
    };

    for (let [name, filled] of Object.entries(createListPrem)) {
        toReturn[name] = filled(serverName, userID);
    }
    return toReturn;
};

let createServer = (data) => {
    return axios({
        url: config.Pterodactyl.hosturl + "/api/application/servers",
        method: "POST",
        followRedirect: true,
        maxRedirects: 5,
        headers: {
            Authorization: "Bearer " + config.Pterodactyl.apikey,
            "Content-Type": "application/json",
            Accept: "Application/vnd.pterodactyl.v1+json",
        },
        data: data,
    });
};

module.exports = {
    createParams: data,
    createServer: createServer,
};
