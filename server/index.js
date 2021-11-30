const { CallbackService } = require("vk-io");
const {
  DirectAuthorization,
  officialAppCredentials,
} = require("@vk-io/authorization");

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

  console.log("Token:", response.token);
  console.log("Expires:", response.expires);

  console.log("Email:", response.email);
  console.log("User ID:", response.userId);
}

run().catch(console.error);
