import { redirect, fail } from '@sveltejs/kit'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const actions = {
    default: async ({ cookies, request }) => {
        let formData = await request.formData();
        if(formData.get('username')!.toString().length < 4) return fail(422, { error: 'Username must be at least 4 characters long' });
        if(formData.get('password')!.toString().length < 6) return fail(422, { error: 'Password must be at least 6 characters long' });
        const user = prisma.user.create({
            data: {
                username: <string>formData.get('username'),
                email: <string>formData.get('email'),
                password: <string>formData.get('password')
            }
        });
        cookies.set('username', (await user).username, { path: '/' });
        cookies.set('email', (await user).email, { path: '/' });
        cookies.set('password', (await user).password, { path: '/' });
        throw redirect(302, '/quizzes');
    }
}