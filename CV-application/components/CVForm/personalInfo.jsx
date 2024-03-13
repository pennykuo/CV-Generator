// import React,{Component,useState} from 'react';
export default function PersonalInfo(//傳入的值
    onFirstName,
    onLastName,
    onTitle,
    onAddress,
    onPhoneNumber,
    onMail,
    onDescription,
) {
    return (
        <>
            <div id="personal-Info">
                <input type="text" placeholder="First Name" onChange={onFirstName} />
                <input type="text" placeholder="Last Name" onChange={onLastName} />
                <input type="text" placeholder="Title" onChange={onTitle} />
                <input type="text" placeholder="Address" onChange={onAddress} />
                <input type="text" placeholder="PhoneNumber" onChange={onPhoneNumber} />
                <input type="text" placeholder="Mail" onChange={onMail} />
                <textarea placeholder="Description" onChange={onDescription}> </textarea>

            </div>
        </>

    )
}