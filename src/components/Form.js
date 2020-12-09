import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const submitButton = e => {
        e.preventDefault();
        let err = '';

        const storageData = {
            "imię": name,
            "email": email,
            "wiadomość": message
        }
        localStorage.setItem("formularz", JSON.stringify(storageData))

        if (name.length < 3) {
            err = ("imię musi zawierać przynajmniej 3 znaki");
        } else if (email.length < 2 || email.indexOf("@") === -1) {
            err = ("adres email musi posiadać znak '@' i mięć conajmniej 2 znaki")
        }

        if (err === '') {
            setName('');
            setEmail('');
            setMessage('');
        } else {
            alert(err);
        }

    }
    return (
        <div className='form-container'>
            <form onSubmit={submitButton}>
                <input type="text" placeholder='name' value={name} onChange={e => setName(e.target.value)} />
                <input type="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)} />
                <textarea placeholder='message' rows='8' cols='30' value={message} onChange={e => setMessage(e.target.value)} />
                <input className='button' type="submit" value="SEND"/>
            </form>
        </div>
    )
}

export default Form
