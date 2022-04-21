import React, { Component } from 'react'
import './Home.css'
import Products from '../Components/Products/Products.js'


export default class Home extends Component {
  render() {
    return (
      <section className="home">
        <h2 className="title">
          Please SighIn to Continue on The web
        </h2>
        {/* <Products/> */}
      </section>
    )
  }
}
