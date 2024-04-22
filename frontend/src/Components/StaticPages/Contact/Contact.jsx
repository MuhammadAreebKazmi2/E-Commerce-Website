import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div class="wpb_wrapper">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d904.6921393200582!2d67.13714967221374!3d24.905875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33906ead1899d%3A0x3c0681e6f7d5dc14!2sHabib%20University!5e0!3m2!1sen!2s!4v1713816705731!5m2!1sen!2s"
            width="1600"
            height="450"
            style={{ border: 0 }} /* style attribute as an object */
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />

        <p><strong>Call Us:</strong> +92 21 1110 42242 (HABIB)</p>

        <p><strong>Office Hours:</strong> 9:00 am – 5:00 pm, Monday through Friday, 2nd and 4th Saturday.</p>
    <   p><strong>Mailing Address: </strong>Habib University
        Block 18, Gulistan-e-Jauhar
        University Avenue, Off Shahrah-e-Faisal
        Karachi – 75290, Sindh, Pakistan</p>

    </div>
  )
}

export default Contact