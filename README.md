This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



**Barcode Writer in Pure JavaScript** [https://github.com/metafloor/bwip-js](https://github.com/metafloor/bwip-js)

<a href="http://metafloor.github.io/bwip-js"><img alt="bwip-js" align="right" src="http://metafloor.github.io/bwip-js/images/bwip-js.png"></a>
bwip-js is a translation to native JavaScript of the amazing code provided in [Barcode Writer in Pure PostScript](https://github.com/bwipp/postscriptbarcode).  The translated code can run on any modern browser or JavaScript-based server framework.

The software has encoding modules for over 90 different barcode types and standards.
All linear and two-dimensional barcodes in common use (and many uncommon
ones) are available.  An exhaustive list of supported barcode types can be
found at the end of this document.

**bwip-js demo** [https://bwip-js.metafloor.com/demo/demo.html](https://bwip-js.metafloor.com/demo/demo.html)

## Bootstrap Process
```bash
npx create-react-app react-typescript-bwip --typescript
cd react-typescript-bwip
npm install
npm install bwip-js --save
npm start
# Check the App.tsx file regarding the bwip-js integration
```

## Available Scripts

In the project directory, you can run:
```bash
npm install
npm start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
```bash
npm test
```

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
```bash
npm run build
```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
```bash
npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
