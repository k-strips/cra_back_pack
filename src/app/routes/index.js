import { Route, Routes } from "react-router-dom";

// local components import
import { Login, Page, Pages, Note, Notes, NoMatch } from "../pages";
import { AppLayout, UnauthLayout } from "../layout";

let routes = [
  {
    path: "notes",
    element: <Notes />,
    nested: { path: "note", element: <Note /> },
  },
  {
    path: "pages",
    element: <Pages />,
    nested: { path: "page", element: <Page /> },
  },
];

function AppRoutes() {
  return (
    <Routes>
      <Route element={<UnauthLayout />}>
        <Route index element={<Login />} />
        <Route path="signup" element={<Login />} />
      </Route>
      <Route element={<AppLayout />}>
        {routes.map((m, i) => (
          <Route key={i} path={m.path} element={m.element}>
            <Route path={m.nested.path} element={m.nested.element} />
          </Route>
        ))}
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default AppRoutes;
