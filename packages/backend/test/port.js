// Port - generate a random valid port number that has not been used yet

// Get an unused port in the user range (2000 - 10000)
const ports = [];
const limit = 1000;

const random = () => 1024 + parseInt(Math.random() * 48151, 10);

// Keep a count of how many times we tried to find a port to avoid infinite loop
const port = (i = 0) => {
	// Too many ports tried and none was available
	if (i >= limit) {
		throw new Error('Tried to find a port but none seems available');
	}

	const portValue = random();

	// If "i" is already taken try again
	if (portValue in ports) {
		return port(i + 1);
	}

	// Add it to the list of ports already being used and return it
	ports.push(portValue);
	return portValue;
};

export default port;
