const { CallbackService, VK } = require("vk-io");
const {
  DirectAuthorization,
  officialAppCredentials,
} = require("@vk-io/authorization");
require('dotenv').config();

const callbackService = new CallbackService();

const direct = new DirectAuthorization({
  callbackService,
  scope: "all",
  ...officialAppCredentials.android,
  login: process.env.LOGIN,
  password: process.env.PASSWORD,
});

async function run() {
  const response = await direct.run();

  const vk = new VK({
    token: response.token,
  });

  const users = await vk.api.users.get({
    user_ids: 1,
  });
  console.log(users);
}

run().catch(console.error);
