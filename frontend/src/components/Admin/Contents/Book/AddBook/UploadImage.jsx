import React, { useState } from 'react';

export default function UploadImage() {
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'spmproject')
        setLoading(true)
        const res = await fetch(
        '	https://api.cloudinary.com/v1_1/dpil2pifv/image/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()

        setImage(file.secure_url)
        setLoading(false)
  }

  return (
    <div className="mb-3">
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
      /><br></br>
      {loading ? (
        <i><h6>Loading...</h6></i>
      ) : (
        <img src={image} style={{ width: '100px' }} />
        
        
      )
      }
      <br></br>
      <p style={{'color':'red'}}><i>(Copy the url and paste it on the below text field.)</i> </p>
      <div className="card text-dark bg-light" style={{ 'padding':'10px 10px 10px 10px'}}>
        <p> {image} </p>
      </div>
    </div>
  )
}