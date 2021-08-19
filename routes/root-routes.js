const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', (req, res) => res.render('index'));

router.get('/contact', (req, res) => res.render('contact',
{subtitle: 'Contact'}))

router.post("/contact", urlencodedParser, async (req,res) =>{

    const data = req.body;

    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth:{
            user: "neil.tziku@hotmail.com",
            pass: "Storm42680"
        }
    });

    const options= {
        from: 'neil.tziku@hotmail.com',
        to: data.email,
        subject:data.titre,
        text: data.texte,
    };

    transporter.sendMail(options, function(err, info){
        if(err){
            console.log(err)
        }else{
            console.log('sent')
        }
    })

    res.render("contact-success", {data: req.body})
})

router.get("/guidance", (req,res) => res.render("guidance",
{subtitle: 'Guidance parentale'}))

router.get("/formation", (req,res) => res.render("cpf",
{subtitle: 'Formation/CPF'}))

router.get("/dev-perso", (req,res) => res.render("dev-perso",
{subtitle: 'Développement personnel'}))

router.get("/enquete", (req,res) => res.render("enquete",
{subtitle: 'Enquête sociale'}))

router.get("/cv", (req,res) => res.render("cv",
{subtitle: 'mon cv'}))

router.get("/qui-sommes-nous", (req,res) => res.render("qui-sommes-nous",
{subtitle: 'qui sommes nous'}))

module.exports = router;