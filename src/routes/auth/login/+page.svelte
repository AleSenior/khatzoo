<script lang="ts">
    let username: string = "";
    let password: string = "";
</script>

<title>Login | Khatzoo!</title>

<form action="" method="get">
    <input type="text" name="username" placeholder="Username">
    <input type="password" name="password" placeholder="Password">
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