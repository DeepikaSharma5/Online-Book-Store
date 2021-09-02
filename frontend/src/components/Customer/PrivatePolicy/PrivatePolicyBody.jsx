import React, { Component } from 'react';
import axios from 'axios';

class PrivatePolicyBody extends Component {
    componentDidMount() {
        axios.get('http://localhost:6060/private-policy/view')
            .then(response => {
                const policy = response.data;
                this.setState({ policy });
                console.log("response", response);
            }).catch(error => {
                alert(error.message);
                console.log("Error", error);
            });
    }
    render() {
        return (
            <div className="col-md-14 col-sm-12" style={{ maxWidth: '100rem', margin: 'auto', padding: '10px' }}>
                <div style={{ height: '500px' }}>
                    <div class="card overflow-auto" style={{ maxHeight: '200%', minHeight: "120%", background: '#ffffff', boxShadow: '10px 10px 45px #919191,-10px -10px 45px #ffffff' }}>
                        <div class="card-body">
                            <div style={{ height: '150px' }}>
                                {this.state?.policy?.length > 0 && this.state.policy.map((item, index) =>
                                    <div>
                                        <h3 class="card-title">{item.heading}</h3>
                                        <p>{item.details}</p>
                                        <br/>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PrivatePolicyBody;