const ethers = require("ethers");

async function createByte(args) {
    const name = args[0];
    const bytes = ethers.utils.formatBytes32String(name);
    console.log("name: ",bytes);
}

createByte(process.argv.slice(2));