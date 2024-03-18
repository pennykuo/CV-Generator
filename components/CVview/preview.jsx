// import PreviewExperience from "./previewExperience";
// import PreviewEducation from "./previewEducation";
// import PreviewPersonal from "./previewPersonal";

import "./preview.css";
export default function Preview({
    firstName,
    lastName,
    title,
    address,
    email,
    phoneNumber,
    description,
    experience,
    deleteExperience,
    editExperience,
    education,

}) {
    return (
        <div id='perview'>
            <div id="preview-personal">
                <div className="info">
                    <div id="info-1">
                        <p id="fullName">
                            {firstName}{lastName}
                        </p>
                        <h2 id="title">
                            {title}
                        </h2>
                    </div>
                    <div className="info-2">
                        <p>
                            Address:{address}
                        </p>
                        <p>
                            PhoneNumber:{phoneNumber}
                        </p>
                        <p>
                            Email:{email}
                        </p>
                    </div>
                </div>
                <hr></hr>
                <p>{description}</p>
            </div>
            <h2>Experience</h2>
            {experience.map((exp) => {
                return (//要記得加return
                    <div className='preview-experience' key={exp.id}>
                        <li id={exp.id}>
                            <div className="exp-info">
                                <p><strong>{exp.position}</strong></p>

                                <p><strong>{exp.company}</strong>|{exp.start}-{exp.end}</p>
                            </div>
                            <p>{exp.desc}</p>

                        </li>
                    </div>
                );
            })}

            <h2>Education</h2>
            {education.map((edu) => {
                return (
                    <div className='preview-education' key={edu.id}>
                        <li id={edu.id}>
                            <div className="edu-info">
                                <p>
                                    <strong>{edu.university}</strong>
                                </p>
                                <p><strong>{edu.course}</strong>|{edu.start}-{edu.graduated}</p>
                            </div>
                        </li>
                    </div>
                );
            })}

        </div>
    );
}