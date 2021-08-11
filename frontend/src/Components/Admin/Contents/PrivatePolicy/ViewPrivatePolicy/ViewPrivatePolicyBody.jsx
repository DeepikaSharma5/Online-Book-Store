import React, { Component } from 'react';

class PrivatePolicyBody extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '100rem', margin: 'auto', padding: '10px' }}>
                    <div className="card-body" >
                        <div className="row">
                            <table className="table table-success table-striped">
                                <thead className="table-info" >
                                    <tr>
                                        <th scope="col">Heading</th>
                                        <th scope="col">Details</th>    
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                {/* {this.state?.dates?.length > 0 && this.state.dates.map((item, index) => */}
                                    <tbody>
                                        <tr>
                                            <td>sample1</td>
                                            <td>sample2</td>
                                            <td>
                                                {/* <button type="button" className="btn btn-warning"
                                                    onClick={() => this.updateAboutus(item._id, item.description, item.dateRange, item.conferenceStart, item.conferenceEnd, item.conferenceWebsite, item.organizerPhone, item.organizerEmail, item.organizerWebsite, item.status)}>Edit</button> */}
                                            </td>
                                            <td>
                                                {/* <button type="button" className="btn btn-danger"
                                                    onClick={() => this.deleteData(item._id)}>Delete</button> */}
                                            </td>
                                        </tr>
                                    </tbody>
                                {/* )} */}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default PrivatePolicyBody;