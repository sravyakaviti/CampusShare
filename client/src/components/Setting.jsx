import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";
import moment from "moment";

const Setting = () => {
    const { currentUser, logout } = useContext(AuthContext);
    const [username, setUsername] = useState("JohnDoe");
    const [email, setEmail] = useState("johndoe@example.com");
    const [userImage, setUserImage] = useState("https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png");
    const [newImage, setNewImage] = useState(null);
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState("Upload Image"); // New state variable
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setNewImage(URL.createObjectURL(file));
    };
    const handleFileChange = (event) => {
        // setFile(e.target.files[0]);
        if (event.target.files && event.target.files[0]) {
            setNewImage(URL.createObjectURL(event.target.files[0]));
          }
        setUploadStatus("Image Uploaded");
      };

    const handleImageUpdate = () => {
        if (!file) {
            alert("Please upload an image.");
            return;
          }
        if (newImage) {
            setUserImage(newImage);
            setNewImage(null);
        }
    };
    return (
        <div className="menu">
            <div className="user-profile">
                <div className="image-container">
                    <img src={currentUser?.img ? currentUser.img : "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"} alt="User" className="user-image" />
                    <input type="file" id='file' name="" accept="image/*" onChange={handleFileChange} className="image-upload" />
                    {uploadStatus === "Upload Image" ? (
                        <label className="file" htmlFor="file">
                            {uploadStatus}
                        </label>
                    ) : (
                        <span className="file-upload">{uploadStatus}</span>
                    )}
                    {/* <input type="file" accept="image/*" onChange={handleImageUpload} className="image-upload" /> */}
                    <button onClick={handleImageUpdate} className="update-button">Update Image</button>
                </div>
                <div className="info-container">
                    <h2 className="h2">Username:</h2>
                    <p className="p">{currentUser?.username}</p>
                </div>
                <div className="info-container">
                    <h2 className="h2">Email:</h2>
                    <p className="p">{currentUser?.email}</p>
                </div>
                {currentUser && (
                    <Link to="/login"><button onClick={logout} className="update-button">Logout</button></Link>
                )}
            </div>
        </div>
    )
}

export default Setting  


// import axios from "axios";
// import React, { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../context/authContext";
// import { Link } from "react-router-dom";
// import moment from "moment";

// const Setting = () => {
//   const { currentUser, logout } = useContext(AuthContext);
//   const [username, setUsername] = useState("JohnDoe");
//   const [email, setEmail] = useState("johndoe@example.com");
//   const [userImage, setUserImage] = useState("https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png");
//   const [newImage, setNewImage] = useState(null);
//   const [file, setFile] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState("Upload Image");

//   useEffect(() => {
//     if (currentUser && currentUser.img) {
//       setUserImage(currentUser.img);
//     }
//   }, [currentUser]);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//     setUploadStatus("Image Uploaded");
//   };

//   const handleImageUpdate = async () => {
//     if (!file) {
//       alert("Please upload an image.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("img", file);

//     try {
//       const res = await axios.post("/updateUser", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       setUserImage(res.data.img);
//       setFile(null);
//       setUploadStatus("Upload Image");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="menu">
//       <div className="user-profile">
//         <div className="image-container">
//           <img src={userImage} alt="User" className="user-image" />
//           <input
//             type="file"
//             id="file"
//             name=""
//             accept="image/*"
//             onChange={handleFileChange}
//             className="image-upload"
//           />
//           {uploadStatus === "Upload Image" ? (
//             <label className="file" htmlFor="file">
//               {uploadStatus}
//             </label>
//           ) : (
//             <span className="file-upload">{uploadStatus}</span>
//           )}
//           <button onClick={handleImageUpdate} className="update-button">
//             Update Image
//           </button>
//         </div>
//         <div className="info-container">
//           <h2 className="h2">Username:</h2>
//           <p className="p">{currentUser?.username}</p>
//         </div>
//         <div className="info-container">
//           <h2 className="h2">Email:</h2>
//           <p className="p">{currentUser?.email}</p>
//         </div>
//         {currentUser && (
//           <button onClick={logout} className="update-button">
//             Logout
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Setting;
