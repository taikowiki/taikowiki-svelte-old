<script lang="ts">
	import { page } from '$app/stores';
    import { browser } from '$app/environment';

	$: {
		if (browser) {
			if (typeof gtag !== 'undefined') {
				gtag('config', 'G-GXHPTYZ5HY', {
					page_title: document.title,
					page_path: $page.url.pathname
				});
			}
		}
	}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-GXHPTYZ5HY">
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'G-GXHPTYZ5HY');
	</script>
</svelte:head>
