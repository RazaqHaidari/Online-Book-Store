// // // import { Link, useNavigate } from "react-router-dom";
// // // import { useState } from "react";

// // // const Header = () => {
// // //   const navigate = useNavigate();
// // //   const [searchTerm, setSearchTerm] = useState("");

// // //   const token = localStorage.getItem("authToken");

// // //   const genres = ["Fiction", "Adventure", "Non-Fiction", "Mystery", "Sci-Fi", "Fantasy", "Biography", "Romance"];

// // //   const handleLogout = () => {
// // //     localStorage.removeItem("authToken");
// // //     localStorage.removeItem("cart");
// // //     navigate("/login");
// // //   };

// // //   const handleSearch = (e) => {
// // //     e.preventDefault();
// // //     if (searchTerm.trim()) {
// // //       navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
// // //     }
// // //   };

// // //   const handleGenreChange = (e) => {
// // //     const selectedGenre = e.target.value;
// // //     if (selectedGenre) {
// // //       navigate(`/genre/${selectedGenre}`);
// // //     }
// // //   };

// // //   return (
// // //     <nav className="navbar navbar-expand-lg navbar-light bg-purple" style={{ borderBottom: "1px solid #4a148c" }}>
// // //       <div className="container-fluid d-flex justify-content-between align-items-center">
// // //         <div className="d-flex align-items-center" style={{ flex: "0 0 25%" }}>
// // //           <Link className="navbar-brand text-white" to="/" style={{ fontSize: "1.75rem" }}>
// // //             <img
// // //               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7pNHLjlkB1_Qptu-p5PcdCBCPTR7Ev5bklobwKMB12PrBwdY_3mDOq9e-AZDJFaXzeA4&usqp=CAU"
// // //               alt="BookStore Logo"
// // //               style={{ width: "40px", marginRight: "10px" }}
// // //             />
// // //             BookStore
// // //           </Link>
// // //         </div>

// // //         {/* Search Bar */}
// // //         <form onSubmit={handleSearch} className="d-flex" style={{ flex: "0 0 30%" }}>
// // //           <input
// // //             className="form-control me-2"
// // //             type="search"
// // //             placeholder="Search for books"
// // //             value={searchTerm}
// // //             onChange={(e) => setSearchTerm(e.target.value)}
// // //             style={{ width: "100%", paddingLeft: "20px", fontSize: "1rem", borderRadius: "30px" }}
// // //           />
// // //           <button type="submit" className="btn btn-light">Search</button>
// // //         </form>

// // //         {/* Genre Dropdown */}
// // //         <select onChange={handleGenreChange} className="form-select ms-3" style={{ width: "150px" }}>
// // //           <option value="">Select Genre</option>
// // //           {genres.map((genre) => (
// // //             <option key={genre} value={genre}>{genre}</option>
// // //           ))}
// // //         </select>

// // //         <div className="collapse navbar-collapse" id="navbarNav" style={{ flex: "0 0 45%" }}>
// // //           <ul className="navbar-nav ms-auto">
// // //             <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
// // //             <li className="nav-item"><Link className="nav-link text-white" to="/cart">Cart</Link></li>

// // //             {token ? (
// // //               <>
// // //                 <li className="nav-item">
// // //                   <button className="nav-link text-white btn btn-outline-light" onClick={handleLogout}>Logout</button>
// // //                 </li>
// // //                 <li className="nav-item"><Link className="nav-link text-white" to="/admin">Admin</Link></li>
// // //               </>
// // //             ) : (
// // //               <>
// // //                 <li className="nav-item"><Link className="nav-link text-white" to="/login">Login</Link></li>
// // //                 <li className="nav-item"><Link className="nav-link text-white" to="/signup">Sign Up</Link></li>
// // //               </>
// // //             )}
// // //           </ul>
// // //         </div>

// // //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
// // //           <span className="navbar-toggler-icon"></span>
// // //         </button>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Header;


// import { Link, useNavigate } from "react-router-dom";

// const Header = () => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("authToken");

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("cart");
//     navigate("/login");
//   };

//   return (
//     <nav
//       className="navbar navbar-expand-lg navbar-light bg-purple"
//       style={{ borderBottom: "1px solid #4a148c" }}
//     >
//       <div className="container-fluid d-flex justify-content-between align-items-center">
//         <div className="d-flex align-items-center" style={{ flex: "0 0 25%" }}>
//           <Link
//             className="navbar-brand text-white"
//             to="/"
//             style={{ fontSize: "1.75rem" }}
//           >
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7pNHLjlkB1_Qptu-p5PcdCBCPTR7Ev5bklobwKMB12PrBwdY_3mDOq9e-AZDJFaXzeA4&usqp=CAU"
//               alt="BookStore Logo"
//               style={{ width: "40px", marginRight: "10px" }}
//             />
//             BookStore
//           </Link>
//         </div>

//         <div className="d-flex" style={{ flex: "0 0 30%" }}>
//           <input
//             className="form-control me-2"
//             type="search"
//             placeholder="Search for books"
//             aria-label="Search"
//             style={{
//               width: "100%",
//               paddingLeft: "20px",
//               fontSize: "1rem",
//               borderRadius: "30px",
//             }}
//           />
//         </div>

//         <div
//           className="collapse navbar-collapse"
//           id="navbarNav"
//           style={{ flex: "0 0 45%" }}
//         >
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link text-white" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-white" to="/cart">
//                 Cart
//               </Link>
//             </li>

