by default `expo` support local dependencies up to `ES6`. for `ES.NEXT` `@babel/runtime` has to be installed in local dependencies that require going beyond `ES6`. in this demo it was just installed in `my-logic` to support `async/await` (`ES8`). 

```sh
$ cd my-logic; npm i @babel/runtime
```

compare `react-native-local-dependency-demo/my-logic` and `react-native-local-dependency-esnext-demo/my-logic` files to see the differencies (`package.json` and js files).