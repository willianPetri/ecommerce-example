import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Product from './components/Product';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import man1 from './images/products/men/product1.jpg'
import man2 from './images/products/men/product2.jpg'
import man3 from './images/products/men/product3.jpg'
import man4 from './images/products/men/product4.jpg'
import women1 from './images/products/women/product1.jpg'
import women2 from './images/products/women/product2.jpg'
import women3 from './images/products/women/product3.jpg'
import women4 from './images/products/women/product4.jpg'

function App() {
  return (
    <div className="container mx-auto p-5">
      <Header />
      <Hero />

      <div className="my-20">
        <div className="flex flex-row justify-between my-5">
          <h2 className="text-3xl">Men's collection</h2>
          <a href="/" className="flex flex-row text-lg hover:text-purple-700">
            View All
            <i className='h-4 w-4 ml-2 fas fa-arrow-right mt-1' />
          </a>
        </div>
        <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
          <Product image={man1} title='Mens T-Shirt' />
          <Product image={man2} title='Slim Khaki Tousers' />
          <Product image={man3} title='Nike Shoes' />
          <Product image={man4} title='Wirst Watch' />
        </div>
      </div>

      <div className="my-20">
        <div className="flex flex-row justify-between my-5">
          <h2 className="text-3xl">Women's collection</h2>
          <a href="/" className="flex flex-row text-lg hover:text-purple-700">
            View All
            <i className='h-4 w-4 ml-2 fas fa-arrow-right mt-1' />
          </a>
        </div>
        <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
          <Product image={women1} title='V Neck Tassel Cape' />
          <Product image={women2} title='Printed Wrap Dress' />
          <Product image={women3} title='Blue Denim Dress' />
          <Product image={women4} title='High Waist Denim Skirt' />
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>   
  );
}

export default App;
