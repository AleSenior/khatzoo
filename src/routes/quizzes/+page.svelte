<script>
    import Navbar from '$lib/components/navbar.svelte';
    import Quiz from '$lib/components/quiz.svelte';
    import { goto } from '$app/navigation';
    export let data;
    export let quizzes = data.quizzes;
</script>

<Navbar />

<div class="quizzes">
    <div class="quizContainer">
        {#each quizzes as quiz}
            <Quiz quizName={quiz.quiz_name} questions={quiz.questions.map((q) => q.question_desc)}/>
        {/each}
    </div>
    <button class="create" on:click={ async () => {
        let response = await fetch('/quizzes/quiz', {
            method: 'POST'
        })
        let newQuiz = await response.json();
        quizzes.push(newQuiz);
        goto(`/quizzes/${newQuiz.quiz_name}`);
    } }>
        <i class="bi bi-plus-circle"></i> CREATE QUIZ
    </button>
</div>

<style>
    .quizzes{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .quizContainer{
        width: 100%;
        margin: 16px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .create {
        width: 30%;
        font-size: 32px;
        background-color: #AAAAAA;
        padding: 16px;
        border: 2px solid black;
        margin-top: 64px;
        text-decoration: none;
        text-align: center;
        color: black;
        
    }
    .create:hover{
        background-color: #999999;
    }
</style>