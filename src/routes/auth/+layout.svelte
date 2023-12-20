<div class="center">
    <div class="authForm">
        <slot />
    </div>
</div>

<style>
    .center {
        margin: 0px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .authForm {
        width: 20%;
        height: 20%;
        padding: 80px;
        background: #ddd;
        border: 2px solid #000;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
</style>