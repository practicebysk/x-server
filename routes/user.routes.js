import express from "express"
import { protectRoute } from "../middleware/protectRoute.js"
import { getUserProfile, followUnfollowUser, getSuggestedUsers, updateUser, getUserfollowing, getUserfollowers } from "../controllers/user.controller.js"

const router = express.Router()

router.get("/profile/:username", protectRoute, getUserProfile)
router.post("/follow/:id", protectRoute, followUnfollowUser)
router.get("/suggested", protectRoute, getSuggestedUsers)
router.post("/update", protectRoute, updateUser)
router.get("/:user/following", protectRoute, getUserfollowing)
router.get("/:user/followers", protectRoute, getUserfollowers)

export default router
