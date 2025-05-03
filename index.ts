const noblox = require("noblox.js")

const args = process.argv;

async function getId(username) {
  try {
    const userId = await noblox.getIdFromUsername(username);
    return userId;
  } catch (error) {
    console.error(`Error getting ID for username ${username}:`, error);
    return null; 
  }
}

const userId = await getId(args[2]);
const wearingAssets = await noblox.currentlyWearing(userId)

console.log(`ID: ${getId(args[2])}`);

let array = wearingAssets.assetIds;

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

array.forEach(element => {
   process.stdout.write(`!hat ${element} | `);
});
process.stdout.write(`\n`)
