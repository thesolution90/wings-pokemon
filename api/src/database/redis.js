const redis = require('./connection')

const setInformation = async (key, value) => {
  try {
    await redis.set(key, value);
    return {
      redisSuccess: true,
    };
  } catch (err) {
    console.error("Error connecting to Redis:", err);
    return {
      redisSuccess: false,
    };
  }
}

const getInformation = async (key) => {
  try {
    const result = await redis.get(key);
    console.log(result)
    return {
      redisSuccess: true,
      result: result,
    };
  } catch (err) {
    console.error("Error getting value from Redis:", err);
    return {
      redisSuccess: false,
    };
  }
}

module.exports = {
  getInformation,
  setInformation
}
