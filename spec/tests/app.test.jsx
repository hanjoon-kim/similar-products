import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ProductList from '../../client/src/components/ProductList';
import Product from '../../client/src/components/Product';
import App from '../../client/src/index';
import idObj from 'identity-obj-proxy';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('App Component', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(<App />)
        .find('div.top')
        .exists()
        .toBe(true)
    );
  });
  it('renders carousel', () => {
    expect(
      shallow(<App />)
        .find('div.main')
        .exists()
        .toBe(true)
    );
  });
  it('renders buttons', () => {
    expect(
      shallow(<App />)
        .find('button.button')
        .exists()
        .toBe(true)
    );
  });
  it('renders page count', () => {
    expect(
      shallow(<App />)
        .find('div.page')
        .exists()
        .toBe(true)
    );
  });
});

describe('ProductList Component', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(<ProductList />)
        .find('div.container')
        .exists()
        .toBe(true)
    );
  });
});

describe('Product Component', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(<Product />)
        .find('div.product')
        .exists()
        .toBe(true)
    );
  });
  it('renders number of reviews', () => {
    expect(
      shallow(<Product />)
        .find('div.reviews')
        .exists()
        .toBe(true)
    );
  });
  it('renders price', () => {
    expect(
      shallow(<Product />)
        .find('div.price')
        .exists()
        .toBe(true)
    );
  });
  it('renders isPrime', () => {
    expect(
      shallow(<Product />)
        .find('img.prime')
        .exists()
        .toBe(true)
    );
  });
});

//identity object proxy!
