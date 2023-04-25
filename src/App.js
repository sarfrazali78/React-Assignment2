
import './App.css';
import Profilecard from './components/card';

const productdetails = [
  {
    productId: '1',
    productpic: 'https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    productname: ' shoes',
    Brand:'Adidas',
    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price:'60$',
    Rating:''
  },
  {
    productId: '2',
    productpic: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    productname: 'shoes',
    Brand:'Reebock',
    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price:'70$',
    Rating:''
  },
  {
    productId: '3',
    productpic: 'https://images.pexels.com/photos/1161528/pexels-photo-1161528.jpeg?auto=compress&cs=tinysrgb&w=600',
    productname: 'shoes',
    Brand:'campus',
    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price:'80$',
    Rating:''
  },
]
function App() {
  return (
    <div className="App">
       {productdetails.map((user) => (
        <Profilecard
          // key={user.name}
          productId={user.productId}
          productpic={user.productpic}
          productname={user.productname}
          Brand={user.Brand}
          productDescription={user.productDescription}
          price={user.price}
          Rating={user.Rating}
        />
      ))}
    </div>
  );
}

export default App;
