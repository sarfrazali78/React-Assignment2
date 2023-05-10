
import React from 'react';
import './App.css';
import Card from './component/scrolbar.js';
// import Scrollbar from './component/scrollbar';
const users=[{
  image: 'https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  designation: 'Co founder',
  name: 'Silly Hex',
  jobDescription: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ',

},
{
  image:'https://images.pexels.com/photos/16564746/pexels-photo-16564746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  designation: 'Founder',
  name:'Sahil varma',
  jobDescription:'this is the one who build the empire',

},
{
  image:'https://images.pexels.com/photos/16645005/pexels-photo-16645005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  designation:'Manager',
  name:'Kuldeep Kumar',
  jobDescription:'work on team project'
},
{
  image:'https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  designation : 'Artist',
  name:'Sushant Bhusan',
  jobDescription:'he is also a good artist of the entire industry',
},
{
  image:'https://images.pexels.com/photos/5543538/pexels-photo-5543538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  designation : 'Project Leader',
  name: 'Hun sing',
  jobDescription: 'he is a good knowledge about the all industry project',
},
{
  image:'https://images.pexels.com/photos/5265000/pexels-photo-5265000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  designation : 'Scientist',
  name: 'Einstine',
  jobDescription:'great Scientist in the world',
},
{
  image:'https://images.pexels.com/photos/12659913/pexels-photo-12659913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  designation : 'Singer',
  name : 'Macc deeee',
  jobDescription : 'Great Musician '
},

]

function App() {
  return (
    <div className="App">
      {users.map((user)=>(<Card name={user.name}
            image={user.image}
            designation={user.designation}
            jobDescription={user.jobDescription}
      />))}
    {/* <Scrollbar/> */}
  
    </div>
  );
}

export default App;
