
let blockchain = [];
function addBlock() {
    const previousHash = blockchain.length > 0 ? blockchain[blockchain.length - 1].hash : "0";
    const newBlock = {
        index: blockchain.length,
        timestamp: new Date().toISOString(),
        data: "Block #" + blockchain.length,
        previousHash: previousHash,
        hash: Math.random().toString(36).substring(2, 15)
    };
    blockchain.push(newBlock);
    renderBlockchain();
}

function renderBlockchain() {
    const container = document.getElementById("blockchain");
    container.innerHTML = "";
    blockchain.forEach(block => {
        const blockDiv = document.createElement("div");
        blockDiv.className = "block";
        blockDiv.innerHTML = `<strong>Index:</strong> ${block.index}<br>
                              <strong>Time:</strong> ${block.timestamp}<br>
                              <strong>Data:</strong> ${block.data}<br>
                              <strong>Prev Hash:</strong> ${block.previousHash}<br>
                              <strong>Hash:</strong> ${block.hash}`;
        container.appendChild(blockDiv);
    });
}
