//const Index = () => import('./components/dummy/index.vue');
//const Formdata = () => import('./components/dummy/form.vue');
const Login = () => import('./components/content/account/login.vue');
const Forgot = () => import('./components/content/account/forgot.vue');
const Dashboard = () => import('./components/content/dashboard/index.vue');
const Colors = () => import('./components/content/dashboard/colors.vue');
const UserIndex = () => import('./components/content/users/index.vue');
const UserForm = () => import('./components/content/users/form.vue');
const CategoryIndex = () => import('./components/content/category/index.vue');
const CategoryForm = () => import('./components/content/category/form.vue');
const ItemIndex = () => import('./components/content/item/index.vue');
const ItemForm = () => import('./components/content/item/form.vue');
const CustomerIndex = () => import('./components/content/customer/index.vue');
const CustomerForm = () => import('./components/content/customer/form.vue');
const OrderIndex = () => import('./components/content/orders/index.vue');
const OrderForm = () => import('./components/content/orders/form.vue');
const ChangePassword = () => import('./components/content/account/changepassword.vue');
const UpdateProfile = () => import('./components/content/account/changeprofile.vue');
const Dummy = () => import('./components/content/dummy.vue');

/*
	Next time, menu disimpan dalam folder content
*/

export const routes = [
    {
        name: 'Login',
        path: '/',
        component: Login,
    },
    {
        name: 'Forgot',
        path: '/forgotpassword',
        component: Forgot,
    },
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: Dashboard,
    },
    {
        name: 'Colors',
        path: '/colors',
        component: Colors,
    },
    {
        name: 'UserIndex',
        path: '/users',
        component: UserIndex,
    },
    {
        name: 'UserForm',
        path: '/users/:status/:id',
        component: UserForm,
    },
    {
        name: 'ChangePassword',
        path: '/account/password',
        component: ChangePassword,
    },
    {
        name: 'UpdateProfile',
        path: '/account/profile',
        component: UpdateProfile,
    },
    {
        name: 'Dummy',
        path: '/dummy',
        component: Dummy,
    },
    {
        name: 'CategoryIndex',
        path: '/category',
        component: CategoryIndex,
    },
    {
        name: 'CategoryForm',
        path: '/category/:status/:id',
        component: CategoryForm,
    },
    {
        name: 'ItemIndex',
        path: '/item',
        component: ItemIndex,
    },
    {
        name: 'ItemForm',
        path: '/item/:status/:id',
        component: ItemForm,
    },
    {
        name: 'CustomerIndex',
        path: '/customer',
        component: CustomerIndex,
    },
    {
        name: 'CustomerForm',
        path: '/customer/:status/:id',
        component: CustomerForm,
    },
    {
        name: 'OrderIndex',
        path: '/Order',
        component: OrderIndex,
    },
    {
        name: 'OrderForm',
        path: '/Order/:status/:id',
        component: OrderForm,
    },
    //ini untuk template saja
    // {
    //     name: 'Index',
    //     path: '/',
    //     component: Index,
    // },
	// {
    //     name: 'Formdata',
    //     path: '/:status/:id',
    //     component: Formdata,
    // },
]