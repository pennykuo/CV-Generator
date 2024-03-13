// import React from 'react';
export default function Experience(
    {
        onSubmit,
        experience,
        saveExperience,
        deleteExperience,
    }) {
    return (
        <section id="experience">
            <h2>Work Experience</h2>
            {experience.map((i) => {
                return (
                    <div key={i.id}>
                        <li key={i.id}>
                            <form key={i.id} onSubmit={(e) => saveExperience(e, i.id)}>
                                {/* required表示必填 否則按下button不會有動作 */}
                                <input placeholder="Address" required defaultValue={i.jobAddress}></input>
                                <input placeholder="Company Name" required defaultValue={i.companyName}></input>
                                <input placeholder="Start Date" required defaultValue={i.startDate}></input>
                                <input placeholder="End Date" required defaultValue={i.endDate}></input>
                                <input placeholder="Description" required defaultValue={i.jobDesc}></input>
                                <div className="btn-contain">
                                    <button type="submit" className="btn-save">Save</button>
                                    <button type="submit" className="btn-delete" onClick={(e) => deleteExperience(i.id)}>
                                        Delete
                                    </button>
                                </div>
                            </form>
                        </li>
                    </div>
                );
            })}
            <form onSubmit={onSubmit}>
                <input placeholder="Address" required></input>
                <input placeholder="Company Name" required></input>
                <input placeholder="Start Date" required></input>
                <input placeholder="End Date" required></input>
                <textarea placeholder="Description" required></textarea>
                <button className="btn-Add" type="submit">Add</button>
            </form>

        </section>
    )
}