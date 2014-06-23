
start:
	@DEBUG=xinput-ui:* node server.js

test:
	@$$(npm bin)/mocha --recursive -r should

test-debug:
	@DEBUG=xinput-ui:* $$(npm bin)/mocha --recursive -r should

.PHONY: start test test-debug
