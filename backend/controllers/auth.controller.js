const User              = require('../models/User');
const shortid           = require('shortid');
const nodemailer        = require('nodemailer');
const bcrypt            = require('bcrypt');

let transporter         =  nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'sologame37@gmail.com',
        pass: '_TswsCskZjg_87561'
    }
});

async function sendMail(toMail, link) {
    const mainOptions = {
        from: 'sologame37@gmail.com',
        to: toMail,
        subject: 'Please confirm your Email account',
        text: 'You recieved message from sologame37@gmail.com',
        html: `Hello,<br> Please Click on the link to verify your email.<br><a href="${link}">Click here to verify</a>`
    }

    const info = await transporter.sendMail(mainOptions);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

class AuthController {
    async checkCookie(req, res, next) {
        const userId = req.body.id;
        const user = await User.find({ id: userId });
        if (!user.length) {
            res.send(false);
            return;
        }
        res.send(user[0]);
    }
    async login(req, res, next) {
        let errors = [];

        const user = await User.find({ email: req.body.email });

        if (user.length) {
            const validPassword = await bcrypt.compare(req.body.password, user[0].password);
            if (validPassword && user[0].isVerified) {
                res.send(['success', 'Logged in successfully', user[0].id.toString()]);
            } else {
                errors.push("Wrong email or password");
            }
        } else {
            errors.push("Wrong email or password");
        }

        if(errors.length) {
            res.send(['errors', 'Wrong email or password']);
    		return;
    	}
    }
    async register(req, res, next) {
        let errors = [];
        await User.find({ username: req.body.username}, (err, user) => {
            if (user.length) {
                errors.push("Username is already in use");
            }
        });
        await User.find({ email: req.body.email}, (err, user) => {
            if (user.length) {
                errors.push("Email is already in use");
            }
        });

        if (errors.length) {
            res.send(['errors', 'Username or Email is already in use']);
            return;
        }

        const salt              = await bcrypt.genSalt();
        req.body.password       = await bcrypt.hash(req.body.password, salt);

        const userId = shortid.generate();
        const newUser = new User({
            id:             userId,
            username:       req.body.username,
            email:          req.body.email,
            password:       req.body.password,
            description:    '',
            date:           new Date()
        });

        newUser.save();
        const link=`http://localhost:8080/#/auth/verify/${userId}`;
        sendMail(req.body.email, link);
        res.send(['success', 'Sign Up Success, we have sent verification to your mail']);
    }
    async verify(req, res, next) {
        const user = await User.find({ id: req.params.id});
        if (!user.length) {
            res.send('User is not exist')
            return;
        }
        User.updateOne({ id: req.params.id}, {isVerified: true})
        .then(() => res.send('User is verified'));
    }
}

module.exports = new AuthController();
