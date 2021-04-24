import {Route, Switch} from 'react-router-dom'
import MainLayout from './components/layouts/MainLayout'
import About from './pages/about/About'
import Cart from './pages/cart/Cart'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import Manage from './pages/manage/Manage'
import PageNotFound from './pages/pagenotfound/PageNotFound'


const AppRoute = ({component: Component, layout: Layout, ...rest}) => (
    <Route {...rest} render={ props => (
         <Layout><Component {...props}></Component></Layout> 
    )}></Route>
 )

const Routes = () => {
     return (
        <Switch>
            <AppRoute path="/" exact={true} layout={MainLayout} component={Home} />
            <AppRoute path="/manage" exact={true} layout={MainLayout} component={Manage} />
            <AppRoute path="/cart" exact={true} layout={MainLayout} component={Cart} />
            <AppRoute path="/about" exact={true} layout={MainLayout} component={About} />
            <AppRoute path="/contact" exact={true} layout={MainLayout} component={Contact} />
            <Route component={PageNotFound} />
        </Switch>
    )
}

export default Routes
