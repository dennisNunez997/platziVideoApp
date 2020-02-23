/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Text
} from 'react-native';

import Home from './source/screens/containers/home';
import Header from './source/sections/components/header';

import SuggestionList from './source/videos/containers/suggestion-list';

import API from './utils/utils';

import CategoryList from './source/videos/containers/category-list';

type Props = {};

export default class App extends Component<Props>
{
  state = {
    suggestionList: [],
    categoryList: []
  }
  async componentDidMount(){
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    console.log(movies);
    console.log(categories);
    this.setState({
      suggestionList: movies,
      categoryList: categories,
    })
  }
  render()
  {
    return(
      <Home>
        <Header />
        <Text>buscador</Text>
        <Text>categoria</Text>
        
        <CategoryList
        list = {this.state.categoryList}/>

        <SuggestionList
        list = {this.state.suggestionList}/>

        
      </Home>

    );
  }

}


