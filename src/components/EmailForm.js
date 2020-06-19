import React, { Component } from 'react';

export class EmailForm extends Component {
  constructor() {
    super();
    this.state = { message: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      message: "You'll be the first to know when we go live!",
    });
    setTimeout(() => {
      this.setState({ message: '' });
    }, 3000);
  }

  render() {
    const { message } = this.state;
    return (
      <section class={'signup-section'}>
        <p>{'Sign up and be the first to know when we go live!'}</p>
        <form
          id="signup-form"
          onSubmit={this.onSubmit}
          method="post"
          action="#"
        >
          <input type="text" name="name" id="name" placeholder="First Name" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
          <input type="submit" value="Sign Up" />
        </form>
        <span className={`${message ? 'visible success' : ''} message`}>
          {message}
        </span>
      </section>
    );
  }
}

export default EmailForm;
