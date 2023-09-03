// import { db } from "../db.js";
// import jwt from "jsonwebtoken";
// export const updateUser = (req, res) => {
//     const token = req.cookies.access_token;
//     if (!token) return res.status(401).json("Not authenticated!");
  
//     jwt.verify(token, "jwtkey", (err, userInfo) => {
//       if (err) return res.status(403).json("Token is not valid!");
  
//       const postId = req.params.id;
//       const q =
//         "UPDATE posts SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `uid` = ?";
  
//       const values = [
//           req.body.title, 
//           req.body.desc, 
//           req.body.img, 
//           req.body.cat
//       ];
  
//       db.query(q, [...values, postId, userInfo.id], (err, data) => {
//         if (err) return res.status(500).json(err);
//         return res.json("Post has been updated.");
//       });
//     });
//   };


import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const updateUser = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const userId = userInfo.id;
    const q = "UPDATE users SET img = ? WHERE id = ?";

    const values = [req.body.img, userId];

    db.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Profile image has been updated.");
    });
  });
};