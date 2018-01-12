var nodemailer = require('nodemailer');

//163邮箱
// var transporter = nodemailer.createTransport({
//     host: "smtp.163.com",
//     secureConnection: true,
//     port: 465, 
//     auth: {
//         user: config.your_mail, //邮箱账号
//         pass: config.mail_pass, //邮箱密码
//     }
// });

var transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    secureConnection: true, // use SSL
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'xuebing365@qq.com',
        pass: 'jifodfhzpylpbfhg' // QQ邮箱需要使用授权码
    }
});

var mailOptions = {
    from: 'xuebing365@qq.com', // sender address
    to: '949096562@qq.com', // list of receivers
    subject: 'test', // Subject line
    text: '123', // plaintext body
    html: '<b>789</b>' // html body  当html不为空时 text内容会被覆盖
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Message sent: ' + info.response);
    }
});