<script>
	import SidebarContentText from '../../sidebar-content-text.svelte';
    export let color;
    export let genre;
    export let href;
</script>

<SidebarContentText>
    <a {href}>{genre}</a>
    <div class="genre-color" style={`background-color:${color};`}/>
</SidebarContentText>

<style>
    a{
        text-decoration: none;
        color: inherit;
    }

	.genre-color {
		width: 6px;
		height: 10px;
		border-radius: 2px;
        position:absolute;
		right: 40px;

        transform:translateY(0.5px)
	}
</style>