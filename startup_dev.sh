#!/bin/bash

if [ ! -e localhost.pem ] || [ ! -e  localhost-key.pem ]
then
	mkcert localhost
fi

npx local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem &
nuxi dev --no-clear