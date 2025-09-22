#!/bin/bash

# LumiTex Website Startup Script

echo "🚀 Starting LumiTex Website..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2)
MAJOR_VERSION=$(echo $NODE_VERSION | cut -d'.' -f1)

if [ "$MAJOR_VERSION" -lt 16 ]; then
    echo "❌ Node.js version $NODE_VERSION is too old. Please install Node.js 16 or higher."
    exit 1
fi

echo "✅ Node.js version: $NODE_VERSION"

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found. Please run this script from the project root directory."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies."
        exit 1
    fi
else
    echo "✅ Dependencies already installed"
fi

# Set environment variables
export NODE_ENV=${NODE_ENV:-development}
export PORT=${PORT:-3000}

echo "🌍 Environment: $NODE_ENV"
echo "🔌 Port: $PORT"

# Start the server
if [ "$NODE_ENV" = "development" ]; then
    echo "🔧 Starting development server with nodemon..."
    npm run dev
else
    echo "🚀 Starting production server..."
    npm start
fi 