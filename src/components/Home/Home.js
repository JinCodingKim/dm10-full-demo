import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { retrieveUser, updateUsername } from "../../ducks/user";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.retrieveUser();
  }

  handleChange(val) {
    this.setState({ textInput: val });
  }

  handleSubmit() {
    this.props.updateUsername(this.state.textInput, this.props.user.authid);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <h1>Welcome To The Home Page</h1>
          <Link to="/login">
            <button>Login Page</button>
          </Link>
          <input
            type="text"
            onChange={e => this.handleChange(e.target.value)}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
        {this.props.isLoading && (
          <div>
            <h1>Loading Content....</h1>
          </div>
        )}
        {this.props.user && <div>{this.props.user.name}</div>}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { retrieveUser, updateUsername })(Home);
