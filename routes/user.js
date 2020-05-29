const express = require("express");
const router = express.Router();
const Mentor = require("../model/Mentor")
const nodemailer = require("nodemailer");
const hbs = require('nodemailer-handlebars');
const path = require("path");

router.post("/live_booking", (req, res) => {
    const {name, email, numberOfUsers, mentorName, liveName, date } = req.body;
    let transporter = nodemailer.createTransport({
        host: "SSL0.OVH.NET",
        port: 465,
        secure: true,
        tls: { ciphers:'SSLv3' },
        auth: { 
            user: process.env.EMAIL, 
            pass: process.env.EMAIL_PASS 
        }
        ,
        dkim: {
            domainName: "squadapp.fr",
            keySelector: "squad75",
            privateKey: "-----BEGIN RSA PRIVATE KEY-----\nMIIEpgIBAAKCAQEAud6Oqt73kht/ZQogBO+MMVRNAEEUjI97WuYAcZEq7S9zkI7TL+r3iqOEflbB4rXtC5Ty4PO8G2lRP860dHgC/VqmA4u8lhEtFM8JME3Gs5lL/jKYflV8hqDC+GRgv63IN0vCQFNlFKdW4hQmxzJyFwSrfTjhq5ktp2eQ1gQgy57cMwobOH/XhJFXBVX9caDKbozNFvE2kbGtr5uTxLx+Zr+g+aDByWEkcTA+kX/y/nQ3WzmAgmh0rCgiIbdrg9wwFtk9lH0pjCxpV43svHcg3PGjWVmYA0av2YgvP/ZwVXU8xqZnuTuEM949LV5SAJIC02IfRH1DVn2EoBnBGdkLhQIDAQABAoIBAQCfYVVK9jiqY8Pg20bLlLHNVvFUR3occaigMFuvBoEds7PQAHjdPQmZK1AgmbpV8hRa+xUtijMB+lQ+d7xLpuFBaOq0Xa2PrRjQIBxL/FVnigsc5TvYEOvf8ZheMIy5sIXfzKm8SQaDKF8bK5Z49yvXyxxWG2F/qLD6PJd4vT91+cGVT4IP3/CTRafAeo6SQZFfv09xJx1wn7MxttBE+YPyw7e9VcxMpDGJGIpV7v/wb24+RlgY4qq1FL9eGGbIVfuOxlnisF+amKXaHLKBwXKVLX9VZlYkh6d5TZD48fFpS052I5PnnJ73CHNX/YDPaVQpd2s0n6OWaDKQAcgcbVD9AoGBAMN+qrYownG2dwgcTukaWWjrwVi6dbfIEM/rCeRn6TVfJe8jBEKDKirB+R7fIS2YN07v80D9tgamwqLsKPzWj8xTghkP1gvH7l0akvx3qAF3M6NeaBcgh7sTkky2mHoiljdHlOC+7B/LuTnDMiOlT6O0x3suefNKh2D7JkP8HHTvAoGBAPNlQQSEXy9xyoCEm2A2R2Mbwex8MdA/ny5+BP76dPmgsyu2ncPmQMAbfOD1JEtA2/Fq1HF+oC7EEeYOqKmz1016p6EKOaO1kE/RlrGvQWE2B02a02vx9RQxLSCFBrALX2ApGBrlOa7e+sBLHVJ/21NiwTs07TalRR73CuAp0M7LAoGBAIwvQZT8J2rJUBPV0NQg2+p73BqXIqDV6xBdV6ucw8NM5nPT5VMYoV0l2VFE6ZK7azXEpOd+x09/t2SC+mVMKrN3UnxMOc4a4ReMXciCuUvLwZCtuvCSmCITR76Q1UgHkzYys1RyM/oc6Ua9bS/YdAJNORpg2nwWfnuRvP/VQkarAoGBAOCR5+93AywPXbw+ne2jpzI2hjLgVEXEreaDt7Ba/lrkfuwyTlZVuCCIPCyDgr08VrLk0qb1Im6D0c/mbpBFsr12EfxwJsZ523EJ/HRtM3GyHALqe2/5ixraVLzQgF8l3xYmVGtcXGCQs+OAasmX1pGVaJxsNQJacvAjGBHEAzkJAoGBAImlqI54T0oee+3LORDaHf4vH76ZbemPWzgp2kslefzOuFozLY8/4jubSclZvUgLz0e5C1tqlSfZNUfBUiv13JP+M/9Gjgwu2Jd9fN/JCTMXkbGQWh7rWxwbYT3ddGhgLFS5IHQN70nhJVOVzYv9o+DDdAFFO5Qz3cknPdkYADTC-----END RSA PRIVATE KEY-----"
            
          } 
    });
    // Engine configuration
    transporter.use('compile', hbs({
        viewEngine: {
            extName: ".handlebars",
            defaultLayout: false,
        },
        viewPath: path.resolve(__dirname, "../views/"),
        extName: ".handlebars"
    }));
    // Send email    
    transporter.sendMail({
        from: '"Squad" <contact@squadapp.fr>',
        to: email,
        subject: "Squad, votre resérvation",
        template: 'squad_live_email',
        context: {
            mentorName,
            liveName,
            date
        }
    })
    transporter.sendMail({
        from: '"Squad" <contact@squadapp.fr>',
        to: "s-attilah@hotmail.com",
        subject: "Resérvation squad",
        template: 'squad_live_reservation',
        context: {
            name,
            email,
            numberOfUsers,
            mentorName,
            liveName,
            date
        }
    })
    res.json({isBooking: true, payer : {payer: name, email: email }});
})

router.post("/signup", (req, res) => {
    const {name, firstname, email, tel} = req.body;
    Mentor.findOne({email}, (err, user) => {
        if (err) {return res.json({ success: false, message: 'Désolé. Un problème est survenu. Veuillez réessayer plus tard.'})} 
        if (user) {return res.json({ success: false, message: 'Un compte existe déjà pour cette adresse email.'})}

        // Save the new user    
        const newMentor = new Mentor({name, firstname, email, tel});
        newMentor.save((err, user) => {
            if (err) return console.error(err);
            if (err) {return res.json({ success: false, message: 'Désolé. Un problème est survenu. Veuillez réessayer plus tard.'})} 
            if (user) {return res.json({ success: true, message: `Merci pour votre inscription ${name}, une personne de la Squad team vous contactera d\'ici peux. kiss !`})}
        })
    })
})

module.exports = router;