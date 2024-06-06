<script>
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";

    //임시
   if(browser){
     goto('/diffchart/clear/10', {replaceState:true});
   }
</script>