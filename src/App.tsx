import React from 'react';
import styles from './style.module.scss';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {PageNotFound} from "./pages/PageNotFound";
import {AddProject} from "./components/NewProject/AddProject";
import {ListProjects} from "./components/AllProjects/ListProjects";
import {ProjectDetails} from "./components/AllProjects/ProjectDetails";

// doing this way is newer version
const router = createBrowserRouter([
    {path: '/', element: <HomePage />},
    {path: '/add', element: <AddProject />},
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
