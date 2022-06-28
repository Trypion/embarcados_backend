const MongoClient = require("./mongodb");

const factory = async (config) => {
  const mongodbConnection = await MongoClient.connect(config.mongodb);

  return { mongodbConnection };
};

module.exports = { factory };
