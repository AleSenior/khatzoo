<script lang="ts">
	import { enhance } from "$app/forms";
	import Answer from "$lib/components/create/answer.svelte";
    import Navbar from "$lib/components/navbar.svelte";
    export let questions: string[];
</script>

<Navbar />

<form action="createQuiz" method="post" class="quiz" use:enhance>
    <div class="quizMaker">
        <input type="text" name="quizName" class="quizName" placeholder="Quiz Name">
        <form action="addQuestion" method="post" class="questionMaker" use:enhance>
            <input type="text" name="question" class="question" placeholder="Question">
            <div class="answers">
                <Answer num={1} />
                <Answer num={2} />
            </div>
            <div class="answers">
                <Answer num={3} />
                <Answer num={4} />
            </div>
            <button type="submit" class="submitQuestion">
                <i class="bi bi-plus-circle"></i>ADD QUESTION
            </button>
        </form>
    </div>
    <aside class="quizDetails">
        <div class="section">
            <label for="questions">Questions: </label>
            <select name="questions" id="questions">
                <option value={10}>10 segundos</option>
            </select>
        </div>
        <div class="section">
            <label for="time">Time limit: </label>
            <select name="time" id="time">
                <option value={10}>10 segundos</option>
                <option value={15}>15 segundos</option>
                <option value={30} selected>30 segundos</option>
                <option value={60}>1 minuto</option>
                <option value={120}>2 minutos</option>
                <option value={180}>3 minutos</option>
                <option value={300}>5 minutos</option>
                <option value={600}>10 minutos</option>
            </select>
        </div>
        <div class="section">
            <button type="submit" class="submitQuiz">
                <i class="bi bi-plus-circle"></i> CREATE QUIZ
            </button>
        </div>
    </aside>
</form>

<style>
    .quiz{
        width: 100%;
        height: calc(100% - 50px);
        display: flex;
        justify-content: space-between;
    }
    .quizMaker{
        width: 65%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .quizName{
        width: 330px;
        height: 28px;
        border: 2px solid black;
        border-radius: 8px;
        font-size: 18px;
        position: absolute;
        top: 6px;
        left: 6px;
    }
    .questionMaker{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .question{
        width: 664px;
        height: 48px;
        border: 2px solid black;
        border-radius: 8px;
        font-size: 18px;
        text-align: center;
        margin-bottom: 32px;
    }
    .answers{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .quizDetails{
        width: 35%;
        height: 100%;
        background-color: #DDDDDD;
        border-left: 2px solid black;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .section{
        width: 85%;
    }
    label{
        width: 100%;
        font-size: 24px;
        text-align: center;
    }
    select{
        width: 100%;
        height: 32px;
        font-size: 14px;
    }
    .submitQuestion{
        width: 28%;
        height: 20%;
        margin-top: 32px;
        font-size: 18px;
    }
    .submitQuiz{
        width: 100%;
        height: 100%;
        font-size: 18px;
    }
</style>