import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import CreatePage from './pages/CreatePage';
import BoardView from './pages/BoardView';

function App() {
  return (
    <Router>
      <div className="App">
        {/* 헤더  */}
        <Header />

        {/* 메인  */}
        <main className="app-main">
          <Switch>
            <Route exact path="/">
              {/* 게시글 목록 리스트 컴포넌트 위치 */}
              <MainPage />
            </Route>
            <Route path="/posts/:postId">
              {BoardView}
            </Route>
            <Route path="/write">{CreatePage}</Route>
          </Switch>
        </main>

        {/* 푸터 */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;