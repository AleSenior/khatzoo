<script lang="ts">
    import RemoveBtn from '$lib/components/removeBtn.svelte'
    import { enhance } from '$app/forms';
    import { fly, slide } from 'svelte/transition';
    export let form;
</script>

<title>Signup | Khatzoo!</title>

{#if form?.error}
    <form class="error" in:fly={{y: 50}} out:fly={{y: 50}}>
        <p>{form.error}  <RemoveBtn /></p>
    </form>
{/if}
<form method="POST" use:enhance>
    <input type="text" name="username" placeholder="Username" required>
    <input type="email" name="email" placeholder="Email address" required>
    <input type="password" name="password" placeholder="Password" required>
    <input type="submit" value="Sign up" class="submit">
</form>
<p>Or log in <a href="/auth/login">here</a></p>

<style>
    form {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
    input {
        width: 300px;
        height: 32px;
        margin: 8px;
        border: 1px solid #000;
        border-radius: 8px;
        font-size: 1.2rem;
    }
    .submit {
        width: 100px;
    }
    p {
        margin: 16px 0px 0px 0px;
    }
    .error p {
        margin: 0px;
        display: flex;
        align-items: center;
    }
</style>