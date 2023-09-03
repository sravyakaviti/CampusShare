import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");
  const [uploadStatus, setUploadStatus] = useState("Upload Image"); // New state variable
  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();

    // Check if both title and file are provided
    if (!title && !file) {
      alert("Please enter a title and upload an image.");
      return;
    }
    if (!title) {
      alert("Please enter a title.");
      return;
    }
    if (!file) {
      alert("Please upload an image.");
      return;
    }

    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
          title,
          desc: value,
          cat,
          img: file ? imgUrl : "",
        })
        : await axios.post(`/posts/`, {
          title,
          desc: value,
          cat,
          img: file ? imgUrl : "",
          date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadStatus("Image Uploaded");
  };

  return (
    <div className="add">
      <div className="content">
        <input
          required
          className="input"
          value={title}
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1 className="h1">Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>

          <h1 className="h1">Category</h1>
          <div className="cat">
            <input type="radio" checked={cat === "general"} name='cat' value="general" id='general' onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="general">General</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "events"} name='cat' value="events" id='events' onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="events">Events</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "technology"} name='cat' value="technology" id='technology' onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "sports"} name='cat' value="sports" id='sports' onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="sports">Sports</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "news"} name='cat' value="news" id='news' onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="news">News</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "lost/found"} name='cat' value="lost/found" id='lost/found' onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="lost/found">Lost/Found</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "buy/sell"} name='cat' value="buy/sell" id='buy/sell' onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="buy/sell">Buy/Sell</label>
          </div>

          <div className="buttons">
            <input
              required
              style={{ display: "none" }}
              type="file"
              id="file"
              name=""
              onChange={handleFileChange}
            />
            {uploadStatus === "Upload Image" ? (
              <label className="file" htmlFor="file">
                {uploadStatus}
              </label>
            ) : (
              <span>{uploadStatus}</span>
            )}
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;










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

//     // Check if both title and file are provided
//     if (!title || !file) {
//       alert("Please enter a title and upload an image.");
//       return;
//     }

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
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className='add'>
//       <div className="content">
//         <input required className='input' value={title} type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
//         <div className="editorContainer">
//           <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
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



//           <h1 className='h1'>Category</h1>
//             <div className="cat">
//               <input type="radio" checked={cat === "general"} name='cat' value="general" id='general' onChange={(e) => setCat(e.target.value)} />
//               <label htmlFor="general">General</label>
//             </div>
//             <div className="cat">
//               <input type="radio" checked={cat === "events"} name='cat' value="events" id='events' onChange={(e) => setCat(e.target.value)} />
//               <label htmlFor="events">Events</label>
//             </div>
//             <div className="cat">
//               <input type="radio" checked={cat === "technology"} name='cat' value="technology" id='technology' onChange={(e) => setCat(e.target.value)} />
//               <label htmlFor="technology">Technology</label>
//             </div>
//             <div className="cat">
//               <input type="radio" checked={cat === "sports"} name='cat' value="sports" id='sports' onChange={(e) => setCat(e.target.value)} />
//               <label htmlFor="sports">Sports</label>
//             </div>
//             <div className="cat">
//               <input type="radio" checked={cat === "news"} name='cat' value="news" id='news' onChange={(e) => setCat(e.target.value)} />
//               <label htmlFor="news">News</label>
//             </div>
//             <div className="cat">
//               <input type="radio" checked={cat === "food"} name='cat' value="food" id='food' onChange={(e) => setCat(e.target.value)} />
//               <label htmlFor="food">Food</label>
//             </div>
//           <div className="buttons">
//           <input required style={{ display: "none" }} type="file" id='file' name="" onChange={(e) => setFile(e.target.files[0])} />
//           <label className='file' htmlFor="file">Upload Image</label>
//             <button onClick={handleClick}>Publish</button>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Write
