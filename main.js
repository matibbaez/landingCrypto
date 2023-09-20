fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano%2Cdogecoin%2Ctether%2Clitecoin%2Csolana%2Cpolkadot&vs_currencies=usd&include_24hr_change=true').then(res => res.json()).then(json => {
    const container = document.querySelector('.container');
    const coinsOrder = ['bitcoin', 'ethereum', 'solana', 'cardano', 'dogecoin', 'tether', 'litecoin', 'polkadot'];

    for (let coin of coinsOrder) {
        const coinInfo = json[coin];
        const price = coinInfo.usd;
        const change = coinInfo.usd_24h_change.toFixed(5);

        container.innerHTML += `
            <div class="coin ${change < 0 ? 'falling' : 'rising'}">
                <div class="coin-logo">
                    <img src="/assets/${coin}.png">
                </div>
                <div class="coin-name">
                    <h3>${coin}</h3>
                    <span>/USD</span>
                </div>
                <div class="coin-price">
                    <span class="price">$${price}</span>
                    <span class="change">${change}</span>
                </div>
            </div>
        `;
    }
})