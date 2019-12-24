import React from 'react'
import {Router, Route , Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import Homepage from "../pages/Homepage/homepage.component";
import InformationPage from "../pages/Information/information.component";
import UserAccountPage from "../pages/UserAccount/userAccount.component";
import ComparePage from "../pages/Compare/compare.component";
import InventoryPage from "../pages/Inventory/inventory.component";
import Header from "../components/Header/header.component";
import AddListingPage from "../pages/AddListingPage/add-listing.component";
export const history = createBrowserHistory()
const AppRouter = ()=>{

    return (
        <Router history={history}>
            <Header/>
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route exact path='/inventory' component={InventoryPage}/>
                <Route exact path='/information' component={InformationPage}/>
                <Route exact path='/users/:userName' component={UserAccountPage}/>
                <Route exact path='/compare' component={ComparePage}/>
                <Route exact path='/add-listing' component={AddListingPage}/>

            </Switch>
        </Router>

    )
}
export default AppRouter