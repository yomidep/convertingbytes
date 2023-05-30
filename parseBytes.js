const ethers = require("ethers");

async function parseByte(args) {
    const bytes = args[0];
    const name = ethers.utils.parseBytes32String(bytes);
    console.log("bytes: ",name);
}

createByte(process.argv.slice(2));
