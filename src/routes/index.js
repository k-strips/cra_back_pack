import { Route } from "react-router-dom";
import { Login, Pages, Notes } from "../pages";

// local components import
import PrivateOutlet from "./privateRoutes";

function Routes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<PrivateOutlet />}>
        <Route path="pages" component={<Pages />} />
        <Route path="notes" component={<Notes />} />
        {/* <Route path="8" component={<NoMatch />}/> */}
      </Route>
    </Routes>
  );
}

export default Routes;
