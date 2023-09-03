// import React, { useEffect, useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { AuthContext } from "../context/authContext";

// const User = () => {
//   const { currentUser } = useContext(AuthContext);
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`/posts?userId=${currentUser.id}`);
//         setPosts(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     if (currentUser) {
//       fetchData();
//     }
//   }, [currentUser]);

//   const getText = (html) => {
//     const doc = new DOMParser().parseFromString(html, "text/html");
//     return doc.body.textContent;
//   };

//   return (
//     <div className="home">
//       <div className="posts">
//         {posts.map((post) => (
//           <div className="post" key={post.id}>
//             <div className="img">
//               <img className="img1" src={`../upload/${post.img}`} alt="" />
//             </div>
//             <div className="content">
//               <h1 className="h1">{post.title}</h1>
//               <p className="p">{getText(post.desc)}</p>
//               <Link className="link" to={`/post/${post.id}`}>
//                 <button className="button">Read More</button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default User;
// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import axios from "axios";

// const User = () => {
//   const [posts, setPosts] = useState([]);

//   const cat = useLocation().search

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`/posts${cat}`);
//         setPosts(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, [cat]);

//   const getText = (html) =>{
//     const doc = new DOMParser().parseFromString(html, "text/html")
//     return doc.body.textContent
//   }

//   // const posts = [
//   //   {
//   //     id: 1,
//   //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//   //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//   //     img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   //   },
//   //   {
//   //     id: 2,
//   //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//   //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//   //     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   //   },
//   //   {
//   //     id: 3,
//   //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//   //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//   //     img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   //   },
//   //   {
//   //     id: 4,
//   //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//   //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//   //     img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   //   },
//   // ];
//   return (

//     <div className="home">
//       <div className="posts">
//         {posts.map((post) => (
//           <div className="post" key={post.id}>
//             <div className="img">
//               <img className="img1" src={`../upload/${post.img}`} alt="" />
//             </div>
//             <div className="content">
              
//                 <h1 className='h1'>{post.title}</h1>
              
//               <p className='p'>{getText(post.desc)}</p>
//               <Link className="link" to={`/post/${post.id}`}><button className='button'>Read More</button></Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default User

// import React, { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";
// import moment from "moment";

// const Write = () => {
//   const state = useLocation().state;
//   const [value, setValue] = useState(state?.title || "");
//   const [title, setTitle] = useState(state?.desc || "");
//   const [file, setFile] = useState(null);
//   const [cat, setCat] = useState(state?.cat || "");
//   const navigate = useNavigate()

//   const upload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("file", file);
//       const res = await axios.post("/upload", formData);
//       return res.data;
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();
//     const imgUrl = await upload();

//     try {
//       state
//         ? await axios.put(`/posts/${state.id}`, {
//             title,
//             desc: value,
//             cat,
//             img: file ? imgUrl : "",
//           })
//         : await axios.post(`/posts/`, {
//             title,
//             desc: value,
//             cat,
//             img: file ? imgUrl : "",
//             date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
//           });
//           navigate("/")
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className='add'>
//       <div className="content">
//         <input className='input'value={title} type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)}/>
//         <div className="editorContainer">
//         <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
//         </div>
//       </div>
//       <div className="menu">
//         <div className="item">
//           <h1 className='h1'>Publish</h1>
//           <span>
//             <b>Status:</b> Draft
//           </span>
//           <span>
//             <b>Visibility:</b> Public
//           </span>
//           <input style= {{display:"none"}} type="file" id='file' name="" onChange={(e) => setFile(e.target.files[0])}/>
//           <label className='file' htmlFor="file">Upload Image</label>
//           <div className="buttons">
//             <button>Save as a draft</button>
//             <button onClick={handleClick}>Publish</button>
//           </div>
//         </div>
//         <div className="item">
//           <h1 className='h1'>Category</h1>
//           <div className="cat">
//           <input type="radio" checked={cat === "general"} name='cat' value="general" id='general' onChange={(e) => setCat(e.target.value)}/>
//           <label htmlFor="general">General</label>
//           </div>
//           <div className="cat">
//           <input type="radio" checked={cat === "events"} name='cat' value="events" id='events' onChange={(e) => setCat(e.target.value)}/>
//           <label htmlFor="events">Events</label>
//           </div>
//           <div className="cat">
//           <input type="radio" checked={cat === "technology"} name='cat' value="technology" id='technology' onChange={(e) => setCat(e.target.value)}/>
//           <label htmlFor="technology">Technology</label>
//           </div>
//           <div className="cat">
//           <input type="radio" checked={cat === "sports"} name='cat' value="sports" id='sports' onChange={(e) => setCat(e.target.value)}/>
//           <label htmlFor="sports">Sports</label>
//           </div>
//           <div className="cat">
//           <input type="radio" checked={cat === "news"} name='cat' value="news" id='news' onChange={(e) => setCat(e.target.value)}/>
//           <label htmlFor="news">News</label>
//           </div>
//           <div className="cat">
//           <input type="radio" checked={cat === "food"} name='cat' value="food" id='food' onChange={(e) => setCat(e.target.value)}/>
//           <label htmlFor="food">Food</label>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Write;
// _____________________________________________________________________________________________






// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import axios from "axios";
// import Setting from "../components/Setting";

// const User = () => {
//   const [posts, setPosts] = useState([]);

//   const cat = useLocation().search

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`/posts${cat}`);
//         setPosts(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, [cat]);

//   const getText = (html) =>{
//     const doc = new DOMParser().parseFromString(html, "text/html")
//     return doc.body.textContent
//   }

//   return (
//     <div className='user-page'>
//         <div className="user-post">
//         {posts.map((post) => (
//           <div className="post" key={post.id}>
//             <div className="img">
//               <img className="img1" src={`../upload/${post.img}`} alt="" />
//             </div>
//             <div className="content">
              
//                 <h1 className='h1'>{post.title}</h1>
              
//               <p className='p'>{getText(post.desc)}</p>
//               <Link className="link" to={`/post/${post.id}`}><button className='button'>Read More</button></Link>
//             </div>
//           </div>
//         ))}
//         </div>
        

//     <Setting />
//   </div>
//   )
// }

// export default User


// import React, { useEffect, useState, useContext } from "react";
// import { Link, useLocation } from "react-router-dom";
// import axios from "axios";
// import Setting from "../components/Setting";
// import { AuthContext } from "../context/authContext";

// const User = () => {
//   const [posts, setPosts] = useState([]);
//   const cat = useLocation().search;
//   const { currentUser, logout } = useContext(AuthContext);
//   const userId = currentUser?.id; // Replace with the specific user ID

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`/posts${cat}`, {
//           params: { userId: userId },
//         });
//         setPosts(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, [cat, userId]);

//   const getText = (html) => {
//     const doc = new DOMParser().parseFromString(html, "text/html");
//     return doc.body.textContent;
//   };

//   return (
//     <div className="user-page">
//       <div className="user-post">
//         {posts.map((post) => (
//           <div className="post" key={post.id}>
//             <div className="img">
//               <img className="img1" src={`../upload/${post.img}`} alt="" />
//             </div>
//             <div className="content">
//               <h1 className="h1">{post.title}</h1>
//               <p className="p">{getText(post.desc)}</p>
//               <Link className="link" to={`/post/${post.id}`}>
//                 <button className="button">Read More</button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Setting />
//     </div>
//   );
// };

// export default User;



import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Setting from "../components/Setting";
import { AuthContext } from "../context/authContext";

const User = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser?.id; // Replace with the specific user ID

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/user`, {
          params: { userId: userId },
        });
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat, userId]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="user-page">
      <div className="user-post">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img className="img1" src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <h1 className="h1">{post.title}</h1>
              <p className="p">{getText(post.desc)}</p>
              <Link className="link" to={`/post/${post.id}`}>
                <button className="button">Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Setting />
    </div>
  );
};

export default User;