import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import NewContact from './pages/New';
import EditContact from './pages/Edit';
import NewCategory from "./pages/NewCategory";

export default function Routes(){
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/new' component={NewContact}/>
            <Route exact path='/edit/:id' component={EditContact}/>
            <Route exact path='/newCategory' component={NewCategory}/>
        </Switch>
    )
}
