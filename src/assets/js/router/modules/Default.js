import Login                             from '../../../../components/Login';
import Transactions                      from '../../../../components/Transactions';
import NotFound                          from '../../../../components/NotFound';


export default [
    {
        component: Login,
        name: 'login',
        path: '/login',
    },
    {
        component: Transactions,
        name: 'transactions',
        path: '/app/transactions'
    },
    {
        path: '/',
        redirect: '/app/transactions'
    },
    {
    path: '*',
        component: NotFound
    }
];
