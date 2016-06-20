install:
	npm install

clean:
	rm -rf node_modules
	rm -rf client/public/*

installEslint:
	npm install -g eslint

dev-client:
	./node_modules/.bin/gulp

dev-server:
	./node_modules/.bin/babel-node server/app/index.js
