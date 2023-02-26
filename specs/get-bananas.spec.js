import Twit from "twit";
import dotenv from "dotenv";
dotenv.config();

const T = new Twit({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});
const tweet = async () => {
  const onFinish = (err, reply) => {
    if (err) {
      console.log("Error: ", err.message);
    } else {
      console.log("Success: ", reply);
    }
  };

  T.get(
    "search/tweets",
    { q: "banana since:2011-07-11", count: 100 },
    function (err, data, response) {
      console.log(data);
    }
  );
};

tweet();
console.log(tweet);
