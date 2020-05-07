import React, { Component } from 'react';
import Header from './Component/Header';
import Footer from './Component/Foote';
import index from './Component/index';
import NotFound from './Component/NotFound';
import mainpage from './Component/MainPage';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './Redux/Store/store';


// import textfields from './Component/textfields' ;
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        status:false
    }
   
}
// componentWillMount() {

//   this.props.sendToActionFORSAVE();


//  }
  render() {
    const {status} =this.state; 
    return (
      <Provider store = { store } >
      
      <BrowserRouter>
      <div>
        
        <Header />
        
        <Switch>
          
          <Route exact path='/' component={index} />
          <Route  path='/mainpage' component={mainpage} />
        
        
          <Route  component={NotFound}/>

          
          
          {/* <Route path="/UpdateForm/:taskID" render={(props) => {
return (
   <UpdateForm taskID={props.match.params.taskID} changeTitle={this.changeTitle} />
);
}} /> */}

         

            {/* <PrivateRoute path='/newtodo' component={Newtodo} Auth={true} />  */}
              
          {/* <PrivateRoute path='/user' component={User} Auth={status} />
              <PrivateRoute path='/admin' component={Admin} Auth={status} /> */}

          
        </Switch>
        
        <Footer />
        {/* <AddCounter/>
        <Counter/> */}
      </div>
    </BrowserRouter>
    </Provider>
    )
  }
}

export default App;
