import { json } from "@sveltejs/kit";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST({ request, cookies }){
    let quiz = await prisma.quiz.create( {
        data: {
            username: cookies.get('username')!,
            quiz_name: 'New Quiz'
        }
    })
    return json({ quiz_name: quiz.quiz_name, questions: [] });
}