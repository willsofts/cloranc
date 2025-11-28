#!/bin/bash
set -e  # ถ้ามีคำสั่งไหน error จะหยุด script ทันที

# ตรวจสอบว่า NPM_TOKEN ถูกตั้งค่าไว้หรือไม่
if [ -z "$NPM_TOKEN" ]; then
  echo "ERROR: NPM_TOKEN environment variable is not set."
  exit 1
fi

# สร้างไฟล์ .npmrc_secret
echo "@willsofts:registry=https://npm.pkg.github.com" > .npmrc_secret
echo "//npm.pkg.github.com/:_authToken=${NPM_TOKEN}" >> .npmrc_secret

echo "copy default_aiven.json to default.json"
cp -f ./config/default_aiven.json ./config/default.json

echo "start build docker image"
docker build --no-cache --secret id=npmrc,src=.npmrc_secret -t willsofts/cloranc .

echo "copy default_localhost.json to default.json"
cp -f ./config/default_localhost.json ./config/default.json

echo "DONE."
