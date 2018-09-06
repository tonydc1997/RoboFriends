import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import './App.css';


class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }


  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
        <div className='tc'>
          <Header />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            { isPending ? <h1>Loading</h1> :
              <ErrorBoundary>
                <CardList robots={filteredRobots}/>
              </ErrorBoundary>
            }
          </Scroll>
        </div>
      );
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(App);
