import React, { lazy, Suspense } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Header from "../components/Header/header.component";
import Footer from '../components/footer/footer.component'
import PrivateRoute from './private-router.component';
import Spinner from '../components/spinner/spinner.component'
export const history = createBrowserHistory("../pages/Homepage/homepage.component")

const Homepage = lazy(() => import("../pages/Homepage/homepage.component"))
const InformationPage = lazy(() => import("../pages/Information/information.component"))
const UserAccountPage = lazy(() => import("../pages/user-account/user-account.component"))
const ComparePage = lazy(() => import("../pages/Compare/compare.component"))
const InventoryPage = lazy(() => import("../pages/Inventory/inventory.component"))
const AddListingPage = lazy(() => import('../pages/AddListingPage/add-listing.component'))
const SigninSignupPage = lazy(() => import("../pages/signup-signin-page/signup-signin-page.component"))


const AppRouter = () => {

    return (
        <Router history={history}>
            <Header />
            <Switch>
                <Suspense fallback={<Spinner/>}>
                    <Route exact path='/' component={Homepage} />
                    <Route exact path='/inventory' component={InventoryPage} />
                    <Route exact path='/information' component={InformationPage} />
                    <PrivateRoute exact path='/:username/my-account' component={UserAccountPage} />
                    <Route exact path='/compare' component={ComparePage} />
                    <PrivateRoute exact path='/add-listing' component={AddListingPage} />
                    <Route exact path='/signin-signup' component={SigninSignupPage} />
                </Suspense>
            </Switch>
            <Footer />
        </Router>

    )
}
export default AppRouter