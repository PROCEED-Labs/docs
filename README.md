# Proceed Documentation

You can find the docs at https://docs.proceed-labs.org.

## Development

We use [Nextra](https://nextra.site/) (which uses Next.js under the hood) as the static site-generator.

To get started with development, fork this repo and run `yarn install` in the root directory.

After installation, you can run `yarn dev` to start the local development server.

If you want to add or change something, please make sure that you have [`git lfs`](https://git-lfs.github.com/) installed for storing large files like pictures.

## Deployment

The commands `yarn build` and `yarn next export` build the static site and then export the HTML, CSS and JS to a folder, which can be statically hosted.

The Nextra site is automatically deployed to GitHub Pages by a GitHub Action whenever the repo registers any changes, so you don't need to do it manually.

## License

The content on this site is licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).
