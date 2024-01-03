import { redirect, fail } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const actions = {
    default: async ({ cookies, request }) => {
        let data = await request.formData();
        let user = await prisma.user.findUnique({
            where: {username: data.get('username')!.toString()},
            select: {username: true, email: true, password: true}
        });
        if(user == null){
            return fail(401, { error: 'Name or password invalid' });
        }
        else{
            cookies.set('username', user.username, { path: '/' });
            cookies.set('email', user.email, { path: '/' });
            cookies.set('password', user.password, { path: '/' });
            throw redirect(302, '/quizzes');
        }
    }
}