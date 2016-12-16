# Important!
**layouts** and **inc** directories are not included in the gulp pipeline. Don't forget to include them if you want to use them.

### Bootstrap 3 navigation
**An example using [wp_bootstrap_navwalker.php](https://github.com/twittem/wp-bootstrap-navwalker)** - 
[Refrence](http://seegatesite.com/create-wordpress-theme-with-bootstrap-and-underscores-step-by-step/)
```
<nav class="navbar navbar-inverse " role="navigation">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button"  class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div><!--end navbar-header-->
        <div class="collapse navbar-collapse menu-primary" id="bs-example-navbar-collapse-1">
            <?php
            wp_nav_menu( array(
                'menu'              => '',
                'theme_location'    => 'primary',
                'depth'             => 2,
                'container'         => '',
                'container_class'   => 'collapse navbar-collapse',
                'container_id'      => 'bs-example-navbar-collapse-1',
                'menu_class'        => 'nav navbar-nav',
                'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',
                'walker'            => new wp_bootstrap_navwalker())
            );
            ?>
            <div class="col-sm-3 col-md-3 pull-right search-navbar">
                <form class="navbar-form" role="search" method="get" id="searchform" action="<?php bloginfo('home'); ?>" >
                    <div class="input-group">
                        <input type="text" id="searchbox" class="form-control" placeholder="Search" name="s" id="s">
                        <div class="input-group-btn">
                            <button class="btn btn-default"  id="searchsubmit"  type="submit"><i class="glyphicon glyphicon-search"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div><!--end navbar-colapse-->
    </div><!--end container-->
</nav>
```

Getting Started
---------------

If you want to keep it simple, head over to http://underscores.me and generate your `_s` based theme from there. You just input the name of the theme you want to create, click the "Generate" button, and you get your ready-to-awesomize starter theme.

If you want to set things up manually, download `_s` from GitHub. The first thing you want to do is copy the `_s` directory and change the name to something else (like, say, `megatherium`), and then you'll need to do a five-step find and replace on the name in all the templates.

1. Search for `'_s'` (inside single quotations) to capture the text domain.
2. Search for `_s_` to capture all the function names.
3. Search for `Text Domain: _s` in style.css.
4. Search for <code>&nbsp;_s</code> (with a space before it) to capture DocBlocks.
5. Search for `_s-` to capture prefixed handles.

OR

* Search for: `'_s'` and replace with: `'megatherium'`
* Search for: `_s_` and replace with: `megatherium_`
* Search for: `Text Domain: _s` and replace with: `Text Domain: megatherium` in style.css.
* Search for: <code>&nbsp;_s</code> and replace with: <code>&nbsp;Megatherium</code>
* Search for: `_s-` and replace with: `megatherium-`

Then, update the stylesheet header in `style.css` and the links in `footer.php` with your own information. Next, update or delete this readme.

Now you're ready to go! The next step is easy to say, but harder to do: make an awesome WordPress theme. :)

Good luck!
