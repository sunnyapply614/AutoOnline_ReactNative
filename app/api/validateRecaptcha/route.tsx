import { NextRequest, NextResponse } from "next/server";

const sleep = () => new Promise<void>((resolve) => {
    setTimeout(() => {
        resolve();
    }, 350);
});

export async function POST(req: Request) {
    const { captcha } = await req.json();
    const secretKey = "6LfB4GMnAAAAAP2mhPTzljW3UETBQjRJildTuBt8"//process.env.RECAPTCHA_SECRET;

    if (!captcha) {
        return NextResponse.json({
            message: "Unproccesable request, please provide the required fields",

        }, {
            status: 422
        })
    }
    try {
        const response = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
                },
                method: "POST",
            }
        );
        const captchaValidation = await response.json();

        
        if (captchaValidation.success) {
            // Replace this with the API that will save the data received
            // to your backend
            await sleep();
            // Return 200 if everything is successful
            return NextResponse.json({
                message: "OK",
            })
        }
        return NextResponse.json({
            message: "Unproccesable request, Invalid captcha code",
        }, {
            status: 422
        })

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong"
        }, {
            status: 422
        })
    }
    // Return 404 if someone pings the API with a method other than
    // POST
    return NextResponse.json({
        message: "Not found"
    }, {
        status: 422
    })
}
