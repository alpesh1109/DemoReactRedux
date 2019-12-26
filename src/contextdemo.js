import React from 'react';
const MyContext = React.createContext();
class MyProvider extends React.Component {
    state = {
        name: 'Jem',
        age: 30
    }
    render() {
        return (
            <MyContext.Provider value={{ state: this.state }}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

class MyConsumer extends React.Component {

    render() {
        return (
            <MyContext.Consumer>
                {(context) => (
                    <React.Fragment>
                        <p>i'm {context.state.name}</p>
                        <p>Your age {context.state.age}</p>
                    </React.Fragment>
                )}
            </MyContext.Consumer>
        );
    }
}
export { MyProvider, MyConsumer };