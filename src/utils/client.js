// api client
import request from 'request';
import { routes } from './constants'
import axios from 'axios';

const API_ROOT = routes.API_ROOT;

const testBackendConnection = (next) => {
    axios.get(API_ROOT + 'test_frontend').then(next)
}

const getUserData = (user, sensor, start_time) => {

}

export {
    testBackendConnection
}