---
layout: page
---

<html>

<head>
    <title>Anton McConville - Digital Designer and Developer</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="./style/main.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Karla" rel="stylesheet">

</head>

<body class="hickory">
    <div class="top">
        <div class="bar">
         <a href="{{ BASE_PATH }}/index.html">
            <div class="title">
                <div class="name">Anton McConville</div>
<!--                <div class="description">Digital Designer and Developer</div>-->
            </div>
            </a>
            <div class="navigation">
                <a class="deselected" href="index.html">projects</a>
                <a class="selected" href="blog.html">posts</a>
                <a class="deselected end" href="about.html">about</a>
            </div>
        </div>
    </div>
    <div class="site">
        
        <ul class="posts">
              {% for post in site.posts %}
                <li class="post"><a class="bloglink" href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a><span class="date">{{ post.date | date_to_string }}</span></li>
              {% endfor %}
        </ul>
    </div>
    <div class="footer">
        <div class="footer-container">
            <div class="copyright">Copyright - A.McConville - 2015</div>
            <div class="footer-github"><i class="fa fa-github-alt"></i>
            </div>
        </div>

    </div>
</body>

</html>

