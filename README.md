# dhevanthareza.github.io

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# Deploying a subfolder to GitHub Pages

Sometimes you want to have a subdirectory on the `master` branch be the root directory of a repository’s `gh-pages` branch. This is useful for things like sites developed with [Yeoman](http://yeoman.io), or if you have a Jekyll site contained in the `master` branch alongside the rest of your code.

For the sake of this example, let’s pretend the subfolder containing your site is named `dist`.

### Step 1

Remove the `dist` directory from the project’s `.gitignore` file (it’s ignored by default by Yeoman).

### Step 2

Make sure git knows about your subtree (the subfolder with your site).

```sh
git add dist && git commit -m "Initial dist subtree commit"
```

### Step 3

Use subtree push to send it to the `gh-pages` branch on GitHub.

```sh
git subtree push --prefix dist origin gh-pages
```

Boom. If your folder isn’t called `dist`, then you’ll need to change that in each of the commands above.

---

If you do this on a regular basis, you could also [create a script](https://github.com/cobyism/dotfiles/blob/master/bin/git-gh-deploy) containing the following somewhere in your path:

```sh
#!/bin/sh
if [ -z "$1" ]
then
  echo "Which folder do you want to deploy to GitHub Pages?"
  exit 1
fi
git subtree push --prefix $1 origin gh-pages
```

Which lets you type commands like:

```sh
git gh-deploy path/to/your/site
```
