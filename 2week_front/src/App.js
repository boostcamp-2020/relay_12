import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

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
            </Route>
            <Route path="/posts/:postId">{/* 게시글 조회 컴포넌트 위치 */}</Route>
            <Route path="/write">{/* 게시글 작성 컴포넌트 위치 */}</Route>
          </Switch>
        </main>

        {/* 푸터 */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
