# tiktok

## Reach out to me if you need help at any steps

## What you need
Homebrew (to install node.js)  --> http://brew.sh/

Node.js `brew install node`

https://changelog.com/install-node-js-with-homebrew-on-os-x/
- Useful guide ***Keep brew updated!***

Heroku
https://toolbelt.heroku.com/
Make sure you create an account.


You can see your version with `node --version`
- You should get to a version of at least version 6.x.x.  If you run into problems, contact me and I'll help you resolve things.

## Running the server locally
`npm install` will install all dependencies into node_modules directory.

Note, when you push to github, you'll notice that node_modules is ignored, that's done on purpose with .gitignore

`heroku local  web`

You should then have a local instance at a designated location.  The default is at port 5000, so you can access it by browsing `localhost: 5000`