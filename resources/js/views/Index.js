import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pizza from '../components/Pizza';
import Cart from '../components/Cart';
import PizzaModal from '../components/PizzaModal';
import { connect } from 'react-redux';
import { getAllPizzas } from '../actions';

class Index extends Component {
  componentDidMount() {
    this.props.getAllPizzas();
  }

  render() {
    return (
      <div className="px-10 xl:px-0  max-w-screen-2xl mx-auto">
        <Header />

        <div className="text-cesnter py-12 text-4xl">Choose a pizza you'd like to order!</div>

        <div className="flex">
          <div className="w-3/4 grid grid-cols-3 gap-20 gap-y-10 self-start">
            {this.props.pizzas.map(pizza => (
              <Pizza
                name={pizza.name}
                description={pizza.description}
                price_eur={pizza.price_eur}
                price_dollar={pizza.price_dollar}
                key={pizza.id}
              />
            ))}
          </div>
          <div className="w-1/4">
            <Cart />
          </div>
        </div>

        <PizzaModal />

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pizzas: state.pizzas
});

export default connect(mapStateToProps, { getAllPizzas })(Index);