//             {token ? (
//               <>
//                 <li className="nav-item">
//                   <button
//                     className="nav-link text-white btn"
//                     onClick={handleLogout}
//                   >
//                     Logout
//                   </button>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link text-white" to="/admin">
//                     Admin
//                   </Link>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link text-white" to="/login">
//                     Login
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link text-white" to="/signup">
//                     Sign Up
//                   </Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Header;

// // import { Link, useNavigate } from "react-router-dom";
// // import { useState } from "react";

// // const Header = () => {
// //   const navigate = useNavigate();
// //   const [searchTerm, setSearchTerm] = useState("");

// //   const token = localStorage.getItem("authToken");

// //   const genres = ["Fiction", "Adventure", "Non-Fiction", "Mystery", "Sci-Fi", "Fantasy", "Biography", "Romance"];

// //   const handleLogout = () => {
// //     localStorage.removeItem("authToken");
// //     localStorage.removeItem("cart");
// //     navigate("/login");
// //   };

// //   const handleSearch = (e) => {
// //     e.preventDefault();
// //     if (searchTerm.trim()) {
// //       navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
// //     }
// //   };

// //   const handleGenreChange = (e) => {
// //     const selectedGenre = e.target.value;
// //     if (selectedGenre) {
// //       navigate(`/genre/${selectedGenre}`);
// //     }
// //   };

// //   return (
// //     <nav className="navbar navbar-expand-lg navbar-light bg-purple" style={{ borderBottom: "1px solid #4a148c" }}>
// //       <div className="container-fluid d-flex justify-content-between align-items-center">
// //         <div className="d-flex align-items-center" style={{ flex: "0 0 25%" }}>
// //           <Link className="navbar-brand text-white" to="/" style={{ fontSize: "1.75rem" }}>
// //             <img
// //               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7pNHLjlkB1_Qptu-p5PcdCBCPTR7Ev5bklobwKMB12PrBwdY_3mDOq9e-AZDJFaXzeA4&usqp=CAU"
// //               alt="BookStore Logo"
// //               style={{ width: "40px", marginRight: "10px" }}
// //             />
// //             BookStore
// //           </Link>
// //         </div>

// //         {/* Search Bar */}
// //         <form onSubmit={handleSearch} className="d-flex" style={{ flex: "0 0 30%" }}>
// //           <input
// //             className="form-control me-2"
// //             type="search"
// //             placeholder="Search for books"
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             style={{ width: "100%", paddingLeft: "20px", fontSize: "1rem", borderRadius: "30px" }}
// //           />
// //           <button type="submit" className="btn btn-light">Search</button>
// //         </form>

// //         {/* Genre Dropdown */}
// //         <select onChange={handleGenreChange} className="form-select ms-3" style={{ width: "150px" }}>
// //           <option value="">Select Genre</option>
// //           {genres.map((genre) => (
// //             <option key={genre} value={genre}>{genre}</option>
// //           ))}
// //         </select>

// //         <div className="collapse navbar-collapse" id="navbarNav" style={{ flex: "0 0 45%" }}>
// //           <ul className="navbar-nav ms-auto">
// //             <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
// //             <li className="nav-item"><Link className="nav-link text-white" to="/cart">Cart</Link></li>

// //             {token ? (
// //               <>
// //                 <li className="nav-item">
// //                   <button className="nav-link text-white btn btn-outline-light" onClick={handleLogout}>Logout</button>
// //                 </li>
// //                 <li className="nav-item"><Link className="nav-link text-white" to="/admin">Admin</Link></li>
// //               </>
// //             ) : (
// //               <>
// //                 <li className="nav-item"><Link className="nav-link text-white" to="/login">Login</Link></li>
// //                 <li className="nav-item"><Link className="nav-link text-white" to="/signup">Sign Up</Link></li>
// //               </>
// //             )}
// //           </ul>
// //         </div>

// //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
// //           <span className="navbar-toggler-icon"></span>
// //         </button>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Header;

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const token = localStorage.getItem("authToken");

  const genres = [
    "Fiction",
    "Adventure",
    "Non-Fiction",
    "Mystery",
    "Sci-Fi",
    "Fantasy",
    "Biography",
    "Romance",
  ];

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("cart");
    navigate("/login");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleGenreChange = (e) => {
    const selectedGenre = e.target.value;
    if (selectedGenre) {
      navigate(`/genre/${selectedGenre}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-purple" style={{ borderBottom: "1px solid #4a148c", width: "100%" }}>
      <div className="container-fluid px-4">
        {/* Logo / Brand */}
        <Link className="navbar-brand text-white d-flex align-items-center" to="/" style={{ fontSize: "1.75rem" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7pNHLjlkB1_Qptu-p5PcdCBCPTR7Ev5bklobwKMB12PrBwdY_3mDOq9e-AZDJFaXzeA4&usqp=CAU"
            alt="BookStore Logo"
            style={{ width: "40px", marginRight: "10px" }}
          />
          BookStore
        </Link>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Center Content: Search + Genre */}
          <form onSubmit={handleSearch} className="d-flex mx-auto my-2 my-lg-0" style={{ flexGrow: 1, maxWidth: "600px" }}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for books"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                paddingLeft: "20px",
                fontSize: "1rem",
                borderRadius: "30px",
              }}
            />
            <button type="submit" className="btn btn-light me-3">Search</button>
            <select onChange={handleGenreChange} className="form-select" style={{ maxWidth: "150px" }}>
              <option value="">Select Genre</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </form>

          {/* Right Side Nav Items */}
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/cart">Cart</Link>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/admin">Admin</Link>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-light ms-2"
                    onClick={handleLogout}
                    style={{ marginTop: "5px" }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/signup">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

