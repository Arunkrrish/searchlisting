import React, { Component } from 'react';
import './App.css';


class ProductRow extends Component {
  render() {
    const product = this.props.product;
    const name = product.name;
    return (
      <tr>
        <td>{name}</td>
        <td>{product.salary}</td>
      </tr>
    );
  }
}

class ProductTable extends Component {
  render() {
    const filterText = this.props.filterText;
    const rows = [];
    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>salary</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
      </form>
    );
  }
}

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    }; 
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div align="center">
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <ProductTable
         products={this.props.products}
         filterText={this.state.filterText}
        />
      </div>
    );
  }
}

export const PRODUCTS = [
  {name: 'sam', salary: '$49.99'},
  {name: 'nick', salary: '$49.99'},
  {name: 'joe', salary: '$49.99'},
  {name: 'max', salary: '$99.99'},
  {name: 'mike', salary: '$399.99'},
  {name: 'sandy', salary: '$199.99'}
];

export default FilterableProductTable;