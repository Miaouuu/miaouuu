# Brutal - The neobrutalist Nuxt theme

Brutal is a minimal neobrutalist theme for [Nuxt](https://nuxt.com/). It's based on Neobrutalist Web Design, a movement that aims to create websites with a minimalistic and functional design. It has some integrations like RSS, Sitemap, ready to get your SEO done right.

This template is based on [ElianCodes/brutal](<https://github.com/ElianCodes/brutal/>).

## Usage

### Commands

All commands are run from the root of the project, from a terminal:

(Here I use PNPM, no problem if you use NPM or Yarn)

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `pnpm install`      | Installs dependencies                              |
| `pnpm dev`          | Starts local dev server at `localhost:3000`        |
| `pnpm build`        | Build your production site to `./.output/`         |
| `pnpm preview`      | Preview your build locally, before deploying       |

## Integrations

### UnoCSS

In this theme, I'm using [UnoCSS](https://uno.antfu.me/) to generate the CSS. It's a utility-first CSS framework that uses a single class to style elements. It's very easy to use and has a lot of features. It's setup to be completely compatible with TailwindCSS, with the advantage of being able to use PureCSS icons. You can always switch out UnoCSS for TailwindCSS if you want to, without breaking the general styles.

### Sitemap

To generate the sitemap, you don't need to do anything. It's automatically generated when you build your site. You'll just need to switch out the `site.url` on `nuxt.config.ts` to your own.

### RSS

The RSS feed is automatically generated from the Markdown files in the `src/content/blog` folder. You can ofcourse completely change this to your own needs.

The RSS will output to `https://example.com/feed.xml` by default.

## Components

### Colors

The theme has a few colors that you can use in the included components.

- red
- blue
- green
- yellow
- pink
- purple
- orange
- teal
- cyan
- lime
- emerald
- fuchsia
- violet
- rose
- sky
- amber

More colors can be added in `useColor.ts` in the `colors` array.

If you need more from this theme, don't hesitate to open an issue or reach out to me!
