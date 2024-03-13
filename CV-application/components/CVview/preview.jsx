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
    // experience,
    // deleteExperience,
    // editExperience,
    // education,

}){
    return (
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
                <hr></hr>
                <p>{description}</p>
            </div>
        </div>
    );
}