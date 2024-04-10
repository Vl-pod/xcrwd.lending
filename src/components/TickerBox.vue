<template>
    <div class="tickerbox-marquee">
      <div class="ticker-track">
        <div class="ticker-content">
          &nbsp;- Detailed feedback - Beta testing - Exploratory testing - Integration to release processes - Corner cases testing - Crowd testing around the world - A/B testing
        </div>
      </div>
      <div class="ticker-track reverse">
        <div class="ticker-content">
          &nbsp;- Web3 - Bridges - Marketplaces - NFT - Social - DEX - Wallets - Analytics - DAO - Governance - Payments - Dapp - Tools - Infrastructure - Smart Contracts - Scalability - Staking - Rollups - AI - SDK - RPC
        </div>
      </div>
    </div>
    </template>
    
    <script>
    export default {}
    </script>
    
<style scoped>
.ticker-content {
  color: black;
  font-size: 60px;
  font-family: "Kode Mono", monospace;
}

.tickerbox-marquee {
  overflow-x: hidden;
  margin-top: 5rem;
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 240px; 

  background: linear-gradient(
    45deg,
    #ee00ff,
    #ff008c,
    #00fff7,
    #00a2ff,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ee00ff
  );
  background-size: 300% 300%; 
  animation: glowing 20s linear infinite;
  /* animation: shadow-glow 20s linear infinite; */
}

.ticker-track {
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  animation: marquee 35s linear infinite;
  top: 0;
  height: 50%; /* 50% of .marquee's height */
  align-content: center;
}

.ticker-track.reverse {
  animation: marquee-reverse 35s linear infinite;
  top: 50%; /* Second row positioning */
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes marquee-reverse {
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
}

@keyframes glowing {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* @keyframes shadow-glow {
  0% {
    box-shadow: inset 0 0 10px #ee00ff, 0 0 20px #ff008c, 0 0 30px #00fff7;
  }
  33% {
    box-shadow: inset 0 0 20px #00a2ff, 0 0 30px #00ffd5, 0 0 40px #002bff;
  }
  66% {
    box-shadow: inset 0 0 30px #7a00ff, 0 0 40px #ff00c8, 0 0 50px #ee00ff;
  }
  100% {
    box-shadow: inset 0 0 10px #ee00ff, 0 0 20px #ff008c, 0 0 30px #00fff7;
  }
} */
</style>