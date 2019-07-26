import React, { Component } from 'react';
import AppFrame from './../components/AppFrame.component';
import CustomersActions from './../components/CustomersActions.component';

class HomeContainer extends Component {

    handleClick = () =>{
        console.log('si')
        this.props.history.push('/customers')
    }
  
    render() {
        return (
            <div>
                <AppFrame
                    header='Inicio'
                    body={
                        <div>
                            esta es la pantalla inicial 
                            <CustomersActions>
                                <button onClick={this.handleClick}>Listado de clientes</button>
                            </CustomersActions>      
                        </div>
                    }

                    ></AppFrame>
            </div>
        );
    }
}

export default HomeContainer;