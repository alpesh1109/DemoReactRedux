
import React from 'react';
import {MyProvider,MyConsumer} from './contextdemo';
class App extends React.Component {

    render() {
        return (
            <MyProvider>
                <p>i m app</p>
                <MyConsumer/>
            </MyProvider>
        );
    }
}
export default App;