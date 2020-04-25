import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pizza from '../components/Pizza';
import Cart from '../components/Cart';
import PizzaModal from '../components/PizzaModal';

const Index = () => {
  return (
    <div className="w-3/5 mx-auto">
      <Header />

      <div className="text-cesnter py-12 text-4xl">Choose a pizza you'd like to order!</div>

      <div className="flex">
        <div className="w-3/4 grid grid-cols-3 gap-10 self-start">
          <Pizza
            name="Bresaola"
            description="Tomato sauce, mozzarella, rocket, beef prosciutto, grana padano, olive oil"
            price="15.00"
          />
          <Pizza
            name="Proscuitto"
            description="Tomato sauce, mozzarella, rocket, prosciutto, cherry tomato, olive oil"
            price="12.00"
          />
          <Pizza
            name="Soprano"
            description="Tomato sauce, gauda, nduja piccante, chili pepper, onion, basil, olive oil"
            price="10.00"
          />
          <Pizza name="Margherita" description="Tomato sauce, mozzarella, basil, olive oil" price="10.00" />
          <Pizza
            name="Primavera"
            description="Pesto sauce, ricotta, mozzarella, zucchini, cherry tomato, basil, olive oil"
            price="10.00"
          />
          <Pizza name="Viola" description="Tomato sauce, brie, bacon, radicchio, olive oil" price="10.00" />
          <Pizza
            name="Bresaola"
            description="Tomato sauce, mozzarella, rocket, beef prosciutto, grana padano, olive oil"
            price="15.00"
          />
          <Pizza
            name="Proscuitto"
            description="Tomato sauce, mozzarella, rocket, prosciutto, cherry tomato, olive oil"
            price="12.00"
          />
          <Pizza
            name="Soprano"
            description="Tomato sauce, gauda, nduja piccante, chili pepper, onion, basil, olive oil"
            price="10.00"
          />
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

export default Index;
