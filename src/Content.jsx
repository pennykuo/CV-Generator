import PersonalInfo from '../components/CVForm/personalInfo';
import Education from '../components/CVForm/education';
import Experience from '../components/CVForm/experience';
import Preview from "../components/CVview/preview";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactPrint from "react-to-print"//印出
export default function Content() {
    let componentRef = null;
    const [firstName, setfirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [title, setTitle] = useState(null);
    const [address, setAddress] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [mail, setMail] = useState(null);
    const [Description, setDescription] = useState(null);
    const [experience, setExperience] = useState(null);
    const [education, setEducation] = useState(null);
    function onFirstName(event) {
        setfirstName(event.target.value);
    }
    function onLastName(event) {
        setLastName(event.target.value);
    }
    function onTitle(event) {
        setTitle(event.target.value);
    }
    function onAddress(event) {
        setAddress(event.target.value);
    }
    function onPhoneNumber(event) {
        setPhoneNumber(event.target.value);
    }
    function onMail(event) {
        setMail(event.target.value);
    }
    function onDescription(event) {
        setDescription(event.target.value);
    }
    function addExperience(e) {
        e.preventDefault();//阻止預設行為ex.刷新頁面
        console.log(e.target[0].value);
        const id = uudiv4();
        const jobAddress = e.target[0].value;
        const companyName = e.target[1].value;
        const startDate = e.target[2].value;
        const endDate = e.target[3].value;
        const jobDesc = e.target[4].value;

        let newExperience = { id, jobAddress, companyName, startDate, endDate, jobDesc };
        setExperience([...experience, newExperience]);
        clear(e);

    }
    function clear(e) {
        for (let i = 0; i < e.target.length; i++) {
            e.target[i].value = "";
        }
    }

    function saveExperience(e, id) {
        e.preventDefault();
        let jobAddress = e.target[0].value;
        let companyName = e.target[1].value;
        let startDate = e.target[2].value;
        let endDate = e.target[3].value;
        let jobDesc = e.target[4].value;
        let upDateExp = { jobAddress, companyName, startDate, endDate, jobDesc };
        setExperience(
            experience.map((exp) => {
                if (exp.id === id) {
                    return { ...exp, ...upDateExp };

                } else {
                    return exp;
                }
            }))
    }
    function deleteExperience(id) {
        setExperience((currentExperience) => {
            return currentExperience.filter((exp) => exp.id !== id);
        })
    }
    function addEducation(e) {
        e.preventDefault();
        const id = uuidv4();
        const course = e.targer[0].value;
        const schoolName = e.targer[1].value;
        const startYear = e.targer[2].value;
        const endYear = e.targer[3].value;
        let newEducation = { id, course, schoolName, startYear, endYear };
        setEducation([...education, newEducation]);
        clear(e);
    }
    function saveEducation(e) {
        e.preventDefault();
        let course = e.targer[0].value;
        let schoolName = e.targer[1].value;
        let startYear = e.targer[2].value;
        let endYear = e.targer[3].value;
        let updateEducation = { course, schoolName, startYear, endYear };
        setEducation(
            education.map((edu) => {
                if (edu.id === id) {
                    return { ...edu, ...updateEducation };
                } else {
                    return edu;
                }

            })
        )
    }
    function deleteEducation(e) {
        setEducation((currentEducation) => {
            return currentEducation.filter((edu) => edu.id !== id);
        })
    }
    function reset() {
        setEducation([]);
        setExperience([]);
        setfirstName(null);
        setLastName(null);
        setTitle(null);
        setAddress(null);
        setDescription(null);
        setMail(null);
        setPhoneNumber(null);
    }
    function generatePrint() {
        return (
            <>
                <ReactPrint
                    trigger={() => {
                        <button>Print CV</button>;
                    }}
                />
            </>
        );
    }
        return (
            <>
                <div className="content">
                    <section className="cv-form">
                        <PersonalInfo
                            onFirstName={onFirstName}
                            onLastName={onLastName}
                            onTitle={onTitle}
                            onMail={onMail}
                            onAddress={onAddress}
                            onPhoneNumber={onPhoneNumber}
                            onDescription={onDescription}
                        />
                        <Experience
                            onSubmit={addExperience}
                            experience={experience}
                            deleteExperience={deleteExperience}
                            saveExperience={saveExperience}

                        />
                        <Education
                            addEducation={addEducation}
                            education={education}
                            saveEducation={saveEducation}
                            deleteEducation={deleteEducation}
                        />
                        <setcion className="btn-contain">
                            <button className="btn-reset" onClick={reset}>
                                Reset
                            </button>

                            <ReactPrint
                                trigger={() => {
                                    return <button className="btn-print">Print CV</button>
                                }
                                }
                                content={() => componentRef}
                                documentTitle="Cv"
                                pageStyle="print"
                            />
                        </setcion>

                    </section>
                    <div className="preview" ref={(el) => (componentRef = el)}>
                        <Preview
                        firstName={firstName}
                        lastName={lastName}
                        title={title}
                        address={address}
                        mail={mail}
                        phoneNumber={phoneNumber}
                        Description={Description}
                        experience={experience}
                        education={education}

                        />
                    </div>
                </div>
            </>
        );
   
}
