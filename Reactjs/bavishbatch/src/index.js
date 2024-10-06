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

      /*import './index.css';

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
      r1.render(<App/>);*/

      //Condition Rendering

      /*const x=10;
      let text="hello";
      if(x>10)
      {
        text="world";
      }
      else{
        text="hello";
      }
      console.log(text)

      const Myelem=()=>{
        return(
          <div>
            <h1>{text}Welcome</h1>
            
          </div>
        )
      }
      const r1=ReactDOM.createRoot(document.getElementById('root'));
      r1.render(<Myelem/>);*/

      //Else if ladder

      /*const Gradesystem=()=>{
        let grade;
        const stumrks=prompt("Enter the Marks::")
        if(stumrks>=90)
          {
            grade="A"
            }
            else if(stumrks>=80)
              {
                grade="B"
                }
                else if(stumrks>=70)
                  {
                    grade="C"
                    }
                    else if(stumrks>=60)
                      {
                        grade="D"
                        }
                        else
                        {
                          grade="F"
                          }
                          console.log(grade)
                          return(
                            <div>
                              <h1>Grade is {grade}</h1>
                            </div>
                            )

      }
       const r1=ReactDOM.createRoot(document.getElementById('root'));
       r1.render(<Gradesystem/>)*/

       //Switch  case ladder

       /*const getGrade=(score)=>{
        switch(true){
          case score>=90:
            return 	"A"
            case score>=80:
              return "B"
              case score>=70:
                return "C"
                case score>=60:
                  return "D"
                  default:
                    return "F"
                    }
                    
       }
       const Gradesystem=()=>{
        const stumrks=85
        const grade=getGrade(stumrks)
        console.log(grade)
       }
       

       const r1=ReactDOM.createRoot(document.getElementById('root'));
       r1.render(<Gradesystem/>)*/

       //Class Component

       /*class Sample extends React.Component
       {
          render()
          {
            return(
              <div>
                <h1>Hello</h1>
              </div>
            )
          }
       }
       const r1=ReactDOM.createRoot(document.getElementById('root'));
       r1.render(<Sample/>)*/

       //Function component

       /*function Sample()
       {
          return(
            <div>
              <h1>Hello</h1>
            </div>
          )
       }
       const r1=ReactDOM.createRoot(document.getElementById('root'));
       r1.render(<Sample/>)*/

      //Function Component using props

      /*function Sample(props)
      {
         return(
          <div>
            <h1>Hello {props.name}</h1>
            <h2>Welcome {props.id}</h2>
          </div>
         )
      }
       const r1=ReactDOM.createRoot(document.getElementById('root'));
       r1.render(<Sample name="Rahul" id="123"/>)*/

//component in component

/*function Sample()
{
   return(
       <h1>This is First Component</h1>
   )
}
function Sample2()
{
    return(
      <div>
        This is Sample2
        <Sample/>
      </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Sample2/>)*/

/*import App from './App';

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Component Constructor

/*class Sample extends React.Component
{
  constructor()
  {
    super();
    this.state={name:"azar",age:34}
  }
  render()
  {
    return(
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.age}</h2>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Sample/>)*/

//Changing the state object

/*class Sample extends React.Component
{
  constructor()
  {
    super();
    this.state={
      emp:{
        name:"azar",
        age:25,
        city:"karur"
      },
      showData:false
    };

}
showData()
{
  this.setState({showData:true})
}
hideData()
{
  this.setState({showData:false})
}
render()
{
  let data;
  if(this.state.showData==true)
  {
    data=<div><b>City:</b>{this.state.emp.city}<b>{this.state.emp.name}</b>
      <button onClick={this.hideData.bind(this)}>HideData</button>
    </div>
    
  }
  else
  {
      data=<div>
        <button  onClick={this.showData.bind(this)}>ShowData</button>
      </div>
  }
  return(
    <div>
      {data}
    </div>
  )
}
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//React Event

/*function Football()
{
  const shoot=()=>{
    console.log("Goal")
    alert("Goal");
  }
  return(
    <div>
      <button onClick={shoot}>Shoot</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/
//React Event

/*function Football()
{
   const shoot=(a)=>{
     alert("Goal"+a)
   }
   return(
      <div>
        <button onClick={()=>shoot(10)}>Shoot</button>
      </div>
   )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//Conditional Rendering

/*function MissedGoal()
{
  return<h1>MissedGoal</h1>
}
function MadeGoal()
{
  return<h1>MadeGoal</h1>
}
function Goal(props)
{
   const isGoal=props.isGoal;
   if(isGoal)
   {
      return<MadeGoal/>
   }
   else{
    return<MissedGoal/>
   }
}
const  r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Goal isGoal={Math.random()>0.5}/>)*/

//React List
/*function Emp(props) {
  return <h1>{props.n1}</h1>;
}

function Salary() {
  //const emp = ["mohan", "mohamed", "azar"];
  const emp={1:"azar",2:"mohamed",3:"mohan"};
  return (
    <ul>
      {emp.map((c1) => (
        <li key={c1}>
          <Emp n1={c1} />
        </li>
      ))}
    </ul>
  );
}

const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Salary />);*/

//React keys

/*function Car(props)
{
   return<li>I am a {props.brand} as {props.k}</li>
}
function Garage()
{
  const cars=[
    {id:1,brand:'Ford'},
    {id:2,brand:'BMW'},
    {id:3,brand:'Audi'}
  ];
  return(
    <ul>
      {cars.map((car)=><Car k={car.id} brand={car.brand}/>)
      }
    </ul>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/

//React Forms (Task)

//React getDerivedStateFromProps
//getDerivedStateFromProps can be used in conditional 
//rendering to update the state based on changes in props.
/*class Header extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={favcolor:"red"};
  }
  static getDerivedStateFromProps(props,state)
  {
     console.log("getDerivedStateFromProps called");
     return {favcolor:props.favcolor}
  }
  render()
  {
    return(
      <div>
        <h1>My favorite color is {this.state.favcolor}</h1>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header favcolor="blue"/>)//React getDerivedStateFromProps*/

//ComponentDidMount

//The componentDidMount method in react is used 
//to execute some code immediately
 //after mounting. This is a lifecycle method in React 
//class component that is called only once when the 
//component is mounted in the DOM.

/*class Header extends  React.Component
{
  constructor(props)
  {
    super(props);
    this.state={favcolor:"red"};
  }
  componentDidMount()
  {
     setTimeout(()=>{
      this.setState({favcolor:"blue"});
     },3000)
  }
  render()
  {
    return(
      <div>
        <h1>My favorite color is {this.state.favcolor}</h1>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header/>)//React componentDidMount*/

//Updating getDerivedStateFromProps

class  Header extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={favcolor:"red"};
  }
  static getDerivedStateFromProps(props,state)
  {
    console.log("getDerivedStateFromProps called");
  }
  changeColor=()=>{
    this.setState({favcolor:"blue"});
  }
  render()
  {
    return(
      
      <div>
        <h1>My favorite color is {this.state.favcolor}</h1>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
      )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header/>)//React getDerivedStateFromProps*/