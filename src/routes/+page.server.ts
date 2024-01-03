import { PrismaClient } from '@prisma/client';
import { redirect } from '@sveltejs/kit';

const prisma = new PrismaClient();

export async function load({ cookies }) {
    let username = cookies.get("username");

    if(username === undefined){
        throw redirect(302, '/auth/login');
    }
    else{
        let user = await prisma.user.findUnique({
            where: {username: username},
            select: {username: true}
        })
        if(user != null) throw redirect(302, '/quizzes');
        else throw redirect(302, '/auth/login');
    }
}