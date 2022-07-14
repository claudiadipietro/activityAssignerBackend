all:
	@make install
	@make run

install:
	@npm install

run:
	@npm run start

test:
	@node --experimental-vm-modules node_modules/jest/bin/jest.js