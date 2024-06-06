<script>
    import { getContext } from 'svelte';
	import Title from '../title.svelte';
	import Wrapper from '../subpage/pagewrapper.svelte';
	import MenuWrapper from '../subpage/sidenav/menuwrapper.svelte';
	import SideNav from '../subpage/sidenav/sidenav.svelte';
	import ContentWrapper from '../subpage/content/contentwrapper.svelte';

    export let title;
    let pageTitle = getContext('page-title');
    $pageTitle = title;

    
</script>

<div class="wrapper">
	<Title />
	<Wrapper>
		<MenuWrapper>
			<SideNav current={title} />
			<ContentWrapper>
				<slot />
			</ContentWrapper>
		</MenuWrapper>
	</Wrapper>
</div>