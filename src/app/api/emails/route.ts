"use server"
import Welcome from "@/emails/welcome"
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);



export async function POST(){
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'kanishk.saleria@cleverinsight.co',
        subject: 'Hello World',
        react: Welcome(),
    });
}
