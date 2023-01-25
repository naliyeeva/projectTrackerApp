import React from 'react';
import styles from './style.module.scss';
import {Welcome} from "./components/Main/Welcome/Welcome";
import {AddButton} from "./components/Main/Buttons/AddButton";
import {ListAllButton} from "./components/Main/Buttons/ListAllButton";
import {Container} from "./components/Main/Buttons/Container";

function App() {
  return (
    <div className={styles.mainContainer}>
      <Welcome />
        <Container>
            <AddButton />
            <ListAllButton />
        </Container>
    </div>
  );
}

export default App;
