import React, { Component } from 'react';

const styles={
  root:{
    textAlign:'center'
  },
  alert:{
    fontSize: 80,
    fontWeight: 'bold',
    color: '#e9ab2d'
  }
};

class ServerError extends Component{
    render(){
        return (
            <div style={styles.root}>
            <div style={styles.alert}>Alert!</div>
            <h1>oops,we have a problem</h1>
            <p>Sorry,not found</p>
            </div>
        )
    }
}

export default ServerError