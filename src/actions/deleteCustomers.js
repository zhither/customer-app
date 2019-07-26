import { createAction } from 'redux-actions';
import { DELETE_CUSTOMERS } from '../constants/index';
import { apiDelete } from './../api';
import { urlCustomers } from './../api/urls';

export const deleteCustomers = createAction(DELETE_CUSTOMERS, 
    id => apiDelete(urlCustomers, id)() );