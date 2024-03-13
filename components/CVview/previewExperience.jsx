export default function PreviewExperience({
    id,
    jobAddress,
    companyName,
    startDate,
    endDate,
    jobDesc,
}){
    return(
        <li id={id}>
            <div id ="exp-info">
                <p>
                    {jobAddress}
                </p>
                <p>
                    {companyName}|{startDate} - {endDate}
                </p>
                <p>
                    {jobDesc}
                </p>
            </div>
        </li>
    );
}