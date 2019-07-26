import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AppFrame from './../components/AppFrame.component'
import { getCustomerByDni } from '../selectors/customers';
import { Route } from 'react-router-dom'
import CustomerEdit from './../components/CustomerEdit.component'
import CustomerData from './../components/CustomerData.component'
import { withRouter } from 'react-router-dom'
import { fetchCustomers } from './../actions/fecthCustomers'
import { updateCustomer } from './../actions/updateCustomers'
import { deleteCustomers } from './../actions/deleteCustomers'

class CustomerContainer extends Component {
    componentDidMount() {
        if (!this.props.customer) {
            this.props.fetchCustomers()
        }
    }
    

    handleSubmit = values => {
        const {id} = values
        return this.props.updateCustomer(id, values)
    }

    handleOnBack = () => {
        this.props.history.goBack()
    }

    handleSubmitSuccess = () => {
        this.props.history.goBack()
    }

    handleOnDelete = id => {
        console.log("handleOnDelete");
        this.props.deleteCustomers(id).then(v => {
            this.props.history.goBack();
        });
    }

    renderCustomerControl = (isEdit, isDelete) => {
        if (this.props.customer) {
            const CustomerControl = isEdit ? CustomerEdit : CustomerData;
            return <CustomerControl {...this.props.customer} 
                        onSubmit={this.handleSubmit}
                        onSubmitSuccess={this.handleOnSubmitSuccess}
                        onBack={this.handleOnBack}
                        isDeleteAllow={!!isDelete}
                        onDelete={this.handleOnDelete} />
        }

        return null;        
    }

     renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ( { match: isEdit } ) => (
                <Route path="/customers/:dni/del" children={
                    ( { match: isDelete } ) => (
                        this.renderCustomerControl(isEdit, isDelete))
            } /> )
        } />
    )
//
    render() {
        return (
            <div>
                <AppFrame
                 header={`Cliente ${this.props.dni}`}
                body={this.renderBody()}>
                </AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {

    dni: PropTypes.string.isRequired,
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired,
    deleteCustomers: PropTypes.func.isRequired,

}

const mapStateToProps = (state,props) => ({
    customer: getCustomerByDni(state, props)
})

export default withRouter(connect(mapStateToProps, {
    fetchCustomers, updateCustomer, deleteCustomers
})(CustomerContainer));
