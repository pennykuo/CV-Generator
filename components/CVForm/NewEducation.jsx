import React, { useState } from 'react';
export default function NewEducation({
  addEducation,
  deleteEducation,
  saveEducation,
  education,
}) {
  return (
    <div className="createEdu">
      <h2>Education</h2>
      {education.map((i) => {
        return (
          <div key={i.id}>
            <li key={i.id}>
              <form key={i.id} onSubmit={(e) => saveEducation(e, i.id)} className="input-row">
                <input placeholder="University/School" required defaultValue={i.university} />
                <input placeholder="Course" required defaultValue={i.course} />
                <input placeholder="Start Year" required defaultValue={i.start} />
                <input placeholder="Graduated" required defaultValue={i.graduated} />
                <div className="btn-container">
                  <button type="submit" className="btn-save">Save</button>
                  <button type="button" className="btn-delete" onClick={(e) => deleteEducation(i.id)}>Delete</button>
                </div>
              </form>
            </li>
          </div>
        );
      })}
      <form onSubmit={addEducation}>
        <input placeholder="University/School" required />
        <input placeholder="Course" required />
        <input placeholder="Start Year" required />
        <input placeholder="Graduated" required />
        <button className="btn_addEdu" type="submit">Add</button>
      </form>
    </div>


  );
}