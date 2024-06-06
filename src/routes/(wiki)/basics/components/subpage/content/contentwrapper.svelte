<div class='wrapper'>
    <slot />
</div>

<style>
    .wrapper{
        width: 100%;

        background-color: rgb(243, 243, 243);

        border-radius: 40px;

        display: inline;
    }
    @media only screen and (max-width: 767px) {
        .wrapper{
            width: 100%;

            background-color: rgb(255, 255, 255);

            border-radius: 40px;

            display: inline;
        }
    }
</style>