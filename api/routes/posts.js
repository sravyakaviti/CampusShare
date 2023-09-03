// import express from "express";
// import {
//     addPost,
//     deletePost,
//     getPost,
//     getPosts,
//     getPostsByUser,
//     getPostByUser,
//     updatePost,
//   } from "../controllers/post.js";
  
//   const router = express.Router();
  
//   router.get("/", getPosts);
//   router.get("/:id", getPost);
//   router.get("/", getPostsByUser);
//   router.get("/:Id", getPostByUser);
//   router.post("/", addPost);
//   router.delete("/:id", deletePost);
//   router.put("/:id", updatePost);
  
//   export default router;


import express from "express";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  getPostsByUser,
  getPostByUser,
  updatePost,
} from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/user", getPostsByUser); // Update the route path
router.get("/:id", getPost);
router.get("/user/:id", getPostByUser); // Update the route path
router.post("/", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

export default router;