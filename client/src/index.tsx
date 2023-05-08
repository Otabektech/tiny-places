import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { Listings } from "./sections/Listings";
// import { render } from "react-dom";
import reportWebVitals from "./reportWebVitals";

const client = new ApolloClient({ uri: "/api", cache: new InMemoryCache() });

// render(
//   <Listings title="Tiny-Places Listings" />,
//   document.getElementById("root")
// );
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Listings title="Tiny-Places Listings" />,
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
