import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import './App.css';

import Home from './Home';
import Product from './Product';
import About from './About';

const App = ({ match: { params } }) => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
      <Footer />
    </div>
  )
}
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <a href="/">家11</a>
          <a href="/home">家</a>
          <a href="/about">我们</a>
          <a href="/product">产品</a>
          <br />
          <Link to="home"> 家</Link>
          <Link to="about"> about我们</Link>
          <Link to="product"> 产品</Link>
          <br />
          {/* <Route path="/" component={App} /> */}
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/product" component={Product} />
        </div>
      </Router>
    );
  }
}

export default App;
