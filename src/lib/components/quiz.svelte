<script lang="ts">
    import { fly } from 'svelte/transition';
    export let quizName: string;
    export let questions: string[];
</script>

<form method="get" in:fly={{y: 50}} out:fly={{y: 50}}>
    <div class="header">
        <h2>{quizName}</h2>
        <button type="submit">START</button>
    </div>
    <div class="separator"/>
    <ul class="questions">
        {#each questions as q}
            <li>{q}</li>
        {/each}
    </ul>
</form>

<style>
    form {
        width: 80%;
        background-color: #CCCCCC;
        padding: 16px;
        border: 1px solid black;
        margin-top: 48px;
        display: flex;
        align-items: center;
    }
    h2{
        width: 100%;
        font-size: 18px;
        text-align: center;
        margin: 0px;
    }
    button {
        background-color: #AAAAAA;
        font-size: 16px;
        font-weight: 700;
        border: 0px;
        padding: 8px calc(50% - 26px);
    }
    .header{
        width: 20%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .separator{
        margin: 0px 16px;
        width: 4px;
        height: 100%;
        background-color: #AAAAAA;
    }
    ul{
        padding-left: 14px;
    }
</style>