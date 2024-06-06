<script>
    export let title
    export let sub
    export let href
</script>
<a class="basics-menu-content-index" {href}>
        <div class="basics-menu-bar-container">
            <div class="basics-menu-bar"></div>
        </div>
        <div class="basics-menu-text-index">
            <span class="title">{title}</span>
            <span class="sub">{sub}</span>
        </div>
</a>


<style>
    .basics-menu-content-index {
        margin: 5px;

        width: 60%;
        height: 100px;

        border-radius: 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;

        cursor: pointer;
    }

    .basics-menu-content-index:nth-child(2n+1){
        background-color: #F2F2F2;
    }

    .basics-menu-content-index:nth-child(2n){
        background-color: #E0E0E0;
    }

    .basics-menu-bar-container {
        height:100%;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        left: 10px;
    }

    .basics-menu-bar {
        height: 70%;
        width: 5px;

        margin-top: 7px;
        margin-bottom: 7px;
        margin-left: 5px;
        margin-right: 5px;

        border-radius: 15px;

        background-color: #D83030;
    }
    
    .basics-menu-text-index {
        display: flex;
        flex-direction: column;
        
        justify-content: center;
        align-items: center;
        
        margin-right: 10px;
        margin-left: 10px;

        color: #303030;
    }

    .title {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: bold;
        font-size: 20px;
    }

    .sub {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: bold;
        font-size: 12px;
        margin-top: 10px;
    }

    @media only screen and (max-width: 767px) {
        .basics-menu-content-index {
        margin: 5px;

        width: 125%;
        height: 80px;

        border-radius: 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;

        cursor: pointer;
        }

        .basics-menu-content-index:nth-child(2n+1){
            background-color: #F2F2F2;
        }

        .basics-menu-content-index:nth-child(2n){
            background-color: #E0E0E0;
        }

        .basics-menu-bar-container {
            height:100%;

            display: flex;
            justify-content: center;
            align-items: center;

            position: absolute;
            left: 10px;
        }

        .basics-menu-bar {
            height: 50%;
            width: 5px;

            margin-top: 7px;
            margin-bottom: 7px;
            margin-left: 5px;
            margin-right: 5px;

            border-radius: 15px;

            background-color: #D83030;
        }
        .basics-menu-text-index {
            display: flex;
            flex-direction: column;
            
            justify-content: center;
            align-items: center;
            
            margin-right: 10px;
            margin-left: 10px;

            color: #303030;
        }
        .title {
            font-family: 'Noto Sans KR', sans-serif;
            font-weight: bold;
            font-size: 20px;
        }
        .sub {
            font-family: 'Noto Sans KR', sans-serif;
            font-weight: bold;
            font-size: 10px;
        }
    }
</style>