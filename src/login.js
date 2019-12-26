import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { simpleAction } from './Actions/simpleAction';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      email: '',
      pwd: '',
      flag: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  simpleAction = (event) => {
    this.props.simpleAction();
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (event) => {
    var email = this.state.email;
    var password = this.state.pwd;
    if(email !== '' && password !== ''){
      this.props.simpleAction(email, password);
      this.setState({
        flag: true
      })
    }
    event.preventDefault();
  }
  render() {
    //const { emp } = this.props;
    if (this.state.flag === false) {
      return (
        <div class="row" style={{ marginTop: '10%' }}>
          <div class="col-sm-3"></div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <form>
                  <div class="container">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" name="email" id="email" value={this.state.email} onChange={this.handleChange} required />

                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" name="pwd" id="pwd" value={this.state.password} onChange={this.handleChange} required />
                    <button type="submit" style={{ marginTop: '1%' }} class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-sm-3"></div>
        </div>
      );
    }
    if (this.state.flag === true) {
      return (
        <Redirect to='/Note' />
      );
    }
  }
}
Login.propTypes = {
  emp: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  emp: state.user.result
})

export default connect(mapStateToProps, { simpleAction })(Login);
