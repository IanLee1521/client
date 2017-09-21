import React from 'react';
import ReactDOM from 'react-dom';
import {Modal, Button} from 'react-bootstrap';

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
        <div className="row not-so-wide-row">
            <div className="col-lg-3 col-md-1"></div>
            <div className="col-lg-6 col-md-10 col-xs-12 static-content">
                <h2 className="static-content-title">About</h2>
                <br/>
                <p>The Department of Energy (DOE) Office of Scientific and Technical Information (OSTI) is building a new DOE software center.</p>

                <p>DOE CODE is the reimagining of OSTI's current product for the submission of software, the Energy Science and Technology Software Center,
                    or <a href="//www.osti.gov/moved/estsc/">ESTSC</a>.  Since DOE CODE is still under development, if you need to submit, search, or order software, please visit the ESTSC site for instructions.</p>

                <p>DOE CODE, when launched, will provide a best-in-class service for the submission of software. As a form of scientific and technical information,
                    software is a result of the Department's research and development activities at the DOE national laboratories and other DOE facilities/contractors.</p>

                <p>DOE CODE will provide <a href="https://www.osti.gov/ostiblog/osti-developing-open-source-social-coding-platform-doe-scientific-software">an open source, social platform for DOE scientific software</a>.  DOE CODE will connect to repositories
                    on GitHub, Bitbucket, and others, but will also provide a place to host code for users that are unable to use other hosting services.  Since DOE CODE
                    is itself an open source product, other institutions will be able to download and deploy it for their own purposes too. You
                    can follow DOE CODE’s development at the <a href="https://github.com/doecode">DOE CODE GitHub site.</a></p>

                <p>To provide a new, modern way of interacting, DOE CODE will not only provide the ability to link to references (papers, datasets) but also to other
                    documents, manuals, examples, charts, forums, etc., in one place. All of this scientific and technical information will be linked to scientific software,
                    whether it be software for modeling and simulation, data analytics or instrument control.</p>

                <p>The current software center, ESTSC, contains over 3,500 distinct pieces of software resulting from DOE R&amp;D, as well as selected software from the
                    Nuclear Energy Agency of the Organization for Economic Cooperation and Development.  ESTSC is the centralized DOE software management portal.  The
                    ESTSC portal provides access to software packages, including source code, executable object code, and the minimum support documentation (e.g.,
                    software user guide or manual) needed to use the software or to modify the software to support subsequent development efforts.</p>

                <p>ESTSC and DOE CODE are managed and operated by DOE OSTI.</p>
                <br/>
                <br/>
            </div>
            <div className="col-lg-3 col-md-1"></div>
        </div>
        );
    }
}
