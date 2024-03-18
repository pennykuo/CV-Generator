import React, { useState } from 'react';
import NewPersonalInfo from '../components/CVForm/NewPersonalInfo';
import NewEducation from '../components/CVForm/NewEducation';
import NewExperience from '../components/CVForm/NewExperience';
import { v4 as uuidv4 } from 'uuid';
import Preview from '../components/CVview/preview';
import ReactPrint from 'react-to-print';//use react print PDF.

export default function NewContent() {
    let componentRef = '';
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
    function addExperience(e) {
        e.preventDefault();
        const id = uuidv4();
        const position = e.target[0].value;
        //e.target監聽事件的元素，但因為是form所以會有[]的陣列
        const company = e.target[1].value;
        const start = e.target[2].value;
        const end = e.target[3].value;
        const desc = e.target[4].value;

        let newExperience = { id, position, company, start, end, desc };
        setExperience([...experience, newExperience]);
        clear(e);
    }
    function reset(e) {
        setEducation([]);
        setExperience([]);
        setAddress('');
        setFirstName('');
        setLastName('');
        setTitle('');
        setPhoneNumber('');
        setEmail('');
        setDescription('');

    }
    function clear(e) {
        for (let i = 0; i < e.target.length; i++) {
            e.target[i].value = "";
        }
    }
    function deleteExperience(id) {
        setExperience((currentExperience) => currentExperience.filter((i) => i.id !== id));
    }
    function saveExperience(e, id) {
        e.preventDefault();
        const position = e.target[0].value;
        const company = e.target[1].value;
        const start = e.target[2].value;
        const end = e.target[3].value;
        const desc = e.target[4].value;
        setExperience(
            experience.map((exp) => {
                if (exp.id === id) {
                    return { ...exp, position, company, start, end, desc }
                } else {
                    return exp;
                }

            })
        );
    }
    function deleteEducation(id) {
        setEducation((currentEducation) => currentEducation.filter((i) => i.id !== id));
    }
    function addEducation(e) {
        e.preventDefault();
        const id = uuidv4();
        const university = e.target[0].value;
        const course = e.target[1].value;
        const start = e.target[2].value;
        const graduated = e.target[3].value;

        let NewEducation = { id, university, course, start, graduated };
        setEducation([...education, NewEducation]);
        clear(e);
    }
    function saveEducation(e, id) {
        e.preventDefault();
        const university = e.target[0].value;
        const course = e.target[1].value;
        const start = e.target[2].value;
        const graduated = e.target[3].value;
        setEducation(
            education.map((edu) => {
                if (edu.id === id) {
                    return { ...edu, university, course, start, graduated }
                } else {
                    return edu;
                }
            })
        )
    }
    
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
                <section className='btn-container'>
                <button className='btn-reset' onClick={reset}>Reset</button>
                <ReactPrint 
                    trigger={()=>{
                        return <button className='btn-print'>Print CV</button>
                    }}
                    content={()=>componentRef}//這裡的content不是指本身這個檔案，所以不能用NewContent
                    documentTitle="CV"
                    pageStyle='print'
                
                />
            </section>
            </div>
            
            <div className="index_preview" ref={(el)=>(componentRef=el)}>
                <Preview

                    firstName={firstName}
                    lastName={lastName}
                    title={title}
                    address={address}
                    phoneNumber={phoneNumber}
                    email={email}
                    description={description}
                    experience={experience}
                    education={education}
                />
            </div>
        </div>
    );
}