// import { Routes, Route, RouterProvider } from 'react-router-dom';  // Removed BrowserRouter import
// import './App.css';
// import AdminPage from './pages/AdminPage';
// import BookDetailPage from './pages/BookDetailPage';
// import CartPage from './pages/CartPage';
// import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
// import SignUpPage from './pages/SignUpPage';
// import ProtectedRoute from './components/ProtectedRoute';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import HeroSection from './components/Hero';

// function App() {
//   return (
//     <Routes>
//       {/* Public Routes */}
//       <Route path="/" element={<HomePage />} />
//       <Route path='/header' element={<Header/>}/>
//       <Route path= '/footer' element={<Footer/>}/>
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/signup" element={<SignUpPage />} />
//       <Route path="/book/:id" element={<BookDetailPage />} />
//       <Route path="/hero" element={<HeroSection/>}/>

//       {/* Protected Routes */}
//       <Route
//         path="/cart"
//         element={
//           <ProtectedRoute>
//             <CartPage />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/admin"
//         element={
//           <ProtectedRoute>
//             <AdminPage />
//           </ProtectedRoute>
//         }
//       />
//     </Routes>
//   );
// }

// export default App;
import { Routes, Route } from 'react-router-dom';  // Removed RouterProvider import
import './App.css';
import AdminPage from './pages/AdminPage';
import CartPage from './pages/CartPage';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/Hero';
import Login from './components/Login';
import BookDetailPage from './pages/BookDetailPage'
import SignUp from './components/SignUp';
import NotAuthorizedPage from './pages/NotAuthorizedPage';
import SearchResults from './components/SearchResults';
import GenreBooks from './pages/GenreBooks';
function App() {
  return (
    <>
      <Header />

      <Routes>
   
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/book/:id" element={<BookDetailPage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/genre/:genre" element={<GenreBooks />} />  {/* ✅ New Route */}

      
        <Route
          path="/cart"
          element={
            <ProtectedRoute requiredRole="user">
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminPage />
            </ProtectedRoute>
          }
        />
                <Route path="/not-authorized" element={<NotAuthorizedPage />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
