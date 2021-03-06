import React from 'react';
import MetadataField from '../field/MetadataField';
import {observer,Provider} from "mobx-react";

@observer
export default class MetadataPanel extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const metadata = this.props.metadata;

			const licenseOptions = [
				{label: 'Proprietary', value: 'Proprietary'},
				{label: 'Apache License 2.0', value: 'Apache License 2.0'},
				{label: 'GNU General Public License v3.0', value: 'GNU General Public License v3.0'},
				{label: 'MIT License', value: 'MIT License'},
				{label: 'BSD 2-clause "Simplified" License', value: 'BSD 2-clause "Simplified" License'},
				{label: 'BSD 3-clause "New" or "Revised" License', value: 'BSD 3-clause "New" or "Revised" License'},
				{label: 'Eclipse Public License 1.0', value: 'Eclipse Public License 1.0'},
				{label: 'GNU Affero General Public License v3.0', value: 'GNU Affero General Public License v3.0'},
				{label: 'GNU General Public License v2.0', value: 'GNU General Public License v2.0'},
				{label: 'GNU General Public License v2.1', value: 'GNU General Public License v2.1'},
				{label: 'GNU Lesser General Public License v2.1', value: 'GNU Lesser General Public License v2.1'},
				{label: 'GNU Lesser General Public License v3.0', value: 'GNU Lesser General Public License v3.0'},
				{label: 'Mozilla Public License 2.0', value: 'Mozilla Public License 2.0'},
				{label: 'The Unlicense', value: 'The Unlicense'}
				];



		return (

	            <div className="container-fluid form-horizontal">
	            {metadata.getValue("repository_link") &&
	        		<MetadataField field="repository_link" label="Repository Link: " elementType="display" />
	            }

	            	<MetadataField field="software_title" label="Software Title" elementType="input" />
	            	<MetadataField field="description" label="Description/Abstract" elementType="textarea" />
					<MetadataField field="licenses" label="Licenses" elementType="select" options={licenseOptions} isArray={true} multi={true} placeholder="Select your license(s)"   />

                </div>
		);
	}




}
