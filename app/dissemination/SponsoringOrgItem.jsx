import React from 'react';

export default class SponsoringOrgItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.items.map((row, index) => <div key={index}>
          <div className='row'>
            <div className='col-xs-12'>
              {row.organization_name}
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12'>
              <dl className='dl-horizontal biblio-sub-dl'>
                <dt>Primary Award:</dt>
                <dd>{row.primary_award}</dd>
                <dt>Award Numbers:</dt>
                <dd>
                  {row.award_numbers.map((awardNum, index) => <div key={"award-" + index}>{awardNum}</div>)}
                </dd>
                <dt>B&amp;R Codes:</dt>
                <dd>
                  {row.br_codes.map((brcodes, index) => <div key={"brcode-" + index}>{brcodes}</div>)}
                </dd>
                <dt>FWP Numbers:</dt>
                <dd>
                  {row.fwp_numbers.map((fwpnumbers, index) => <div key={"fwpNum-" + index}>{fwpnumbers}</div>)}
                </dd>
              </dl>
            </div>
          </div>
        </div>)}
      </div>
    );
  }
}