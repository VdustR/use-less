# use-less

useLess is an useless react hook

## Usage

### With Pre-processor

Install:

```bash
npm i react-use-less
# or use yarn
yarn add react-use-less
```

Import it!

```js
import useLess from 'react-use-less';

const MyComponent = () => {
  useLess(); // 💁‍♂️
};
```

## CDN

useLess can be used through CDN:

```html
<!-- import react-use-less(choose one) -->
<script crossorigin src="https://cdn.jsdelivr.net/npm/react-use-less"></script>
<script
  crossorigin
  src="https://cdn.jsdelivr.net/npm/react-use-less/umd/use-less.js"
></script>
<script
  crossorigin
  src="https://cdn.jsdelivr.net/npm/react-use-less/umd/use-less.min.js"
></script>
<script crossorigin src="https://unpkg.com/react-use-less"></script>
<script
  crossorigin
  src="https://unpkg.com/react-use-less/umd/use-less.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-use-less/umd/use-less.min.js"
></script>

<!-- Also works for module -->
<script type="module">
  // choose one
  import useLess from 'https://cdn.jsdelivr.net/npm/react-use-less/esm/use-less.js';
  import useLess from 'https://unpkg.com/react-use-less/esm/use-less.js';
  // ...
</script>
```

## License

MIT
