const express = require('express');
const noblox = require("noblox.js");

const app = express();

app.get('/yield-results', async (req, res) => {
  const username = req.query.username;
  const userId = await getId(username);
  const wearingAssets = await noblox.currentlyWearing(userId);
  const array = wearingAssets.assetIds;
  let result = '';
  array.forEach(element => {
    result += `!hat ${element} | `;
  });
  res.send(result);
});

async function getId(username) {
  try {
    const userId = await noblox.getIdFromUsername(username);
    return userId;
  } catch (error) {
    console.error(`Error getting ID for username ${username}:`, error);
    return null; 
  }
}

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index', { title: 'Steal their look!' });
});

app.use(express.static(__dirname + '/views'));
app.listen(3000, () => {
  console.log('hosting on port 3000');
});
