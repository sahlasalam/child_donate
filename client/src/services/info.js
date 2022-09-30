
import axios from 'axios'

export function saveCustomerData(data) {
console.log(data);
return axios.post('http://localhost:4000/customer/save', data)
}

export function fetchCustomerData() {
    return axios.get('/url/apiPath')
    }
    export function getTotal(data) {
        console.log(data);
        return axios.post('http://localhost:4000/sum', data)
        }