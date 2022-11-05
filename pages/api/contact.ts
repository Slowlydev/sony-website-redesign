import { NextApiRequest, NextApiResponse } from "next";

import clientPromise from "../../lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const client = await clientPromise;
	const db = client.db("sony");
	const collection = db.collection("contacts");

	const error = () => res.status(400).json({ message: "malformed body" });

	if (req.method === "POST") {
		const body = req.body;
		if (body.name && body.message) {
			await collection.insertOne(body);
			res.status(200).json({ message: "created sucessfully" });
		} else {
			error();
		}
	} else if (req.method === "GET") {
		const result = await collection.find({}).toArray();
		res.status(200).json(result);
	} else {
		error();
	}
}
