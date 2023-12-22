import { users } from '$lib/dataSource'; // Más adelante se usará una conexión a una base de datos
import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
    let username = cookies.get("username");
    let email = cookies.get("username");
    let password = cookies.get("username");

    if(username === undefined || email === undefined || password === undefined){
        throw redirect(302, '/auth/login');
    }
    else{
        let verified: boolean = false;
        for(let u of users){
            verified = (u.username === username &&
                        u.email === email &&
                        u.password === password);
            if(verified) break;
        }
        if(verified) throw redirect(302, '/quizzes');
        else throw redirect(302, '/auth/login');
    }
}