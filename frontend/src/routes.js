import Index from 'containers/Home'
import Card from 'containers/CardInfo'
import AddProduct from 'containers/AddProduct'
import Registration from './containers/RegistrationForm'

export default [
    {
        path: '/',
        component: Index,
        exact: true,
    },
    {
        path: '/card/add',
        component: AddProduct,
        exact: true,
    },
    {
        path: '/card/:id',
        component: Card,
        exact: true,
    },
    {
        path: '/registration',
        component: Registration,
        exact: true,
    },

    // {
    //   path: '*',
    //   // redirect: '/',
    //   component: Index,
    //   // exact: true
    //   // render: () => <Redirect to="/" />
    // },
]
