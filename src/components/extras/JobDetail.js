// JobDetail.js with improved form aesthetics and clear labels for file uploads
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const JobDetail = () => {
    let { id } = useParams();

    return (
        <div className="job-detail" style={{ margin: 'auto', width: '50%', padding: '10px' }}>
            <h1 style={{ textAlign: 'center' }}>Job Title: Engineering Manager - ID {id}</h1>
            <p style={{ textAlign: 'center', marginBottom: '20px' }}>Job Description: Manage a team of software engineers...</p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2 style={{ textAlign: 'center' }}>Apply Now</h2>
                <div>
                    <label htmlFor="resume">Resume (PDF only):</label>
                    <input type="file" id="resume" name="resume" accept=".pdf" required style={{ padding: '10px' }} />
                </div>
                <div>
                    <label htmlFor="coverLetter">Cover Letter (PDF only):</label>
                    <input type="file" id="coverLetter" name="coverLetter" accept=".pdf" required style={{ padding: '10px' }} />
                </div>
                <input type="text" id="lastName" name="lastName" placeholder="Last Name" required style={{ padding: '10px' }} />
                <input type="text" id="firstName" name="firstName" placeholder="First Name" required style={{ padding: '10px' }} />
                <input type="text" id="language" name="language" placeholder="Preferred Language" required style={{ padding: '10px' }} />
                <select id="country" name="country" required style={{ padding: '10px' }}>
                    <option value="">Select a country</option>
                    <option value="usa">United States</option>
                    <option value="canada">Canada</option>
                </select>
                <select id="province" name="province" required style={{ padding: '10px' }}>
                    <option value="">Select a province</option>
                    <option value="ontario">Ontario</option>
                    <option value="quebec">Quebec</option>
                </select>
                <input type="text" id="city" name="city" placeholder="City" required style={{ padding: '10px' }} />
                <input type="text" id="postalCode" name="postalCode" placeholder="Postal Code" required style={{ padding: '10px' }} />
                <input type="text" id="address1" name="address1" placeholder="Address Line 1" required style={{ padding: '10px' }} />
                <input type="text" id="address2" name="address2" placeholder="Address Line 2" style={{ padding: '10px' }} />
                <select id="question" name="question" required style={{ padding: '10px' }}>
                    <option value="">Have you worked in this industry before?</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <button type="submit" style={{ padding: '10px', fontSize: '16px', backgroundColor: 'blue', color: 'white', borderRadius: '5px' }}>Submit Application</button>
            </form>
        </div>
    );
};

export default JobDetail;
