<script>
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";

    //임시
    if(browser){
        goto('/diffchart/clear', {replaceState:true});
    }
</script>