#!/bin/bash
set -e

# Config
REGISTRY_USER="willsofts"
IMAGE_NAME="willsofts/cloranc"
APP_NAME="willsofts/cloranc"
APP_VERSION="1.0.10"

# ต้องมี ENV: REGISTRY_PASSWORD
if [ -z "${REGISTRY_PASSWORD}" ]; then
  echo "ERROR: REGISTRY_PASSWORD is not set."
  echo "Please export REGISTRY_PASSWORD first:"
  echo "  export REGISTRY_PASSWORD=yourpassword"
  exit 1
fi

echo "Logging in to Docker registry..."
echo "${REGISTRY_PASSWORD}" | docker login --username "${REGISTRY_USER}" --password-stdin

echo "Tagging images..."
docker tag "${IMAGE_NAME}" "${APP_NAME}:${APP_VERSION}"
docker tag "${IMAGE_NAME}" "${APP_NAME}:latest"

echo "Pushing images to registry..."
docker push "${APP_NAME}:${APP_VERSION}"
docker push "${APP_NAME}:latest"

echo "Done!"
