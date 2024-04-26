import React, { useState } from 'react';
import axios from 'axios';
import './project.css';

function Project() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [domain, setDomain] = useState('');
    const [file, setFile] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();        

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('domain', domain);
        formData.append('file', file);

        console.log("This is the form Data" + formData.title)

        try {
            await axios.post('http://localhost:5001/projects', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            setTitle('');
            setDescription('');
            setDomain('');
            setFile('');
            alert('Project submitted successfully!');
            
        } catch (error) {
            console.error('Error submitting project:', error);
            alert('Failed to submit project. Please try again.');
        }
    };

    return (
        <div className='project-main'>
            <div className="container">
                <h2>Projects </h2>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" className="title" required value={title} onChange={(e) => setTitle(e.target.value)} />

                    <label htmlFor="description">Description:</label>
                    <textarea id="description" className="description" rows="4" required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                    <label htmlFor="domain">Domain:</label>
                    <select id="domain" name="domain" required value={domain} onChange={(e) => setDomain(e.target.value)}>
                        <option value="" disabled>Select Domain</option>
                        <option value="Machine Learning and AI">Machine Learning and AI</option>
                        <option value="Web Development">Web Development</option>
                        <option value="App Development">App Development</option>
                        <option value="Micro-processor">Micro-processor</option>
                        <option value="Civil Projects">Civil Projects</option>
                        <option value="Others">others</option>
                    </select>

                    <label htmlFor="file">File: (Paste the GitHub Link)</label>
                    <input type="text" id="file" className="file" required value={file} onChange={(e) => setFile(e.target.value)} />

                    <button type="submit" id="submit_button">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Project;
