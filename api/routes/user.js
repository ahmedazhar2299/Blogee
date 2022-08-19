import e, { Router } from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
const userRoute = Router();

userRoute.get("/", async (req, res) => {
  try {
    const id = req.query.id;
    const username = req.query.username;
    const user = id
      ? await User.findOne({ _id: id })
      : await User.findOne({ username: username });
    const { password, createdAt, updatedAt, ...remaining } = user._doc;
    res.status(200).json(remaining);
  } catch (err) {
    res.status(500).json(err);
  }
});

userRoute.put("/:id/follow", async (req, res) => {
  const currentID = req.body.id;
  const toFollowID = req.params.id;
  if (currentID !== toFollowID) {
    try {
      const currentUser = await User.findById(currentID);
      const toFollowUser = await User.findById(toFollowID);
      if (!currentUser.following.includes(toFollowID)) {
        await currentUser.updateOne({ $push: { following: toFollowID } });
        await toFollowUser.updateOne({ $push: { followers: currentID } });
        res.status(200).json("User has been followed");
      } else {
        res.status(403).json("You have already followed this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You cant follow yourself");
  }
});


userRoute.put("/:id/unfollow", async (req, res) => {
    const currentID = req.body.id;
    const toFollowID = req.params.id;
    if (currentID !== toFollowID) {
      try {
        const currentUser = await User.findById(currentID);
        const toFollowUser = await User.findById(toFollowID);
        if (currentUser.following.includes(toFollowID)) {
          await currentUser.updateOne({ $pull: { following: toFollowID } });
          await toFollowUser.updateOne({ $pull: { followers: currentID } });
          res.status(200).json("User has been unfollowed");
        } else {
          res.status(403).json("You are not following this user");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You cant unfollow yourself");
    }
  });

export default userRoute;
