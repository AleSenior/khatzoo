<script lang="ts">
    export let num: number;
    export const color = (n: number): string => {
        switch(n){
            case 1: return "#FF3040";
            case 2: return "#2050FF";
            case 3: return "#FFDB30";
            case 4: return "#00CD35";
            default: return "#00000000";
        }
    }
    export const icon = (n: number): string => {
        switch(n){
            case 1: return "bi-triangle-fill";
            case 2: return "bi-diamond-fill";
            case 3: return "bi-circle-fill";
            case 4: return "bi-square-fill";
            default: return "";
        }
    }
</script>

<div class="answer" style="--color: {color(num)}">
    <i class="icon bi {icon(num)}"></i>
    <input type="text" name={"answer" + num} placeholder={"Answer " + num}>
</div>

<style>
    .answer {
        width: 300px;
        height: 64px;
        background-color: var(--color);
        margin: 4px;
        padding: 16px;
        border: 2px solid black;
        display: flex;
        justify-content: left;
        align-items: center;
    }
    .icon {
        font-size: 32px;
        color: white;
        margin-right: 8px;
    }
    input {
        width: 250px;
        height: 32px;
        font-size: 18px;
        text-align: center;
    }
</style>