var posts=["post/cfcee281.html","post/c4e64a0d.html","post/3cf822e1.html","post/9b1514a6.html","post/9897d2d3.html","post/8523.html","post/c70ee45d.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};