/**
 * pairing.js - Util for generating and verifying pairing codes
 * SKY-MD | By King Airsee
 */

const PAIR_CODES = {}; // { '123456': timestamp }

/**
 * Generate a 6-digit pairing code and store with timestamp
 */
function generatePairingCode() {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  PAIR_CODES[code] = Date.now();
  return code;
}

/**
 * Verify if pairing code is valid (within 5 minutes)
 */
function verifyPairingCode(code) {
  const now = Date.now();
  if (PAIR_CODES[code]) {
    const timeElapsed = now - PAIR_CODES[code];
    if (timeElapsed <= 5 * 60 * 1000) {
      delete PAIR_CODES[code]; // remove after use
      return true;
    } else {
      delete PAIR_CODES[code]; // expired
    }
  }
  return false;
}

module.exports = {
  generatePairingCode,
  verifyPairingCode
};
