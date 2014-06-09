#!/usr/bin/make

.PHONY: test
test:
	./node_modules/mocha/bin/mocha --recursive -R spec test/

.PHONY: delint
delint:
	jshint lib/ test/
