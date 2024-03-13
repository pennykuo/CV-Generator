export default function Education(
    addEducation,
    education,
    saveEducation,
    deleteEducation,
) {
    return (
        <select id='education'>
            <h2>Education</h2>

            {education.map((edu) => {
                return (
                    <li key={edu.id}>
                        <form key={edu.id} onSubmit={(e) => saveEducation(e, edu.id)}>
                            <input placeholder="Course" required defaultValue={edu.course}></input>
                            <input placeholder="University/School" required defaultValue={edu.university}></input>
                            <input placeholder="Start Year" required defaultValue={edu.start}></input>
                            <input placeholder="Graduated" required defaultValue={edu.end}></input>
                            <div className="btn-contain">
                                <button type="submit" className="btn-save">Save</button>
                                <button type="submit" className="btn-delete" 
                                onClick={(e) => deleteEducation(edu.id)}>
                                    Delete
                                </button>
                            </div>
                        </form>
                    </li>
                );
            })}
            <form onSubmit={addEducation}>
                <input placeholder="Course" required></input>
                <input placeholder="University/School" required></input>
                <input placeholder="Start Year" required></input>
                <input placeholder="Graduated" required></input>
                <button type="submit" className="btn-add">Add</button>
            </form>
        </select>
    );
}