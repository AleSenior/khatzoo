
import { PrismaClient } from '@prisma/client';
import { error } from '@sveltejs/kit';

const prisma = new PrismaClient();

export async function load({ params, cookies }){
    let quiz = await prisma.quiz.findFirst({
        where: {
            username: cookies.get('username')!,
            quiz_name: params.quizName
        },
        select: {
            questions: {
                orderBy: { question_id: 'asc' },
                select: {
                    question_id: true,
                    question_desc: true,
                    answers: {
                        orderBy: { answer_id: 'asc' },
                        select: { answer_id: true, answer_desc: true, isCorrect: true }
                    }
                }
            }
        }
    });
    if(await quiz == null) throw error(404);
    else return {
        quiz_name: params.quizName,
        questions: quiz!.questions
    }
}