import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./styles/index.css";
import { Home, Host, Listing, Listings, NotFound, User } from "./sections";

import reportWebVitals from "./reportWebVitals";

const client = new ApolloClient({ uri: "/api", cache: new InMemoryCache() });

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/host" Component={Host} />
        <Route path="/listing/:id" Component={Listing} />
        <Route path="/listings/:location?" Component={Listings} />
        <Route path="/user/:id" Component={User} />
        <Route Component={NotFound} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
