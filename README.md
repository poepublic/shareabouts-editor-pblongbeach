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
    git add dist
    git commit -m "Update the distribution files"
    git subtree push --prefix dist origin gh-pages

*(Subtree instructions from https://gist.github.com/cobyism/4730490)*
