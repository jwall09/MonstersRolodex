/*
Author: Max Wallace
Date:  8/17/2022 
Purpose: This is the general JS file for the Monster
Rolodex App. This uses the constructor to render all
different aspects of the page, importing each individual 
component from their place in ./components
*/
import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState(''); // [value, setValue];
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log('render');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });  
  
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">

      <h1 className='app-title'>Max's Monster Rolodex</h1>

      <SearchBox 
        className = 'monsters-search-box'
        onChangeHandler={onSearchChange} 
        placeholder='Search Monsters'
      />
        
      <CardList monsters={filteredMonsters} />

    </div>
  );
}

// constructor runs first, then the render runs,
// then it runs the mount to mount the HTML
// then back to render to see if anything changed
// when setState is called ro run render again.

// converted to class from function using render()

// when app is built, start with the constructor

// super() calls underlying method ( calls constructor from component)

// this.state references this constructor class
// this is an array with the monsters information
// used to run through and display the data from an api.
// Using key id value makes sure that only that one
// value that has been changed is re-rendered when
// using map() to run through an entire array.
// initialize the array as empty so we can fill it by
// calling the API information. This will update and 
// render as needed.

// by having this searchFiled outside in the constructor,
// it is usable globally


// class App extends Component {
//   constructor() {
//     super();


//     this.state = {
//       monsters: [],
//       searchField: ''
//     };

//   }

//   mounting is the first time it is loaded.
//   app will fetch this information from the API
//   called. 
//   componentDidMount() {

//   } 

//   this is an optimization improvement that allows
//   this to not have to run more then its called
//   by being outside the render method

//   this will lowercase the search so it easily readable by everything

//   this returns the filtered results

//   onSearchChange = (event) => {

//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     })

//   }

//   explicity telling the component what to render

//   this is an optimization tactic that allows you to not 
//   constantly use this ot this.state and is more readable

  
//   this uses includes to search the string you entered against
//   the monster.name to see if it returns true or false
//   *** event.target.value is the search string ****

//   /* this is the search box for filtering the monsters shown */

//   render () {

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">

//         <h1 className='app-title'>Max's Monster Rolodex</h1>

//         <SearchBox 
//         className = 'monsters-search-box'
//         onChangeHandler={onSearchChange} 
//         placeholder='Search Monsters'/>
//         <CardList monsters={filteredMonsters} />

//       </div>
//     );
//   }   
// }

export default App;
