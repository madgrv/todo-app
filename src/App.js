import style from './styles/app.module.css'

import Header from './components/Header';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
    <div className={style.container}>
      <Header />
      <TodoContainer />
    </div>
  );
}

export default App;
