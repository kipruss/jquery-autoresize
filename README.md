### Summary

A simple plugin to automatically adjust textarea height to fit text
using `rows` attribute

### Demo

A demo example can be found at [kipruss.github.io/jquery-autoresize](http://kipruss.github.io/jquery-autoresize)

### Usage

Load the plugin and use jQuery to find the desired `textarea` elements on which to call the plugin method. Setting a parameter `rows` in html code
is appropriate to avoid a shake of the textarea while a page is loading.
This parameter might be equal to parameter `minRows` or 1 if parameter
`minRows` is not specified.

```html
<textarea class="js-textarea" rows="1"></textarea>
<textarea class="js-textarea-minrows" rows="3"></textarea>
<textarea class="js-textarea-maxrows" rows="1"></textarea>
<textarea class="js-textarea-minmaxrows" rows="2"></textarea>

<script src="//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="js/jquery.autoresize.min.js"></script>
<script>
    $(function() {
        $('.js-textarea').autoResize();
        $('.js-textarea-minrows').autoResize({minRows: 3});
        $('.js-textarea-maxrows').autoResize({maxRows: 3});
        $('.js-textarea-minmaxrows').autoResize({minRows: 2, maxRows: 3});
    });
</script>
```

### How to build

  1. Install or update `node` and `npm`

    - Clear NPM's cache: `sudo npm cache clean -f`
    - Install a little helper called 'n': `sudo npm install -g n`
    - Install latest stable _NodeJS_ version: `sudo n stable`. Alternatively pick a specific version and install like this: `sudo n 0.8.20`

  2. Install latest _gulp_ version

    ```bash
    npm install gulpjs/gulp#4.0
    ```

  3. Add string in your `.bashrc` or launch in console:

    ```bash
    export PATH="./node_modules/.bin:$PATH"
    ```

  4. Install all packages: `npm install`

  5. Run building system

    - for run examples page `gulp dev` or just for building: `gulp build`

  6. Run js test

    - run `gulp lint`

### License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php)

### Resources

* https://github.com/thomasjo/jquery-autoresize
* https://github.com/kipruss/lar4ik