import React, {Component} from 'react';
import Accounts from './components/accounts';

class App extends Component {
    render() {
        return (
            <Accounts accounts={this.state.accounts} />
        )
    }

    state =  {
      accounts: [],
    };
    
    componentDidMount() {
        fetch('http://172.19.199.131:8080/datadump/accounts')
            .then(res => res.json())
            .then((data) => {
                this.setState({ accounts: data.accounts })
            })
            .catch(console.log)
    }
}
export default App;