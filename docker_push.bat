@echo off
setlocal

if "%REGISTRY_PASSWORD%"=="" (
    echo ERROR: REGISTRY_PASSWORD is not set.
    echo Please set REGISTRY_PASSWORD before running this script.
    echo Example:  set REGISTRY_PASSWORD=your_password_here
    exit /b 1
)

set REGISTRY_USER=willsofts
set IMAGE_NAME=willsofts/cloranc
set APP_NAME=willsofts/cloranc
set APP_VERSION=1.0.11

echo Logging in to docker registry...
docker login --username %REGISTRY_USER% --password %REGISTRY_PASSWORD%
if errorlevel 1 (
    echo ERROR: Docker login failed.
    exit /b 1
)

echo Tagging image...
docker tag %IMAGE_NAME% %APP_NAME%:%APP_VERSION%
docker tag %IMAGE_NAME% %APP_NAME%:latest

echo Pushing image...
docker push %APP_NAME%:%APP_VERSION%
docker push %APP_NAME%:latest

echo Done.

endlocal
