import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Pizza from './Pizza';
import Cart from './Cart';
import PizzaModal from './PizzaModal';

const Home = () => {
  return (
    <div className="w-3/5 mx-auto">
      <Header />

      <div className="text-cesnter pt-16 pb-32 text-4xl">Choose a pizza you'd like to order!</div>

      <div className="flex">
        <div className="w-3/4 grid grid-cols-3 gap-10 self-start">
          <Pizza name="Bresaola" description="Something, something" price="15.00" />
          <Pizza name="Capriciosa" description="Else, else" price="12.00" />
          <Pizza name="Vegan" description="Wowo, wow" price="10.00" />
        </div>
        <div className="w-1/4">
          <Cart />
        </div>
      </div>

      <PizzaModal />

      <Footer />
    </div>
  );
};

export default Home;
