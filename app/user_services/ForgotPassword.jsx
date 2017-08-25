import React from 'react';
import {doAjax} from '../utils/utils';
import UserField from '../field/UserField';

export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);

    this.forgotPassword = this.forgotPassword.bind(this);
    this.triggerForgotPassword = this.triggerForgotPassword.bind(this);
    this.parseForgotPassword = this.parseForgotPassword.bind(this);
    this.parseForgotPasswordError = this.parseForgotPasswordError.bind(this);
    this.updateEmailAddress = this.updateEmailAddress.bind(this);

    this.state = {
      showMessage: false,
      message: "",
      messageClass: "",
      emailAddress: "",
      showConfirmationMessage: false,
      confirmationMessage: ""
    };
  }

  triggerForgotPassword(event) {
    if (event.key == 'Enter') {
      this.forgotPassword();
    }
  }

  updateEmailAddress(event) {
    var emailAddress = event.target.value;
    if (emailAddress.trim() != '') {
      this.setState({"emailAddress": emailAddress.trim()});
    }
  }

  forgotPassword() {
    this.setState({"message": "", "showMessage": false});
    doAjax('POST', '/doecode/api/user/forgotpassword', this.parseForgotPassword, {
      'email': this.state.emailAddress
    }, this.parseForgotPasswordError, 'json');
  }

  parseForgotPassword() {
    this.setState({"showConfirmationMessage": true, confirmationMessage: "An email containing a reset link has been sent to you."});
  }
  parseForgotPasswordError(data) {
    var errorMsg = "";
    data.responseJSON.errors.forEach(function(item) {
      errorMsg += (item + "\n");
    });
    this.setState({"message": errorMsg, "showMessage": true, "messageClass": "has-error"})
  }

  render() {
    return (
      <div className="row not-so-wide-row">
        <div className="col-md-4"></div>
        <div className="col-md-4 col-xs-12 center-text">
          <br/> {this.state.showConfirmationMessage && <div className="row">
            <div className='col-xs-12'>
              <label className='static-content-title'>{this.state.confirmationMessage}</label>
            </div>
          </div>}
          {!this.state.showConfirmationMessage && <div>
            <div className="row">
              <div className="col-xs-12">
                {this.state.showMessage && <div className={this.state.messageClass}>
                  <label className="control-label">{this.state.message}</label>
                </div>}
                <span>
                  <label className='static-content-title' htmlFor='email-address'>Please enter your email address to recover your password</label>
                  <input type='text' id='email-address' className='form-control input-lg' onChange={this.updateEmailAddress} onKeyPress={this.triggerForgotPassword}/>
                  <br/>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <button type='button' className='btn btn-primary btn-lg' onClick={this.forgotPassword}>Submit</button>
              </div>
            </div>
          </div>}
        </div>
        <div className="col-md-4"></div>
      </div>
    );
  }
}
