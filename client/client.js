const PROTO_PATH = "../customers.proto";

const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
	keepCase: true,
	longs: String,
	enums: String,
	arrays: true
});

const serverAddress = process.env.GRPC_SERVER_ADDRESS || "grpc-server-service:3000";


const CustomerService = grpc.loadPackageDefinition(packageDefinition).CustomerService;
const client = new CustomerService(
	serverAddress,
	grpc.credentials.createInsecure()
);

module.exports = client;
