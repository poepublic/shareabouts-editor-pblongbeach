Shareabouts Editor
==================

<small>(for Chicago Complete Streets)</small>

To get set up, run:

    git clone git@github.com:openplans/shareabouts-editor-chibikes.git
    cd shareabouts-editor-chibikes
    npm install
    bower install

Make sure that the dataset allows access from the domain you want to run
this app from (e.g. *openplans.github.io*). The origin does not need to have
any explicit permissions on the dataset. Remove permissions from the origin, 
as the user will be used determine authorization.

To run the server locally:

    grunt serve

Deploying
---------

To deploy this repository to gh-pages, run the following commands **within a
clean repository** (any files that are modified and not checked in will find
their way into the distribution if your repository is not clean):

    bower install
    grunt build
    git add --all dist
    git commit -m "Update the distribution files"
    git push
    git subtree push --prefix dist origin gh-pages

*(Subtree instructions from https://gist.github.com/cobyism/4730490)*

If you're missing subtree, [install it](http://engineeredweb.com/blog/how-to-install-git-subtree/).

Browser Compatibility
---------------------

This application has been tested in IE 10, Chrome 34, and Firefox 30. It should
work in new versions of each as well.
