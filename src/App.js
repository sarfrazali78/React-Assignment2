
import './App.css';
import React from 'react';
import Profilecard from './Component/Profilecard';

const users = [
  {
    image: 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/people19.png',
    designation: 'Developer',
    name: 'Raju Shrivastava',
    jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: 'https://media.licdn.com/dms/image/C4E03AQEBttklXxDmUQ/profile-displayphoto-shrink_800_800/0/1554506297225?e=2147483647&v=beta&t=q4iJpt2T3iUA_uFq3T0hVP9mIpVKE8DoSOFUXTPpvO0',
    designation: 'Frontend Designer',
    name: 'Salman Ali',
    jobDescription: 'he is also a master in frontend developer.',
  },
  {
    image: 'https://www.mtg-fl.com/wp-content/uploads/2019/09/sample-profile-pic1.png',
    designation: 'product Engineer',
    name: 'Charles Daiken',
    jobDescription: 'He is also a broad knowledge about the whole product launching in india.',
  },
];
function App() {
  return (
    <div className="App">
       {users.map((user) => (
        <Profilecard
          // key={user.name}
          name={user.name}
          image={user.image}
          designation={user.designation}
          jobDescription={user.jobDescription}
        />
      ))}
    </div>
  );
}

export default App;
