import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';
import { Folder, XCircle, Backspace } from 'react-bootstrap-icons';
import { APP_ROUTES } from '../../../../../utilities/constants/routes.constants';

export default function UpdateCategoryBody() {
    var Categories = reactLocalStorage.getObject('Categories');
    const id = Categories[0];
    const [category_name, setCategoryName] = useState(Categories[1]);
    const [description, setDescription] = useState(Categories[2]);

    function updateCategories(e) {
        e.preventDefault();
        const newUpdateCategories = {
            category_name,
            description
        }

        axios.post("http://localhost:6060/category/update/" + id, newUpdateCategories)
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Category has been updated',
                    showConfirmButton: false,
                    timer: 2000
                }).then(okay => {
                    if (okay) {
                        window.location.href = APP_ROUTES.ADMIN_VIEW_CATEGORY;
                    }
                });

            }).catch((err) => {
                Swal.fire({
                    title: "error!",
                    text: "Update Not Success",
                    icon: 'error',
                    position: 'center',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                });
            })
        }
        

        function cancel () {
            window.location.href = APP_ROUTES.ADMIN_VIEW_CATEGORY;
        }

        function reset (){
            setCategoryName(" ");
            setDescription(" ");
        }

    return (
        <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px', borderColor: 'black', background: '#ffffff'}}>
            <div className="col" style={{ borderRadius: '33px', height: '590px' }}>
                <form id="UpdateForm" style={{ paddingTop: "70px" }}>
                <div className="mb-3"> 
                        <label for="inputCategoryName" className="form-label">Category Name</label>
                        <input 
                            type="text"
                            className="form-control" 
                            id="category_name" 
                            name="category_name"         
                            value={category_name}
                            onChange={(e) => { setCategoryName(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label for="inputDescription" className="form-label">Description</label>
                        <textarea 
                            type="text" 
                            className="form-control" 
                            id="description" 
                            name="description" 
                            rows="3"                                 
                            value={description}
                            style={{height: "100px"}}
                            onChange={(e) => { setDescription(e.target.value) }}/>
                    </div>
                    <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                        <button type="button" className="btn btn-outline-danger" style={{ float: 'right', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%" }} onClick={cancel}><Backspace /> Cancel</button>
                        <button type="reset" className="btn btn-outline-primary" style={{ float: 'center',padding: '12px 68px', marginBottom:'30px', fontWeight:'bold', fontSize:"130%"  }} onClick={reset}><XCircle/> Clear</button>
                        <button type="submit" className="btn btn-outline-success" style={{ float: 'left', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%" }} onClick={updateCategories}><Folder /> Save</button>
                    </div>
                </form>
            </div>
        </div>
    );

}
