import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/Routes";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";

export default req => {
  // Enables rendering all relevant components into HTML to send back to the client
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <div>{renderRoutes(Routes)}</div>
    </StaticRouter>
  );

  // We will take the contents of the redux store and serialize it as a global back to the client to help rehydrate the view
  const html = `
    <html>
      <head>
      </head>
      <body>
        <div id="root">
          ${content}
        </div>
        <script>
          // Going to want to serialize the apollo cache instead of the store
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;

  return html;
};
