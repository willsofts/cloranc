@echo off
setlocal

if "%NPM_TOKEN%"=="" (
    echo ERROR: NPM_TOKEN is not set.
    echo Please set NPM_TOKEN before running this script.
    echo Example:  set NPM_TOKEN=your_token_here
    exit /b 1
)

echo @willsofts:registry=https://npm.pkg.github.com > .npmrc_secret
echo //npm.pkg.github.com/:_authToken=%NPM_TOKEN% >> .npmrc_secret

echo copy default_aiven.json to default.json
copy /Y .\config\default_aiven.json .\config\default.json

echo start build docker image
docker build --no-cache --secret id=npmrc,src=.npmrc_secret -t willsofts/cloranc .

echo copy default_localhost.json to default.json
copy /Y .\config\default_localhost.json .\config\default.json

endlocal
