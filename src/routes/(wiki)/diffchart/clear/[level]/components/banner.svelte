<script>
	import { page } from "$app/stores";
</script>

<div>
    <img src={`/ex/assets/img/icon/page/diffchart/clear/${$page.params.level}.png`} class="for-pc" alt="" id="capture90"/>
    <img src={`/ex/assets/img/icon/page/diffchart/clear/${$page.params.level}-mobile.png`} class="for-mobile" alt=""/>
</div>

<style>
    div{
        width:100%;
        text-align: center;
    }
    img{
        width:90%;
        min-width: 1050px;
        height: auto;
    }

    @media only screen and (max-width:767px){
        img{
            width:100%;
            min-width: 0;
        }
    }
</style>