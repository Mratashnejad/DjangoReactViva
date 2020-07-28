import React from 'react';
import { Route } from 'react-router-dom';
import ExtrashiftList from './containers/ExtrashiftListView';




const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ExtrashiftList} />
        <Route exact path='/:ExtrashiftID' component={ExtrashiftList} />
        
    </div>

);
export default BaseRouter;