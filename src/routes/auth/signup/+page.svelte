<script lang="ts">
    let username: string = "";
    let email: string = "";
    let password: string = "";
</script>

<title>Signup | Khatzoo!</title>

<form action="" method="get">
    <input type="text" name="username" placeholder="Username">
    <input type="email" name="email" placeholder="Email address">
    <input type="password" name="password" placeholder="Password">
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
</style>