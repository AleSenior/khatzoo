<script lang="ts">
    export let data;
    export let form;
</script>

<title>Login | Khatzoo!</title>

{#if form?.error}
    <p class="error">{form.error}</p>
{/if}
<form method="POST">
    <input type="text" name="username" placeholder="Username" required>
    <input type="password" name="password" placeholder="Password" required>
    <input type="submit" value="Enter" class="submit">
</form>
<p>Or register <a href="/auth/signup">here</a></p>

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
</style>