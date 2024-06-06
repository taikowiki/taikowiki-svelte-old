<script>
    import SidebarContentTitle from './sidebar-content-title.svelte';

    export let title;
    export let href;
</script>

<div class="sidebar-content">
    <SidebarContentTitle {title} {href}/>
    <slot/>
</div>

<style>
    .sidebar-content{
        width:100%;
        
        display:flex;
        flex-direction: column;
        align-items: center;
    }
</style>