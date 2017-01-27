{
	title: 'Link s3 to enduro',
	$date_value: '2017-01-24',
	$date_type: 'date',
	date: 'Tuesday, 24 January, 2017',
	published: true,
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Linking enduro to aws s3 storage enables two features:\n* **Uploading** images directly to s3 from the admin interface\n* Using **juicebox** to version and backup site\'s content\n\nBelow is a step-by-step guide on how to enable s3:\n\n## Link the s3 bucket\nFirst, you have to have a s3 bucket created. [Create one](http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html) if you didn\'t do so. When you have your s3 bucket ready, just pass it\'s name to enduro in $$/enduro.json file along with the region of this bucket:\n\n```\n{\n	"project_name": "Your project name",\n	"project_slug": "ypn",\n	"s3": {\n		"bucket": "testbucket",\n		"region": "eu-west-1"\n	}\n}\n```\n\n## Add the aws credentials\n\nBe careful not to use the root credentials, but to use iam to create a key pair for use with s3 only. Once you have your key and secret, add it to $$/enduro_secret.json or as a environment variable:\n\n```\n{\n	"secret": {\n		"s3": {\n			"S3_KEY": "<your_aws_key>",\n			"S3_SECRET": "<your_aws_secret_key>"\n		}\n	}\n}\n```\n\nWow, we are done! Now you can use juicebox, upload images to s3 from admin interface.',
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Linking enduro to aws s3 storage enables two features:</p>\n<ul>\n<li><strong>Uploading</strong> images directly to s3 from the admin interface</li>\n<li>Using <strong>juicebox</strong> to version and backup site&#39;s content</li>\n</ul>\n<p>Below is a step-by-step guide on how to enable s3:</p>\n<h2 id="link-the-s3-bucket">Link the s3 bucket</h2>\n<p>First, you have to have a s3 bucket created. <a href="http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html">Create one</a> if you didn&#39;t do so. When you have your s3 bucket ready, just pass it&#39;s name to enduro in <span class="markdown_folder">/enduro.json</span> file along with the region of this bucket:</p>\n<pre><code>{\n    &quot;project_name&quot;: &quot;Your project name&quot;,\n    &quot;project_slug&quot;: &quot;ypn&quot;,\n    &quot;s3&quot;: {\n        &quot;bucket&quot;: &quot;testbucket&quot;,\n        &quot;region&quot;: &quot;eu-west-1&quot;\n    }\n}\n</code></pre><h2 id="add-the-aws-credentials">Add the aws credentials</h2>\n<p>Be careful not to use the root credentials, but to use iam to create a key pair for use with s3 only. Once you have your key and secret, add it to <span class="markdown_folder">/enduro_secret.json</span> or as a environment variable:</p>\n<pre><code>{\n    &quot;secret&quot;: {\n        &quot;s3&quot;: {\n            &quot;S3_KEY&quot;: &quot;&lt;your_aws_key&gt;&quot;,\n            &quot;S3_SECRET&quot;: &quot;&lt;your_aws_secret_key&gt;&quot;\n        }\n    }\n}\n</code></pre><p>Wow, we are done! Now you can use juicebox, upload images to s3 from admin interface.</p>\n',
		contents: [
			{
				heading: 'Link the s3 bucket',
				level: '2',
				link: 'link-the-s3-bucket'
			},
			{
				heading: 'Add the aws credentials',
				level: '2',
				link: 'add-the-aws-credentials'
			}
		]
	},
	teaser: {
		doc: 'Linking enduro to aws s3 storage enables uploading images directly to s3 from the admin interface and using juicebox to version and backup site\'s content',
		$image_type: 'image',
		image: '',
		$abstracted_content_hidden: true,
		abstracted_content: {
			marked_doc: '<p>Linking enduro to aws s3 storage enables uploading images directly to s3 from the admin interface and using juicebox to version and backup site&#39;s content</p>\n',
			contents: []
		}
	}
}