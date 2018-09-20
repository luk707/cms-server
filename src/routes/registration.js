import { Router } from "express";
import User from "~/models/user";
import formatErrors from "~/util/format-errors";

const router = Router();

router.post("/", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.validate();
  } catch ({ errors }) {
    res.status(400).json(formatErrors(errors));
    return;
  }
  try {
    const result = await user.save();
    res.json(result);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

export default router;
