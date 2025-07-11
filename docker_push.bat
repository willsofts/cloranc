set REGISTRY_USER=willsofts
set IMAGE_NAME=willsofts/cloranc
set APP_NAME=willsofts/cloranc
set APP_VERSION=1.0.6
docker login --username %REGISTRY_USER% --password %REGISTRY_PASSWORD%
docker tag %IMAGE_NAME% %APP_NAME%:%APP_VERSION%
docker tag %IMAGE_NAME% %APP_NAME%:latest
docker push %APP_NAME%:%APP_VERSION%
docker push %APP_NAME%:latest
