import React from 'react';
import MetadataField from '../field/MetadataField';
import uniqid from 'uniqid';
import {observer,Provider} from "mobx-react";

@observer
export default class DOIPanel extends React.Component {

	constructor(props) {
		super(props);
		this._prefix = "10.5072/";
		this.handleInfix = this.handleInfix.bind(this);
		this.handleReserve = this.handleReserve.bind(this);
	}
	
	handleInfix(event) {
		const infix = event.target.value;
		this.props.metadata.setValue("doi_infix", infix);		
		const doi = this.props.metadata.getValue("doi");
		const id = doi.substr(doi.lastIndexOf('/'), doi.length-1);
		let doeInfix = "DOECode.";
		if (!infix)
			doeInfix = "DOECode";
		this.props.metadata.setValue("doi", this._prefix + doeInfix + infix + id);
	}
	
	handleReserve() {
		//get if currently reserved then toggle
		const reserved = this.props.metadata.getValue("doi_status") === "RES";

		if (reserved) {
			//they are unreserving the DOI, so set doi,infix, and status to empty and add the validations back
			this.props.metadata.setValue("doi", "");
			this.props.metadata.setValue("doi_infix", "");
			this.props.metadata.setValue("doi_status", "");
			//this.props.metadata.setValidations("doi", ["DOI"]);
		} else {
			//reserve a new DOI in correct format, disabling validations first to let our own DOI pass through
			//this.props.metadata.setValidations([]);
			this.props.metadata.clearErrors("doi");
			this.props.metadata.setValue("doi", this._prefix + "DOECode/" + uniqid());
			this.props.metadata.setValue("doi_status", "RES");


		}
	}

	render() {
		const metadata = this.props.metadata;
		
		//flag indicating whether DOI has already been registered for this record
		const registered = metadata.getValue("doi_status") === "REG";
		
		//flag indicating if doi is already reserved in this session
		const reserving = metadata.getValue("doi_status") === "RES";
		
		const buttonClass = reserving ? "btn btn-info btn-sm active" : "btn btn-info btn-sm";
		
		let messageNode = null;
		if (reserving)
			messageNode = <span> <strong> Please Note: </strong> Your reserved DOI will not be registered on DataCite until a Release Date is provided. </span>;

		return (

	            <div className="container-fluid form-horizontal">



	            <div className="form-group form-group-sm row">
	            	<MetadataField field="doi" label="DOI" elementType="input" disabled={reserving}  messageNode={messageNode}/>
	            </div>
	            
	            {!registered &&
	            
			    <div className="form-group form-group-sm row">	
		          <div className="col-xs-8">
	            	<button type="button" className={buttonClass} onClick={this.handleReserve}>
	            		<span className="glyphicon glyphicon-pencil"></span> Reserve DOI
	            	</button>
	              </div>
	            </div>
	            }
	            
	            
	            
	            {!registered &&
		        <div className="form-group form-group-sm row">
	            	<MetadataField field="doi_infix" label="DOI Infix" elementType="input" handleChange={this.handleInfix}  />
	            </div>
	            
	            }
	            	
	 	           
	            <div className="form-group form-group-sm row">
	            	<MetadataField  field="date_of_issuance" label="Date of Issuance" elementType="date"  />
	            </div>



                </div>
		);
	}




}