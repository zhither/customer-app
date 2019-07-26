import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form'
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from './CustomersActions.component'
import  { Prompt } from 'react-router-dom'

// const isRequired = value => (
//     !value && 'este campo es requerido'
// )

const isNumber = value => (
    isNaN(Number(value)) && 'el campo debe ser un numero'
)

const validate = values => {
    const  error = {}

    if(!values.name) {
        error.name = 'El campo nombre es requerido'
    }

    if(!values.dni){
        error.dni = 'El dni es un campo obligatorio'
    }

    return error

}

const MyField = ({input, meta, type, label, name}) => (

    <div>
        <label htmlFor={name}>{label}</label>

        <input {...input} type={!type ? 'text': type}/>
        {
             meta.error && <span>{meta.error}</span>
        }
    </div>
)

const toNumber = value => value && Number(value)

const toUpper = value => value &&  value.toUpperCase()
const CustomerEdit = ({handleSubmit, submitting, onBack, pristine, submitSucceeded}) => {
    return (
        <div>
            <h2>Edicion del cliente</h2>
            <form onSubmit={handleSubmit}>
                <Field 
                    name='name' 
                    component={MyField} 
                    type='text'
                    label='Nombre'
                    parse={toUpper}></Field>
                
                <Field name='dni' 
                    component={MyField}
                    type='text'
                    validate={isNumber}
                    label='Dni'></Field>
                   
                <Field 
                    name='age' 
                    component={MyField}
                    type='number'
                    validate={isNumber}
                    label='Edad'
                    parse={toNumber}></Field>
              
                <CustomersActions>
                    <button type='submit' disabled={submitting}>Aceptar</button>
                    <button type= 'button' onClick={onBack}>cancelar</button>
                </CustomersActions>
                <Prompt
                    when={!pristine && !submitSucceeded}
                    message="se perderan los datos si continua">
                </Prompt>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};


const CustomerEditForm = reduxForm({form: 'CustomerEdit', validate})(CustomerEdit)

export default setPropsAsInitial(CustomerEditForm)