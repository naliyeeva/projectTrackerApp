import React from 'react';
import styles from './style.module.scss';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {PageNotFound} from "./pages/PageNotFound";
import {AddProject} from "./pages/NewProject/AddProject";
import {ListProjects} from "./pages/AllProjects/ListProjects";
import {ProjectDetails} from "./pages/AllProjects/ProjectDetails";

// doing this way is newer version
const router = createBrowserRouter([
    // index: true means setting a default route
    {index: true, element: <HomePage />},
    {path: '/add', element: <AddProject />},
    // consider adding a loader
    {path: '/projects', element: <ListProjects />},
    {path: '/projects/:projectId', element: <ProjectDetails />},
    {path: '*', element: <PageNotFound />}
])

function App() {
  return (
    <div className={styles.mainContainer}>
        {/*<HomePage />*/}
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
