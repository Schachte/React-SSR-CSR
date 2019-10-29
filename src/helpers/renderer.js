import React from "react";
import Routes from "../client/Routes";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import initApolloClient from "../helpers/createCache";
import { getDataFromTree } from "@apollo/react-ssr";
import App from "../client/App";
import { ApolloProvider } from "react-apollo";
import { renderToStaticMarkup } from "react-dom/server";

export default (req, res) => {
  const client = initApolloClient({ isServerSide: true });
  const App = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </ApolloProvider>
  );

  const Html = ({ content, state }) => {
    return (
      <html>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(
                /</g,
                "\\u003c"
              )};`
            }}
          />
        </body>
      </html>
    );
  };

  return getDataFromTree(App).then(() => {
    const content = renderToString(App);
    const initialState = client.extract();
    const html = <Html content={content} state={initialState} />;
    res.status(200);
    res.send(`<!doctype html>\n${renderToStaticMarkup(html)}`);
    res.end();
  });
};
