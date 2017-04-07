import React from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import {observer,inject} from "mobx-react";
import 'react-select/dist/react-select.css';
import 'react-datepicker/dist/react-datepicker.css';

@inject("dataStore") @observer
export default class InputHelper extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleDateBlur = this.handleDateBlur.bind(this);
 }


  handleBlur(event) {
	  this.props.dataStore.validateOnBlur(this.props.field,event.target.value);
  }

  handleDateBlur() {

    this.props.dataStore.validateOnBlur(this.props.field,this.props.dataStore.getValue(this.props.field));
  }

  handleChange(event) {
	  this.props.dataStore.updateField(this.props.field,event.target.value);
  }

  handleDateChange(date) {
		this.props.dataStore.updateField(this.props.field,date);
  }

  handleRadioChange(event) {
	  this.props.onChange(this.props.field,event.target.value);
  }

  handleSelectChange(value) {
	  if (this.props.multi) {

		let retArray = [];
	  	if (value.trim())
	  		retArray = value.split(',');
	  	this.props.dataStore.updateField(this.props.field,retArray);
	  } else {
		  this.props.updateField(this.props.field,value);
	  }
  }

  render() {
	  const labelStyle = this.props.labelStyle != undefined ? this.props.labelStyle : "col-sm-2 control-label";
	  const divStyle = this.props.divStyle != undefined ? this.props.divStyle : "col-sm-4 ";

	  let input = null;
	  const elementType = this.props.elementType;

	  const error = this.props.dataStore.getValidationStatus(this.props.field);
	  const errorStyle = error ? "has-error" : "";

	  if (elementType === 'display') {
		  input = this.props.dataStore.getValue(this.props.field);
	  }
	  else if (elementType === 'input') {
		input = <input type="text" className="form-control" value={this.props.dataStore.getValue(this.props.field)} onChange={this.handleChange} onBlur={this.handleBlur} />
	  }
	  else if (elementType === 'select') {
	    let ph = this.props.placeholder ? this.props.placeholder : "Select any that apply";
	    let val = this.props.dataStore.getValue(this.props.field);
	    if (this.props.multi)
	    	val = val.slice();
	    const errorClass = error ? "field-error" : ""
      	input = <Select className={errorClass} allowCreate={this.props.allowCreate} multi={this.props.multi} options={this.props.options} simpleValue placeholder={ph} onChange={this.handleSelectChange} value={val} />
	  }
	  else if (elementType === 'textarea') {

		 input = <textarea className="form-control" value={this.props.dataStore.getValue(this.props.field)} onChange={this.handleChange} onBlur={this.handleBlur} />
	  }
	  else if (elementType === 'radio') {
			 input = <input type="radio" checked={this.props.checked} name={this.props.field} value={this.props.value} onChange={this.handleRadioChange} />
	  }
	  else if (elementType === 'date') {
		  input = <DatePicker placeholderText="Click to select a date" selected={this.props.dataStore.getValue(this.props.field)} onChange={this.handleDateChange} onBlur={this.handleDateBlur} showMonthDropdown showYearDropdown dropdownMode="select"/>
	  }



	  return(
      <div className={errorStyle}>
      {this.props.label &&
      <label className={labelStyle}>
        {this.props.label}
      </label>
      }
      <div className={divStyle}>
        {input}
      </div>
      </div>
    );
  }

}
