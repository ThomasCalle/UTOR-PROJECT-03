import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function Contact() {
    return (
        <div className="container d-flex flex-column justify-content-center min-vh-100">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                <h1 className="title">Contact</h1>
                    <form
                        action="https://getform.io/f/(customSlugHere)"
                        method="POST"
                        className="d-flex flex-column"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            className="inputField glow"
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter Email"
                            className="inputField glow"
                        />
                        <textarea
                            name="message"
                            placeholder="Enter Message (400) Character Max"
                            rows="10"
                            className="textareaField glow"
                        />
                        <button 
                            type="button"
                            className="submitButton"
                        >
                            Let's Unite.

                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
