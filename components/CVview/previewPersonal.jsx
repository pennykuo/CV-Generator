export default function PreviewPersonal({
    firstName,
    lastName,
    title,
    address,
    email,
    phoneNumber,
    description,
}) {
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
                <div className="info2">
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