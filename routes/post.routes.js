import express from "express"
import { protectRoute } from "../middleware/protectRoute.js"
import { createPost, deletePost, commentOnPost, likeUnlikePost, getAllPosts, getLikedPosts, getFollowingPosts, getUserPosts, bookMarkPost } from "../controllers/post.controller.js"

const router = express.Router()

router.post("/create", protectRoute, createPost)
router.delete("/:id", protectRoute, deletePost)
router.post("/comment/:id", protectRoute, commentOnPost)
router.post("/like/:id", protectRoute, likeUnlikePost)
router.get("/all", protectRoute, getAllPosts)
router.get("/likes/:id", protectRoute, getLikedPosts)
router.get("/following", protectRoute, getFollowingPosts)
router.get("/user/:username", protectRoute, getUserPosts)
router.post("/bookmark/:id", protectRoute, bookMarkPost)

export default router
