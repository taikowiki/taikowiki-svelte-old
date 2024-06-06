<script>
	import OtherOption from "./otherOption.svelte";

    export let selected = [];
</script>

<OtherOption bind:selected text={'정수기'} value="water"/>
<OtherOption bind:selected text={'화장실'} value="restroom"/>
<OtherOption bind:selected text={'주차장'} value="parking"/>
<OtherOption bind:selected text={'캡쳐보드'} value="capture"/>
<OtherOption bind:selected text={'대여'} value="rental"/>
<OtherOption bind:selected text={'밤샘'} value="night"/>
<OtherOption bind:selected text={'ATM'} value="ATM"/>
<OtherOption bind:selected text={'선풍기'} value="fan"/>