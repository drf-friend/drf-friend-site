#!/bin/bash

# Set your Netlify site name
NETLIFY_SITE="drf-friend"

# Set the path to your build folder
BUILD_FOLDER="build"

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
  echo "Netlify CLI is not installed. Please install it: https://docs.netlify.com/cli/get-started/"
  exit 1
fi

# Log in to Netlify (if not already logged in)
netlify status || netlify login

# Change to the build folder
cd "$BUILD_FOLDER" || exit

# Deploy the build to Netlify
netlify deploy --prod

# Open the deployed site in the default browser (optional)
netlify open:site

echo "Build deployed successfully!"
