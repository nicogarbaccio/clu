const axios = require("axios");
const { config } = require("../config");

const openai = {
  completion: (prompt) => {
    //  Call the OpenAI API
    const opts = {
      url: "https://api.openai.com/v1/completions",
      method: "post",
      data: {
        model: "text-davinci-003",
        prompt,
        max_tokens: 500,
        temperature: 0.7,
        top_p: 1,
        n: 1,
        stream: false,
      },
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
      },
    };
    console.log("Prompting...");
    return axios.request(opts);
  },
};

module.exports = { openai };
