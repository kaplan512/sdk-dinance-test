import Login                             from '../../../../components/Login';
import Transactions                      from '../../../../components/Transactions';
import NotFound                          from '../../../../components/NotFound';

//
// const ALL_PERMISSIONS = ['counsellor', 'student', 'payer', 'representative', 'teacher', 'librarian'];
// const COUNSELLOR = ['counsellor'];
// const STUDENT = ['student', 'payer', 'representative'];
// const LIBRARIAN = ['librarian'];
// const TEACHER = ['teacher'];
// const REPRESENTATIVE = ['representative'];
// const PAYER = ['payer'];
// const MAIN_PERMISSIONS = ['counsellor', 'student', 'payer', 'representative'];


export default [
    // {
    //     component: Home,
    //     alias: '/',
    //     path: '/home',
    //     meta: { auth:true, permissions: ALL_PERMISSIONS }
    // },
    {
        component: Login,
        name: 'login',
        path: '/login',
        // meta: { auth:false, permissions: [] }
    },
    {
        component: Transactions,
        name: 'transactions',
        path: '/app/transactions'
        // meta: { auth:false, permissions: [] }
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