import React, { Component } from 'react';
import './App.css';

class App extends Component {

  updateSize() {
    console.log("updating size");
    var columns = document.getElementsByClassName("mainColumn");

    for(var j = 0; j < columns.length; j ++) {
      var column = columns[j];

      column.style.zIndex = 1;

      var maxHeight = column.offsetHeight;
      var height = 0;
      for (var i = 0; i < (column.childNodes.length - 1); i++) {
        height += column.childNodes[i].offsetHeight;
      }
      column.childNodes[column.childNodes.length - 1].style.height = (maxHeight - height) + 'px';
    }
  }

  componentDidMount() {
    this.updateSize();
    window.addEventListener('resize', this.updateSize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSize)
  }

  render() {
    return (
      <div className="App">

        <div className="summaryCard container">
          <div className="row">
            <div className="col-sm mainColumn">
              <div className="row">
                <div className="title col-4">code</div>
                <div className="value col-8">ABCDEFGHIJK</div>
              </div>
              <div className="row">
                <div className="title col-4">Activation Code</div>
                <div className="value col-8">n/a - promotion is auto-applied</div>
              </div>
              <div className="row">
                <div className="title col-4">Description</div>
                <div className="value col-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
              </div>
              <div className="row">
                <div className="title col-4">Discount</div>
                <div className="value col-8">20%</div>
              </div>
            </div>

            <div className="col-sm mainColumn">
              <div className="row">
                <div className="title col-4">Form Of Payment</div>
                <div className="value col-8">true</div>
              </div>
              <div className="row">
                <div className="title col-4">Inventory Enabled</div>
                <div className="value col-8">true</div>
              </div>
              <div className="row">
                <div className="title col-4">Published Date</div>
                <div className="value col-8">15 Sep, 8:56 AM(2013)</div>
              </div>
              <div className="row">
                <div className="title col-4">Return All Fares</div>
                <div className="value col-8">true</div>
              </div>
              <div className="row">
                <div className="title col-4">Ticket Designator</div>
                <div className="value col-8">ABCDEFJHIJKLMNOP1234567890</div>
              </div>

            </div>
          </div>
        </div>


      </div>




    );
  }
}

export default App;
