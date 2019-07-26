import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from './CustomersActions.component';

const CustomerData = ({ id, name, dni, age, onBack, isDeleteAllow, onDelete}) => {
    return (
        <div>
            <div className='customer-app'></div>
                <h2>Datos del cliente</h2>  
                {/* nombre */}
                <div>
                    <strong>Nombre</strong> <i>{name}</i>
                </div>
                {/* DNI */}
                <div>
                <strong>DNI</strong> <i>{dni}</i>
                </div>
                {/* age  */}
                <div>
                <strong>Edad</strong> <i>{age}</i>
                </div>
            <CustomersActions>
                <button onClick={onBack}>vovler</button>
                {isDeleteAllow && <button onClick={() => onDelete(id)}>Eliminar</button>}
            </CustomersActions>
        </div>
    );
};

CustomerData.propTypes = {

        name: PropTypes.string.isRequired,
        dni: PropTypes.string.isRequired,
        age: PropTypes.number,
        onBack: PropTypes.func.isRequired,
        isDeleteAllow: PropTypes.bool,
        onDelete: PropTypes.func,
        id: PropTypes.number.isRequired,
    
};

export default CustomerData;