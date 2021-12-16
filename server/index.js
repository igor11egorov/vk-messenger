const express = require("express");
const fs = require("fs");

const { CallbackService, VK } = require("vk-io");
const {
  DirectAuthorization,
  officialAppCredentials,
} = require("@vk-io/authorization");
require("dotenv").config();

const callbackService = new CallbackService();

const direct = new DirectAuthorization({
  callbackService,
  scope: "all",
  ...officialAppCredentials.android,
  login: process.env.LOGIN,
  password: process.env.PASSWORD,
});

let token = null;

async function vkApi() {
  if (!token) {
    const response = await direct.run();
    token = response.token;
  }
  return new VK({
    token: token,
  }).api;
}

const app = express();
const jsonParser = express.json();

app.get("/api/me", async (req, res) => {
  const api = await vkApi();
  const users = await api.users.get({ user_ids: [93545149], fields: ["photo_100", "about"] });
  res.send(users.at(0));
});

app.get("/api/friends", async (req, res) => {
  const api = await vkApi();
  const friends = await api.friends.get({ fields: ["photo_100", "about"] });
  res.send(friends);
});

app.get("/api/messages", async (req, res) => {
  const api = await vkApi();
  const messages = await api.messages.getHistory({ user_id: 1273060 });
  res.send(messages);
});

// app.get("/api/friends/:id", async (req, res) => {
//   const api = await vkApi();
//   const friend = await api.friends.get({
//     fields: ["photo_100", "about"],
//     list_id: [req.params.id],
//   });
//   if (friend) res.send(friend);
//   else res.status(404).send();
// });

// app.post("/api/messages", jsonParser, async (req, res) => {
//   if (!req.body) return res.sendStatus(400);

//   const userName = req.body.name;
//   const userAge = req.body.age;
//   res.send(user);
// });

app.listen(3000, function () {
  console.log("Сервер ожидает подключения...");
});
