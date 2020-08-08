import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import CreatePage from './pages/CreatePage';
import UpdatePage from './pages/UpdatePage';
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
            <Route exact path="/" component={MainPage} />
            <Route exact path="/posts/:postId" component={BoardView} />
            <Route path="/posts/update/:postId" component={UpdatePage} />
            <Route path="/write" component={CreatePage} />
          </Switch>
        </main>

        {/* 푸터 */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
