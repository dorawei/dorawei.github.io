		var disqus_shortname = '{{ site.disqus_shortname }}';
		var siteName = '{{ site.title }}';
		var page_url = '{{ page.url | replace:'index.html','' | prepend: site.url }}';
		var dsqjs = new DisqusJS({
			shortname: disqus_shortname,
			siteName: siteName,
			identifier: page_url,
			url: page_url,
			api: 'https://disq.dorawei.xyz/api/',
			apikey: 's5kM3eWLLHBjDI4BcL1vtHxdAzATMfw99qbZ4NGELJObSycTK4ztBlt50XRGKiC5',
			nocomment: 'Be the first to comment.',
			admin: 'dorawei',
			adminLabel: 'Mod'
		});