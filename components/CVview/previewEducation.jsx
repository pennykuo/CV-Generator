export default function PreviewEducation(
    id,
    course,
    university,
    start,
    end,
){
    return(
       <li id={id}>
            <div id ="edu-info">
                <p>
                    {course}
                </p>
                <p>
                    {university}|{start} - {end}
                </p>
            </div>
       </li> 

    );

}