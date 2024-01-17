import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function load({ cookies }){
    return {
        quizzes: await prisma.quiz.findMany({
            where: { username: cookies.get('username')!.toString() },
            orderBy: { date_created: 'asc' },
            select: {
                quiz_name: true,
                questions: {
                    orderBy: { question_id: 'asc' },
                    select: { question_desc: true }
                }
            }
        })
    }
}