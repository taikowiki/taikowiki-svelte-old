<script>
    export let value;
    export let text;
    export let set;
    export let toggle;
    export let height;
</script>

<div class="option" on:click={() => {set(value, text);toggle();}} role="button" tabindex="0" on:keyup={() => {}} style={`height:${Number(height.replace('px', '')) - 6 }px;`}>
    {text}
</div>

<style>
    .option{
        width:100%;

        display:flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
    }

    .option:hover{
        background-color: rgb(155,166,177);
    }
</style>