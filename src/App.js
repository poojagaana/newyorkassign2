import React from 'react';
import Api from './components/Api'
import Filter from './components/Filter'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      obj : []
    }
  }

  componentDidUpdate(){
    console.log(this.state.obj)
  }

  getFilterData = (o) => {
    this.setState({
      obj:o
    })
  }

  render() {
    return (
      <div className="container">
        New York Times Articles
        <div className='row'>
          <div className='col'><Api filterData = {this.state.obj}/></div>
          <div className='col'><Filter getFilterData={this.getFilterData}/></div>
        </div>
      </div>
    );
  }

}

export default App;
