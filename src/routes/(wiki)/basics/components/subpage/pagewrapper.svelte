<div class='wrapper'>
    <slot />
</div>

<style>
    .wrapper{
        width:calc(100% - 200px);

        margin-left:auto;
        margin-right:auto;
        margin-top:80px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (max-width: 767px) {
        .wrapper{
        width: 100%;

        margin-left:auto;
        margin-right:auto;
        margin-top:0px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    }
</style>