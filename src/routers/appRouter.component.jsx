import React, { lazy, Suspense } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Header from "../components/Header/header.component";
import Footer from '../components/footer/footer.component'
import PrivateRoute from './private-router.component';
import Spinner from '../components/spinner/spinner.component'
import ErrorBounday from '../components/error-boundary/error-boundary.component';
// import Homepage from '../pages/Homepage/homepage.component'
// import UserAccountPage from '../pages/user-account/user-account.component'
// import ComparePage from '../pages/Compare/compare.component'
// import InventoryPage from '../pages/Inventory/inventory.component'
// import AddListingPage from '../pages/AddListingPage/add-listing.component'
// import SigninSignupPage from '../pages/signup-signin-page/signup-signin-page.component'

export const history = createBrowserHistory("../pages/Homepage/homepage.component")

const Homepage = lazy(() => import("../pages/Homepage/homepage.component"))
const UserAccountPage = lazy(() => import("../pages/user-account/user-account.component"))
const ComparePage = lazy(() => import("../pages/Compare/compare.component"))
const InventoryPage = lazy(() => import("../pages/Inventory/inventory.component"))
const AddListingPage = lazy(() => import('../pages/AddListingPage/add-listing.component'))
const SigninSignupPage = lazy(() => import("../pages/signup-signin-page/signup-signin-page.component"))


const AppRouter = () => {

    return (
        <ErrorBounday>
            <Suspense fallback={<Spinner />}>
                <Router history={history}>
                    <Header />
                    <Switch>
                        {/* <ErrorBounday> */}
                        <Route exact path='/' component={Homepage} />
                        <Route exact path='/inventory' component={InventoryPage} />
                        <PrivateRoute exact path='/:username/my-account' component={UserAccountPage} />
                        <Route exact path='/compare' component={ComparePage} />
                        <PrivateRoute exact path='/add-listing' component={AddListingPage} />
                        <Route exact path='/signin-signup' component={SigninSignupPage} />
                        {/* </ErrorBounday> */}
                    </Switch>
                    <Footer />
                </Router>
            </Suspense>
        </ErrorBounday>
    )
}
export default AppRouter