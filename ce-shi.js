const serverIP = "your_server_ip_here";

function getOnlinePlayers(serverIP) {
    fetch(`https://api.mojang.com/user/profiles?server=${serverIP}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch online players');
            }
        })
        .then(players => {
            const playerList = players.map(player => player.name);
            console.log("当前在线玩家：", playerList);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// 调用函数来获取在线玩家列表
getOnlinePlayers(serverIP);
