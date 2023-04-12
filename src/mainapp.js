import { useState, useEffect } from 'react';
import logo from './logo.svg';
import { useParams } from "react-router-dom";
import './App.css';
import Data from "./data.json"
import SelectList from './select.js';



function MainApp() {

  let { id } = useParams();
  const [array, setArray] = useState([]);
  const [ddlVal, setDdlVal] = useState(1);
  const pplx = Data
  const all = [
    ["Rahul Rahate", "Camilo Delay", "Karen Trueblood", "Zachary Smith", "Nuray Vermeer", "Patricia Fernanda Martinez Falcon", "Peter Eko-Acquah", "Peter Mwangi", "Meiling Du", "Elena Nelmes", "Jeffrey Kuik"],
    ["Amber Koelzer", "Scott Daly", "Sean Rice"],
    ["Akshay Shriniwar", "Shriya Shirish Hardikar", "Radhika Ravindran", "Kayla Lake", "Joan Hardt", "Casandra Mack"],
    ["Anush Torozyan", "Jenny Pastore", "Sophie Nasseri" ],
    ["Benjamin Flores", "Aqeela Sasman", "Eileen Lee", "Kelly Gramajo", "Taryn Esterhuizen"],
    ["Carlos Silva", "Dalton Butler", "Lee Glasgow", "Ross Merritt"],
    ["Chad Engle", "Akshay Shriniwar", "Anush Torozyan", "Ann Kinahan", "Kat Varga"],
    ["Christopher Sybico", "Benjamin Flores", "Daniel Klopper", "Runar Gudbjartsson", "Tamsyn Esterhuizen"],
    ["Daniel Hardy", "E.J. Karcher", "Russell Benson", "Rahul Rahate", "Shannon Weber", "Matt Di Santo"],
    ["E.J. Karcher", "Kelsey Dieterich", "Maja Dimitrovska", "Nenad Tocilovac", "Sergio Bustamante"],
    ["Emily Buchardt", "Arika Lawrence","Kayla Moses"],
    ["Jessica Billeaud", "Emily Buchardt", "Clay Pelo", "Jett Allen", "Jordan Haeger", "Paige Gates"],
    ["Joshua Berk", "Lindsey Weigley", "Nicki Leslie", "Kyle Kelly", "Yu Shan Li"],
    ["Lindsey Weigley", "Cristobal Grana Samanez", "Grace Zhu", "Yun Zhou"],
    ["Matt Di Santo", "Amber Koelzer", "Carlos Silva", "Cecilia Strada", "Jesse Bilsten"],
    ["Mike Herdzina", "Chad Engle", "Christopher Sybico", "Daniel Hardy", "Jessica Billeaud", "Joshua Berk", "Andrew Pignato", "Ben Zweig"],
    ["Shannon Weber", "Amine Zaydi"]
  ]
  



  function getSchedule(ppl) {
    const le = ppl.length
    const half = Math.ceil(ppl.length / 2);   

    if (le % 2 === 1) {
      ppl.push("Joker")
    }
    // const Array1 = [...new Array(le / 2).keys()].map((x) => x + 1);
    const Array1 = ppl.slice(0,half);
    

    const Array2 = ppl.slice(half);
    
    // for (let i = le; i > le / 2; i--) {
    //   Array2.push(i);
    // }
    const schedule = [];
    for (let i = 0; i < le - 1; i++) {
    
      // the next two lines can be used interchangeably 
      //(first line has meetings as "1-2, 3-4" - second line has them as [1, 2], [3, 4])
      // just use whatever line serves your purpose best (unit test only works with 2nd line)
      // schedule.push(Array1.map((team1, index) => `${team1} - ${Array2[index]}`))
      schedule.push(Array1.map((team1, index) => 
        [team1, Array2[index]]
      ));
      
      Array2.push(Array1.pop() || 0); // the short circuit is only here because I use typescript
      Array1.splice(1, 0, Array2.splice(0, 1)[0]);
    }
    return schedule;
  }
  

  useEffect(() =>{
    const x = getSchedule(pplx)
    setArray(x);
  },[])

  useEffect(() => {
    console.log(id);
    setDdlVal(id)
    if(id == undefined || id == null) {
      setDdlVal(1)
    }
  },[])

  function CheckIt(x,y) {
    
      
      if (
        (all[0].includes(x) && all[0].includes(y)) ||
        (all[1].includes(x) && all[1].includes(y)) ||
        (all[2].includes(x) && all[2].includes(y)) ||
        (all[3].includes(x) && all[3].includes(y)) ||
        (all[4].includes(x) && all[4].includes(y)) ||
        (all[5].includes(x) && all[5].includes(y)) ||
        (all[6].includes(x) && all[6].includes(y)) ||
        (all[7].includes(x) && all[7].includes(y)) ||
        (all[8].includes(x) && all[8].includes(y)) ||
        (all[9].includes(x) && all[9].includes(y)) ||
        (all[10].includes(x) && all[10].includes(y)) ||
        (all[11].includes(x) && all[11].includes(y)) ||
        (all[12].includes(x) && all[12].includes(y)) ||
        (all[13].includes(x) && all[13].includes(y)) ||
        (all[14].includes(x) && all[14].includes(y)) ||
        (all[15].includes(x) && all[15].includes(y)) ||
        (all[16].includes(x) && all[16].includes(y))
      ){
        return true
        
      } else {
        
        return false
      }
    

  }

  // useEffect(() => {
    

  //   if(array.length !== 0) {
  //     array.forEach((item,index) => 
  //       item.forEach((itm, index2) => 
  //           {   
              
  //             // if(CheckIt(itm[0], itm[1])) {
  //             //   const newArray = update(array, {[index]:  {$splice: [[index2,1]]}});
  //             //   setArray(newArray)
  //             // } else {
  //             //   console.log(false)
  //             // }
                
  //           }
  //         )
  //       );

  //   } // array length check

  //   // console.log(array)
    
  // },)

  useEffect(() => {
    console.log(array);
  },[array])



  return (
    <div className="App">
    
      <div className='h1-area'>
        <h1>
          Random Hangs
        </h1>

        {/* <select value={ddlVal} onChange={(e) => setDdlVal(e.target.value)}>
        {(Object.keys(array).length != 0) &&
          array.map((item, ind) => 
            <option value={ind+1}>
              Round {ind+1}
            </option>
          )
        }
        </select> */}

        <SelectList value={ddlVal} handleChange={(e) => setDdlVal(e.target.value)} itemz={array} />
      </div>
      
      

      {(Object.keys(array).length != 0) &&
        
        array.map((item, index) => 
          
          <div className={ddlVal == index+1 ? "grandpaContainer shown" : "hidden" }>
            <h3>Round {index+1} Pairings</h3>
            <div className='parentContainer'>
              {item.map((itm, index2) => 

                <>
                  {CheckIt(itm[0], itm[1])? 
                    
                    null
                    
                    :
                    <div className="container" >
                      <ul>
                    {itm.map((it, index3) =>

                      
                        <li>
                        {it}
                        </li>
                      
                      
                    )}
                    </ul>
                    </div>
                  }
                </> 
                
              )}
            </div>
          
          </div>
            
          
        )
      }
        
      <h1>
        <small>
          built with ❤️ by @r2, Chicago,IL
        </small>
      </h1>
        
    </div>
  );
}

export default MainApp;
