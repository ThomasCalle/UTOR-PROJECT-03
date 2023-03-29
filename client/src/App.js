import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'font-awesome/css/font-awesome.min.css';

// Uncomment import statement below after building queries and mutations
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// const client = new ApolloClient({
//   uri: "/graphql",
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <Router>
      <div className="flex-column justify-center align-center min-100-vh">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* ADD MORE ROUTES AS WE NEED THEM */}
          <Route
            path="*"
            element={<h1 className="display-2">Wrong page!</h1>}
          />
        </Routes>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
