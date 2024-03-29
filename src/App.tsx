import React, {lazy, Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import Loader from "./components/Loader";
import {MainContainer} from "./components/StyledComponents/MainContainer";

const HomePage = lazy(() => import('./pages/HomePage'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const AddProject = lazy(() => import('./pages/NewProject/AddProject'));
const ListProjects = lazy(() => import('./pages/AllProjects/ListProjects'));
const ProjectDetails = lazy(() => import('./pages/AllProjects/ProjectDetails'));

function App() {
    return (
      <MainContainer>
          <Routes>
                  <Route path="/" element={
                      <Suspense fallback={<Loader/>}>
                          <HomePage />
                      </Suspense>
                  }/>
                  <Route path="/add" element={
                      <Suspense fallback={<Loader/>}>
                          <AddProject />
                      </Suspense>
                  }/>
                  <Route path="/projects" element={
                      <Suspense fallback={<Loader/>}>
                          <ListProjects />
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
      </MainContainer>
  );
}

export default App;
