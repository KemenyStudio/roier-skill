#!/bin/bash

# Roier SEO Skill - Installation Script
# Installs dependencies for the audit scripts

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "📦 Installing Roier SEO Skill dependencies..."

cd "$SCRIPT_DIR"

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is required but not installed."
    echo "   Install it from: https://nodejs.org"
    exit 1
fi

# Check Node version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "⚠️  Warning: Node.js 18+ is recommended. You have v$(node -v)"
fi

# Install npm dependencies
if [ -f "package.json" ]; then
    npm install --silent
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ package.json not found in $SCRIPT_DIR"
    exit 1
fi

# Make scripts executable
chmod +x audit.js audit-api.js 2>/dev/null || true

echo ""
echo "🎉 Roier SEO Skill is ready!"
echo ""
echo "Usage:"
echo "  node $SCRIPT_DIR/audit.js <URL>         # Local Lighthouse (needs Chrome)"
echo "  node $SCRIPT_DIR/audit-api.js <URL>     # PageSpeed API (public URLs only)"
