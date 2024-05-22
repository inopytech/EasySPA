# SimpleSPA

> Easily add SPA to your app without Vue and React!

## Installing

1. Install via NPM

- soon...

2. Use via CDN

- Add `<script defer src='https://cdn.jsdelivr.net/gh/inopytech/SimpleSPA@main/src/index.min.js'></script>` to your HEAD tag.

## Using:

### Click

- Add **to** attribute to your HTML element, with URL for SPA navigate.
- Add **click** attribute to your HTML element.

### Mouse enter

- Add **to** attribute to your HTML element, with URL for SPA navigate.
- Add **enter** attribute to your HTML element.

### Mouse leave

- Add **`to`** attribute to your HTML element, with URL for navigate.
- Add **`leave`** attribute to your HTML element.

## Example:

```html
<html>
    <head>
        <title>EasySPA Example</title>
        <script defer src="https://cdn.jsdelivr.net/gh/inopytech/SimpleSPA@main/src/index.min.js"></script>
    </head>
    <body>
        <div id="root">
            <button to="nextPage.html" click>
                Click to Next
            </button>
            
            <button to="nextPage.html" enter>
                Mouse enter to Next
            </button>

            <button to="nextPage.html" leave>
                Mouse leave to Next
            </button>
        </div>
    </body>
</html>
```

## Config

The configuration takes place via the **`window.simpleSPAConfig`** variable.

### Configuration variables

| Variable                  | Default       | Description                                        |
| ------------------------- | ------------- | -------------------------------------------------- |
| **`rootId`**              | **`'root'`**  | ID of the `root div`                               | 
| **`removeRootId`**        | **`false`**   | Removes `id` attribute after loading.              |
| **`replaceTitle`**        | **`true`**    | Updates `<title>` tag.                             |
| **`removeSPAAttributes`** | **`true`**    | Removes `to` and trigger attributes after loading. |

### Default config object

```js
const config = {
    rootId: 'root',
    removeRootId: false,
    removeSPAAttributes: true,
    replaceTitle: true
};
```

## License

> This project is licensed under the MIT License, which allows for free distribution and modification of the project while still maintaining copyright.

## Support

> This is my first JavaScript project. I will be grateful for your support.

- **LTC Litecoin**: `LTmpWEPFceranD3kqbvNNehSRzcjaDYSkZ` **(not MWEB)**.
- **LTC BEP20**: `0x2f17af1f30fd8aa6bf1a3310ad69c017a1d6a244`.
