import { redirect, fail } from '@sveltejs/kit';
import { users } from '$lib/dataSource.js'

export const actions = {
    default: async ({ cookies, request }) => {
        let data = await request.formData();
        let isRegistered: boolean = false;
        for(let user of users){
            isRegistered = (data.get('username') === user.username) && (data.get('password') === user.password);
            if(isRegistered) break;
        }
        if(!isRegistered){
            return fail(401, { error: 'Name or password invalid' });
        }
        else{
            throw redirect(302, '/quizzes');
        }
    }
}