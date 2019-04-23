<template>
    <div class="container">
        <header class="well">
            <nav>
                <ul>
                    <li>Stock Trader</li>
                    <li>Portfolio</li>
                    <li>Stocks</li>
                </ul>
            </nav>
            <div class="utiles">
                <ul>
                    <li>End Day</li>
                    <li>Save & Load</li>
                    <li>Funds: $0</li>
                </ul>
            </div>
        </header>
        <div class="content">
            <!-- <app-home></app-home> -->
        </div>
    </div>
</template>

<script>
    // import Home from './view/Home';
    // import Portfolio from './components/Portfolio/Portfolio';
    // import Stocks from './components/Stocks/Stocks';
    export default {
        // components: {
        //     appHome : Home,
        //     appStocks: Stocks,
        //     appPortfolio: Portfolio
        // }
    }
</script>

<style>
html,
body {
    height: 100%;
    width: 100%;
}
body {
    font-size: 14px;
    color: #444;
}
ul {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: 0;
    padding: 0;
}
li {
    list-style: none;
    cursor: pointer;
}
header {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
}
nav {
    width: 30%;
    display: flex;
    align-items: center;
}
nav ul {
    width: 100%;
}
nav ul li:first-child {
    font-size: 1.2em;
}
.utiles {
    width: 30%;
}

</style>
