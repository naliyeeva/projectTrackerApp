import React, {lazy, Suspense, useEffect, useState} from 'react';
import styles from './style.module.scss';
import {Route, Routes, useLocation} from "react-router-dom";
import Loader from "./components/Loader";

const HomePage = lazy(() => import('./pages/HomePage'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const AddProject = lazy(() => import('./pages/NewProject/AddProject'));
const ListProjects = lazy(() => import('./pages/AllProjects/ListProjects'));
const ProjectDetails = lazy(() => import('./pages/AllProjects/ProjectDetails'));

interface Project {
    title: string;
    description: string;
    tech: string;
}

function App() {
    const [projectsList, setProjectsList] = useState<Project[]>([]);
    const [list, setList] = useState<boolean>(false);
    const location = useLocation();

    useEffect(() => {
        location.pathname === '/projects' && setList(true);
    }, [location.pathname]);

    return (
      <div className={styles.mainContainer}>
          <Routes>
              <Route path="/" element={
                  <Suspense fallback={<Loader/>}>
                      <HomePage />
                  </Suspense>
              }/>
              <Route path="/add" element={
                  <Suspense fallback={<Loader/>}>
                      <AddProject setProjectsList={setProjectsList}/>
                  </Suspense>
              }/>
              <Route path="/projects" element={
                  <Suspense fallback={<Loader/>}>
                      <ListProjects projectsList={projectsList} list={list}  />
                  </Suspense>
              }/>
              <Route path="/projects/:projectId" element={
                  <Suspense fallback={<Loader/>}>
                      <ProjectDetails />
                  </Suspense>
              }/>
              <Route path="*" element={
                  <Suspense fallback={<Loader/>}>
                      <PageNotFound />
                  </Suspense>
              }/>
          </Routes>
      </div>
  );
}

export default App;
