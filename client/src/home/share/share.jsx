import React , {useState}from 'react';
import img from '../../assets/profile.png'
import photos from '../../assets/images.png'
import uploadFileToGoogleDrive from '../../utils/uploader';
import axios from 'axios';

import './share.css'

function ShareNow(){
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [imageUrl, setUrl] = useState("");

    const [formData, setFormData] = useState({
        user_id: "662a56437c8eebb60e3f9ca1",
        caption: "",
        likes: 0,
        file: "",
        datePosted: new Date(Date.now()),
        comments:[]
    });

    const handleValue = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        setImage(file);

        try {
            const imageUrl = await uploadFileToGoogleDrive(file);
            setFormData(prevData => ({
              ...prevData,
              file: imageUrl
            }));

          } catch (error) {
            console.error('Error uploading image:', error);
          }
    };

    const handleSubmit = async () => {

        console.log("dekh bsdk");
        try {
            
            
            const response = await axios.post('http://localhost:5001/posts', formData);
            console.log(response.data);

            setContent('');
            setImage(null);
            setFormData({
                user_id: "wertyuiojhvcxchgh",
                caption: "",
                likes: 0,
                file: "",
                datePosted: Date.now(),
                comments:[]
            });
            
            
            
            console.log('Post successful');
        } catch (error) {
            console.error('Error posting:', error);
            // Optionally, you can display an error message or perform any other action in case of an error
        }
    };



    return(
        <div className='share-container'>
            <input type='text' placeholder='Share something' className= 'share-cont' value={formData.caption} onChange={handleValue} name='caption'>
                
            </input> 

            <div className='share-elem'>
                <div>
                    <label htmlFor='image-upload'>
                        <img src={image ? URL.createObjectURL(image) : photos} alt="photos" className='dis-img' />
                    </label>
                    <input 
                        type="file" 
                        id="image-upload" 
                        accept="image/*" 
                        onChange={handleImageUpload} 
                        style={{ display: 'none' }} 
                    />
                </div>

                <div>
                    <button className='post-btn' onClick={handleSubmit}>Post Now</button>
                </div>

            </div>

        </div>
    )
}



export default ShareNow;