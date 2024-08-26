import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// Apollo Client
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Global CSS
import "../constants/styles/index.css";

// Time Ago
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

// Redux
import { store } from "../lib/stores/store.ts";
import { Provider } from "react-redux";

// Configs
TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(en);

const client = new ApolloClient({
  uri: `${import.meta.env.VITE_SERVER_URL}/graphql`,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </StrictMode>,
);
