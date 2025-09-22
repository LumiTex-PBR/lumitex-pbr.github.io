#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const versionFile = path.join(__dirname, '../version.json');
const currentTime = new Date().toISOString();

const versionData = {
  version: "1.0.0",
  lastUpdate: currentTime,
  deploymentDate: currentTime,
  description: "LumiTex website deployment tracking"
};

// Write version.json (for static access)
try {
  fs.writeFileSync(versionFile, JSON.stringify(versionData, null, 2));
  console.log(`Version updated: ${currentTime}`);
} catch (error) {
  console.error('Error updating version:', error);
  process.exit(1);
} 