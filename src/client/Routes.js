import HomePage from "./pages/HomePage";
import App from "./App";
import UsersListPage from "./pages/UsersListPage";
import QueryExample from "./components/QueryExample";

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true
      },
      {
        ...UsersListPage,
        path: "/users"
      },
      {
        component: QueryExample,
        path: "/query"
      }
    ]
  }
];
