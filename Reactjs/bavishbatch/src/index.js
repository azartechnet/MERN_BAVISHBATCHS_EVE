import React from 'react';
import ReactDOM from 'react-dom/client';

//Basic Rendering
/*const Sample=()=>{
  return(
    <div>
      <h1>Welcome</h1>
      </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Sample/>)*/

//Dynamic Rendering

/*const App=()=>{
  const username="mohamed";
  return(
    <div>
      <h1>Hello {username}</h1>
      <p>Today Date::{new Date().toLocaleDateString()}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'));

r1.render(<App/>); */

//React with JSX

/*const myelm=<h1>Welcome1</h1>
const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(myelm);

//React without JSX

 const myelm2=React.createElement('h1',null,'Welcome2');
 const r2=ReactDOM.createRoot(document.getElementById('root'));
 r2.render(myelm2);*/

 //Expression in React
 /*const name="mohamed";

 const age=25;

  const App=()=>{
    return(
      <div>
        <h1>Hello {name}</h1>
        <p>Age:{age}</p>
      </div>
      )
      }
      const r1=ReactDOM.createRoot(document.getElementById('root'));
      r1.render(<App/>);*/

      //Fragement tag

      /*const App=()=>{
        return(
         <>
        <h1>Welcome</h1>
        <h2>Welcome</h2>
          </>
        
        )
      }
      const r1=ReactDOM.createRoot(document.getElementById('root'));
      r1.render(<App/>);*/

      //Importing  CSS in React

      import './index.css';

      const App=()=>{
        return(
          <div >
            <h1 className="sam">Welcome</h1>
            <h2>Welcome</h2>
            <form>
              <label className='form-label'>UserName</label>
              <input type='text' className='form-control'/>
              <input type='submit' value='Login' className='btn btn-info'/>
            </form>
          </div>
        )
      }
      const r1=ReactDOM.createRoot(document.getElementById('root'));
      r1.render(<App/>);
