const redis = require('../config/redis')

// In dieser Datei sind alle Funktionen die sich mit dem
// Schreiben und Lesen von Daten mit der Datenbank

const setMessage = async (key, value) => {
  try {
    // Schreiben ein eine Datenbank
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
    // Lesen von der Datenbank
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
