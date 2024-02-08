import { createBrowserRouter } from "react-router-dom";
import JobDetails from "../components/JobDetails";
import JobLists from "../components/JobLists";

export const primaryRoutes = createBrowserRouter([
  {
    path: "/",
    element: <JobLists />,
  },
  {
    path: "/jobs",
    element: <JobLists />,
  },
  {
    path: "/jobs/:position",
    element: <JobDetails />,
  },
]);

// export default function routes() {
//   return <div>routes</div>;
// }
