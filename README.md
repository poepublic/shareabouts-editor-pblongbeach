Shareabouts Editor
==================

<small>(for Chicago Complete Streets)</small>

To get set up, run:

    git clone git@github.com:openplans/shareabouts-editor-chibikes.git
    cd shareabouts-editor-chibikes
    npm install
    bower install

To deploy this repository to gh-pages, run the following commands:

    grunt build
    git add --all dist
    git commit -m "Update the distribution files"
    git push
    git subtree push --prefix dist origin gh-pages

*(Subtree instructions from https://gist.github.com/cobyism/4730490)*

Make sure that the dataset allows access from the domain you want to run
this app from (e.g. *openplans.github.io*). The origin does not need to have
any explicit permissions on the dataset. In fact, you might as well remove
all permissions from the origin, as the user will be used determine
authorization.


Browser Compatibility
---------------------

This application has been tested in IE 10, Chrome 34, and Firefox 30. It should
work in new versions of each as well.
