import React from 'react'
import {Router, Route , Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import Homepage from "../pages/Homepage/homepage.component";
import InformationPage from "../pages/Information/information.component";
import UserAccountPage from "../pages/user-account/user-account.component";
import ComparePage from "../pages/Compare/compare.component";
import InventoryPage from "../pages/Inventory/inventory.component";
import Header from "../components/Header/header.component";
import AddListingPage from "../pages/AddListingPage/add-listing.component";
import SigninSignupPage from "../pages/signup-signin-page/signup-signin-page.component";
// import MyParkingPage from '../pages/my-parking/my-parking.component'
import Footer from '../components/footer/footer.component'
import PrivateRoute from './private-router.component';

export const history = createBrowserHistory()
const AppRouter = ()=>{

    return (
        <Router history={history}>
            <Header/>
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route exact path='/inventory' component={InventoryPage}/>
                <Route exact path='/information' component={InformationPage}/>
                <PrivateRoute exact path='/:username/my-account' component={UserAccountPage}/>
                <Route exact path='/compare' component={ComparePage}/>
                {/* <PrivateRoute exact path='/:username/my-listings' component={MyListingsPage}/> */}
                {/* <PrivateRoute exact path='/:username/my-parking' component={MyParkingPage}/> */}
                <PrivateRoute exact path='/add-listing' component={AddListingPage}/>
                <Route exact path='/signin-signup' component={SigninSignupPage}/>
            </Switch>
            <Footer/>
        </Router>

    )
}
export default AppRouter