import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/Routes";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";

export default (req, store) => {
  // Enables rendering all relevant components into HTML to send back to the client
  const content = renderToString(
    <Provider store={store}>
      {/* Location is going to state what path we are currently at while renderRoutes will render the components associated with the path */}
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  // This is the prerendered serverside component we will send back to the client
  // The content is dynamic based on the route that is being called at the given time.

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
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;

  return html;
};
