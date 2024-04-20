# SimpleSPA

> Easily add SPA to your app without Vue and React!

## Installing

1. Install via NPM

- Run `npm install @inopytech/simplespa`.
- Add `import { initSPA } from '@inopytech/simplespa'` to your main JS.
- Run `initSPA()` function.

2. Use via CDN

- Add `<script defer src='https://cdn.jsdelivr.net/gh/inopytech/SimpleSPA@main/src/index.cdn.min.js'></script>` to your HEAD tag.

## Using:

### Click

- Add **to** attribute to your HTML element, with URL for SPA navigate.
- Add **click** attribute to your HTML element.

### Mouse enter

- Add **to** attribute to your HTML element, with URL for SPA navigate.
- Add **enter** attribute to your HTML element.

### Mouse leave

- Add **to** attribute to your HTML element, with URL for SPA navigate.
- Add **leave** attribute to your HTML element.

## Example:

```html
<html>
    <head>
        <title>EasySPA Example</title>
        <script defer src="https://cdn.jsdelivr.net/gh/inopytech/SimpleSPA@main/src/index.cdn.min.js"></script>
    </head>
    <body>
        <button to="nextPage.html" click>
            next
        </button>
    </body>
</html>
```

## License

> This project is licensed under the MIT License, which allows for free distribution and modification of the project while still maintaining copyright.

## Support

> This is my first JavaScript project. I will be grateful for your support.

- **LTC Litecoin**: `LTmpWEPFceranD3kqbvNNehSRzcjaDYSkZ` **(not MWEB)**.
- **LTC BEP20**: `0x2f17af1f30fd8aa6bf1a3310ad69c017a1d6a244`.
