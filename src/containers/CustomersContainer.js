import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import AppFrame from '../components/AppFrame.component';
import Customerslist from '../components/Customerslist.component';
import CustomersActions from '../components/CustomersActions.component';
import {fetchCustomers} from './../actions/fecthCustomers'
import { getCustomers } from './../selectors/customers'



class CustomersContainer extends Component {

   componentDidMount() {
       this.props.fetchCustomers()
   }
   
   
   
    handleAddNew = () => {
        this.props.history.push('/customers/new')
    }

    renderBody = customers => (
        <div>
            
            <Customerslist
            customers={customers}
            urlPath={'customers/'}
            >
        
            </Customerslist>

            <CustomersActions>
                <button onClick={this.handleAddNew} >Nuevo cliente</button>
            </CustomersActions>
        </div>
    )

    render() {
        return (
            <div>
                <AppFrame
                header={'listado de clientes'}
                body={this.renderBody(this.props.customers)}>
                    
                </AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
};

CustomersContainer.defaultProps = {
    customers: []
}    

const mapStateToProps = state => ({
    customers: getCustomers(state)
})
export default withRouter(connect(mapStateToProps, {fetchCustomers})(CustomersContainer))