const redis = require('../config/redis')

const setMessage = async (key, value) => {
  try {
    await redis.set(key, value)
    return {
      success: true,
    }
  } catch (err) {
    console.error("Error connecting to Redis:", err)
    return {
      success: false,
    }
  }
}

const getMessage = async (key) => {
  try {
    const result = await redis.get(key)
    return {
      success: true,
      result: result,
    }
  } catch (err) {
    console.error("Error getting value from Redis:", err)
    return {
      success: false,
    }
  }
}

module.exports = {
  getMessage,
  setMessage
}
