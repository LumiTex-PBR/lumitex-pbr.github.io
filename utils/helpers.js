// Utility functions for the application

/**
 * Get relative time string from a date
 * @param {Date} date - The date to convert
 * @returns {string} Relative time string
 */
function getRelativeTime(date) {
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);
  
  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`;
  return `${Math.floor(diffInSeconds / 31536000)} years ago`;
}

/**
 * Check if a date is reasonable (after 2024 and not in the future)
 * @param {Date} date - The date to check
 * @returns {boolean} True if the date is reasonable
 */
function isReasonableDate(date) {
  const minTime = new Date('2024-01-01');
  const maxTime = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours from now
  return date > minTime && date < maxTime;
}

/**
 * Safely parse JSON with fallback
 * @param {string} jsonString - JSON string to parse
 * @param {*} fallback - Fallback value if parsing fails
 * @returns {*} Parsed object or fallback
 */
function safeJsonParse(jsonString, fallback = null) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    return fallback;
  }
}

/**
 * Create commit info object
 * @param {string} hash - Commit hash
 * @param {string} message - Commit message
 * @param {string} author - Commit author
 * @param {string} ref - Git reference
 * @param {string} source - Source of the commit info
 * @returns {Object} Commit info object
 */
function createCommitInfo(hash, message = '', author = '', ref = '', source = 'unknown') {
  return {
    hash,
    shortHash: hash.length > 7 ? hash.substring(0, 7) : hash,
    message,
    author,
    ref,
    source
  };
}

module.exports = {
  getRelativeTime,
  isReasonableDate,
  safeJsonParse,
  createCommitInfo
}; 