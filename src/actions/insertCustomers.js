import { INSERT_CUSTOMERS } from "../constants";
import { createAction } from 'redux-actions'
import { apiPost } from "../api";
import { urlCustomers } from "../api/urls";

export const insertCustomers = createAction(INSERT_CUSTOMERS,
     customer => apiPost(urlCustomers,customer)() )