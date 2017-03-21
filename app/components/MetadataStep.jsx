import React from 'react';
import InputHelper from './InputHelper';
import {observer} from "mobx-react";

@observer
export default class MetadataStep extends React.Component {

	constructor(props) {
		super(props);

		this.onFieldChange = this.onFieldChange.bind(this);
		this.isValidated = this._isValidated.bind(this);
	}

	_isValidated() {
		//adding validations later

		return true;
	}

    onFieldChange(id, value) {
        this.props.metadataStore.metadata[id] = value;
    }




	render() {
		const metadata = this.props.metadataStore.metadata;
		
		
		return (
	            <div className="container-fluid">
                <form id="react_form" className="form-horizontal col-sm-offset-2 col-sm-8">
                
                <div className="form-group form-group-sm row">
                	<InputHelper field="software_title" label="Software Title" elementType="input" value={metadata.software_title} onChange={this.onFieldChange}/>
                </div>
                
                
                <div className="form-group form-group-sm row">
                	<InputHelper field="software_title" label="Software Title" elementType="input" value={metadata.software_title} onChange={this.onFieldChange}/>                
                </div>
                
                <div className="form-group form-group-sm row">
                	<InputHelper field="doi" label="DOI" elementType="input" value={metadata.doi} onChange={this.onFieldChange}/>              
                </div>
                
                <div className="form-group form-group-sm row">
                	<InputHelper field="description" label="Description/Abstract" elementType="input" value={metadata.description} onChange={this.onFieldChange}/>
                </div>
                	
                <hr/>	
                <div className="form-group form-group-sm row">
                <InputHelper field="keywords" label="Keywords" elementType="input" value={metadata.keywords} onChange={this.onFieldChange}/>
                <InputHelper field="other_special_requirements" label="Other Special Requirements" elementType="input" value={metadata.other_special_requirements} onChange={this.onFieldChange}/>
                </div>
                
                <div className="form-group form-group-sm row">
                <InputHelper field="related_software" label="Related Software" elementType="input" value={metadata.related_software} onChange={this.onFieldChange}/>
                <InputHelper field="site_accession_number" label="Site Accession Number" elementType="input" value={metadata.site_accession_number} onChange={this.onFieldChange}/>
                </div>
                
                <hr/>

                <div className="form-group form-group-sm row">
                <InputHelper field="recipient_name" label="Recipient Name" elementType="input" value={metadata.recipient_name} onChange={this.onFieldChange}/>
                <InputHelper field="recipient_org" label="Recipient Organization" elementType="input" value={metadata.recipient_org} onChange={this.onFieldChange}/>
                </div>
                <div className="form-group form-group-sm row">
                <InputHelper field="recipient_phone" label="Recipient Phone Number" elementType="input" value={metadata.recipient_phone} onChange={this.onFieldChange}/>
                <InputHelper field="recipient_email" label="Recipient Email" elementType="input" value={metadata.recipient_email} onChange={this.onFieldChange}/>
                </div>

                </form>
                </div>
		);
	}




}
