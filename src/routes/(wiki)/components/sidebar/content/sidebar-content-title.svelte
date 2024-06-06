<script>
    export let href;
    export let title;
</script>

<div class="sidebar-content-title">
    <a {href}>{title}</a>
</div>

<style>
    .sidebar-content-title{
        width:100%;

        text-align: center;

        font-size: 20px;
        font-weight: 600;

        padding-top:25px;
        padding-bottom: 15px;

        box-sizing: border-box;
    }

    a{

        color:rgb(109, 109, 109);
        text-decoration: none;
    }
</style>