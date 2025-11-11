import nodemailer from "nodemailer";

export async function POST(req: Request){
    try {
        const {name, email, message} = await req.json();

        if(!email){
            return Response.json({
                success: false,
                message: "Email is required."
            }, {status: 400})
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            port: 2525,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        })

            await transporter.sendMail({
                from: "Portfolio",
                to: process.env.EMAIL_USER,
                subject: "Query",
                html: `<h4>Hello, My name is <span style="font-weight: bold; color: #3b82f6">${name}</span></h4>
                        <p>This is where you can contact me - ${email}</p>
                        <p>${message}</p>`
            })

        return Response.json({
            success: true,
            message: `Congratulations! You broke the matrix.`
        }, {status: 200})
    } catch (error) {
        console.error("An unknown error occured.", error)
        return Response.json({
            success: false,
            message: "Internal server error."
        }, {status: 500})
    }
}