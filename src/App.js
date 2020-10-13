import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import stockData from "./Data";

function App() {
  return (
    <>
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/slug/:id" component={Slug} />
          </Switch>
        </Router>

      </div>
    </>
  );
}
function Home() {

  return (
    <>
      {/* {console.log( _.orderBy(a , ['company'],['asc']))} */}
      <Link to="/about">Here we go</Link>

      <br />
      {stockData.map((data, key) => {
        return (
          <Link to={`/slug/${data.key}`} key={key}>

          
            {data.company}
            <br />
            {/* {data.ticker} {data.stockPrice} {data.timeElapsed} */}
          </Link>
        );
      })}
    </>
  );
}

function Slug() {
  const params = useParams();
  // console.log(params);
  const idFetch = params.id;

  return (
    <div className="new">
      slug {params.id}
      {stockData
        .filter((x) => x.key == idFetch)
        .map((filteredName) => (
          <div key={filteredName.key}>
            {filteredName.company}
            <br />
            {filteredName.stockPrice}
            <br />
            {filteredName.timeElapsed}
            <br />
         
          </div>
        ))}
    </div>
  );
}
export default App;
