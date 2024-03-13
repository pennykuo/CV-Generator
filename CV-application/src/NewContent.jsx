import React, { useState } from 'react';
import NewPersonalInfo from '../components/CVForm/NewPersonalInfo';
import NewEducation from '../components/CVForm/NewEducation';
import NewExperience from '../components/CVForm/NewExperience';

import Preview from '../components/CVview/preview';
export default function NewContent() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [title, setTitle] = useState(null);
    const [address, setAddress] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [email, setEmail] = useState(null);
    const [description, setDescription] = useState(null);
    const [experience, setExperience] = useState([]);
    const [education, setEducation] = useState([]);



    function onFirstName(e) {
        setFirstName(e.target.value);
    }
    function onLastName(e) {
        setLastName(e.target.value);
    }
    function onTitle(e) {
        setTitle(e.target.value);
    }
    function onAddress(e) {
        setAddress(e.target.value);
    }
    function onPhoneNumber(e) {
        setPhoneNumber(e.target.value);
    }
    function onEmail(e) {
        setEmail(e.target.value);
    }
    function onDescription(e) {
        setDescription(e.target.value);
    }
    function addExperience(){

    }
    function deleteExperience(id){
        setExperience((currentExperience)=>currentExperience.filter((i)=>i.id!==id));
    }
    function saveExperience(){

    }
    function deleteEducation(id){}
    function addEducation(){}
    function saveEducation(){}
    
    return (

        <div className="index_Gen">
            <div className="index_All">
                <NewPersonalInfo
                    onFirstName={onFirstName}
                    onLastName={onLastName}
                    onTitle={onTitle}
                    onEmail={onEmail}
                    onDescription={onDescription}
                    onAddress={onAddress}
                    onPhoneNumber={onPhoneNumber}
                />
                <NewExperience 
                    addExperience={addExperience}
                    deleteExperience={deleteExperience}
                    saveExperience={saveExperience}
                    experience={experience}
                />
                <NewEducation 
                    addEducation={addEducation}
                    deleteEducation={deleteEducation}
                    saveEducation={saveEducation}
                    education={education}
                
                />
            </div>
            <div className="index_preview">
                <Preview

                    firstName={firstName}
                    lastName={lastName}
                    title={title}
                    address={address}
                    phoneNumber={phoneNumber}
                    email={email}
                    description={description}

                />
            </div>
        </div>
    );
}