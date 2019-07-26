import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame.component';
import CustomerEdit from '../components/CustomerEdit.component'
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom'
import { insertCustomers } from '../actions/insertCustomers';


class NewCustomerContainer extends Component {

    handleSubmit = values => {
        this.props.insertCustomers(values)
    }

    handleOnBack = () => { this.props.history.goBack()}

    handleOnSubmitSuccess = () => {this.props.history.goBack()}

    renderBody = () => {

        return <CustomerEdit
        onSubmit={this.handleSubmit}
        onSubmitSuccess={this.handleOnSubmitSuccess}
        onBack={this.handleOnBack}>

        </CustomerEdit>
    }

        render() {
            return (
                <div>
                    <AppFrame 
                    header={'Edidion del cliente'}
                    body={this.renderBody()}>
                    </AppFrame>
                </div>
            );
        }
    }

    NewCustomerContainer.propTypes = {
        insertCustomers: PropTypes.func.isRequired,
    };

    export default withRouter(connect(null, {insertCustomers})(NewCustomerContainer));