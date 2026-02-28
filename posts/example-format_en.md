# Expected Markdown Format

This document explains the mandatory and optional formatting rules you should follow when creating a new post for this Vanilla JS blog. This very sentence is the 'excerpt' that will be automatically extracted and shown on the home page.

## Mandatory Rules (For the Parser)

Because the Javascript logic fetches this raw `.md` file to build the site visually, it expects two things to **always** be at the very top of your file:

1. **The Title**: The very first line of the file must be an `H1` tag starting with exactly one `#` and a space.
2. **The Excerpt**: The first non-empty paragraph of normal text that appears after the title will be used as the preview text on `index.html`.

*Do not put images (`![img]`), blockquotes (`>`), or code blocks (` ``` `) before your first normal paragraph, because the parser skips them when looking for the excerpt.*

## Translations (The `_en` and `_es` postfix)

To create a bilingual post, you must create two identical files differing only by the language suffix:
- `posts/my-topic_en.md` (English)
- `posts/my-topic_es.md` (Español)

Then, open `posts.js` and add the common ID (`"my-topic"`) to the array. The website handles the rest automatically.

## Supported Markdown Elements

This blog uses `marked.js` and custom CSS to format everything specifically for "research-ready" readability. Feel free to use:

- **Bold** and *Italics*.
- [Links inside text](https://lucasbiagetti.com.ar).
- Code blocks (which will automatically get syntax highlighting if you specify the language, e.g., ` ```python `).
- Blockquotes `>` for citations.
- Bulleted `-` and Numbered `1.` lists.

### Rendering Mathematics

If you need to write equations, this blog natively supports KaTeX.
You can write inline math like this $E = mc^2$, or you can use `$$` for block math:

$$
f(x) = \int_{-\infty}^\infty \hat f(\xi)\,e^{2 \pi i \xi x} \,d\xi
$$

Happy writing!
