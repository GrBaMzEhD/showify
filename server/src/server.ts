import express from "express";
import helmet from "helmet";

import { AddressInfo } from "net";

import { Server } from "http";

export let server: Server;

export default () => {
	const app = express();

	app.use(helmet());
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json({ limit: "16mb" }));

	server = app.listen(process.env.PORT || 3000, () => {
		const { port, address } = <AddressInfo>server.address();
		console.log(`Server running at ${address} on port ${port}`);
	})

	return { server, app };
}
