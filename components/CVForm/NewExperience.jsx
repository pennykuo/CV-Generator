import React, { useState } from 'react';
export default function NewExperience({
  addExperience,
  deleteExperience,
  saveExperience,
  experience,
}) {
  return (
    <div className="createExp">
      <h2>Work Experience</h2>
      {experience.map((i) => {
        return (
          <div key={i.id}>
            <li key={i.id}>
              <form key={i.id} onSubmit={(e) => saveExperience(e, i.id)} className="input-row">
                <input placeholder="Position" required defaultValue={i.position} />
                <input placeholder="Company" required defaultValue={i.company} />
                <input placeholder="Start Date" required defaultValue={i.start} />
                <input placeholder="End Date" required defaultValue={i.end} />
                <input placeholder="Description" id="description" required defaultValue={i.desc} />
                <div className="btn-container">
                  <button type="submit" className="btn btn-save">Save</button>
                  <button type="button" className="btn btn-delete" onClick={(e) => deleteExperience(i.id)}>Delete</button>
                </div>
              </form>
            </li>
          </div>
        );
      })}
      <form onSubmit={addExperience}>
        <input placeholder="Position" required />
        <input placeholder="Company" required />
        <input placeholder="Start Date" required />
        <input placeholder="End Date" required />
        <input placeholder="Description" id="description" required />
        <button className="btn_addExp" type="submit">Add</button>
      </form>
    </div>


  );
}