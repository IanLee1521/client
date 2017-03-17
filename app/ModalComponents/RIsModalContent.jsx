import React from 'react';
import TextField from '../components/TextField'
import {observer} from "mobx-react";


@observer
export default class RIsModalContent extends React.Component {

	constructor(props) {
		super(props);
		this.onModalChange = this.onModalChange.bind(this);
	}

    onModalChange(field, value) {
        this.props.tableStore.setCurrentField(field,value);
    }


	render() {
        const ri = this.props.tableStore.currentData();
        const identifierTypes = {"Select One" : "",
        "DOI" : "DOI",
        "URL" : "URL"
      };
      const relationTypes = {"Select One" : "",
      "Cites" : "Cites",
      "Contains" : "Contains"
      }

		return(

            <div className="container-fluid">
                <div className="form-horizontal">
                    {this.props.isEdit && <div className="form-group form-group-sm row">
                        <TextField field="place" label="#" elementType="input" value={ri.place} onChange={this.onModalChange} labelStyle="col-sm-1 control-label" divStyle="col-sm-3"/>
                    </div>
                    }
                    <div className="form-group form-group-sm row">
                        <TextField field="identifier_type" label="Identifier Type" elementType="select" options={identifierTypes} value={ri.identifier_type} onChange={this.onModalChange} labelStyle="col-sm-1 control-label" divStyle="col-sm-3"/>
                        <TextField field="relation_type" label="Relation Type" elementType="select" options={relationTypes} value={ri.relation_type} onChange={this.onModalChange} labelStyle="col-sm-1 control-label" divStyle="col-sm-3"/>
                        <TextField field="identifier" label="Identifier" elementType="input" value={ri.identifier} onChange={this.onModalChange} labelStyle="col-sm-1 control-label" divStyle="col-sm-3"/>
                    </div>

                </div>
            </div>
		);
	}

}