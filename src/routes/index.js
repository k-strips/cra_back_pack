import { Route, Routes } from "react-router-dom";
import { Login, Pages, Notes } from "../pages";

// local components import
import PrivateOutlet from "./privateOutlet";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<PrivateOutlet />}>
        <Route path="pages" element={<Pages />} />
        <Route path="notes" element={<Notes />} />
        {/* <Route path="8" element={<NoMatch />}/> */}
      </Route>
    </Routes>
  );
}

export default AppRoutes;
