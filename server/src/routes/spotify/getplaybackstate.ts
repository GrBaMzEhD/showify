import { Router } from "express";

const router = Router();

router.get("/playbackstate", function (req, res, next) {
	res.sendStatus(201);
})
