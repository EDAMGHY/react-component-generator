# Com-React

com-react is a React-Component-Generator that generates a file with An Arrow Function Component for React

(on NPM: [com-react](https://www.npmjs.com/package/com-react))

## Quick Installation:

### NPM

```
npm install -g com-react
```

#### or

```
npx install  com-react
```

Once You have installed **com-react** you can use it from anywhere in your PC.
Run the following command to make sure that you have the latest version

```
com-react --version
```

#### or

```
com-react -V
```

## How to Use

You can run **com-react** from the root of your application using

```
com-react <FileName>
```

#### or

```
com-react <FolderName> <FileName>
```

## Examples

```
com-react card
```

This command will generate a `Card.js` File and Open It. inside the `src/` folder of the react project.

---

```
com-react components card
```

This command creates a file named `Card.js` inside the `components/` folder all of this will be inside the `src/` folder. It also supports nested folders like

```
com-react components/cards card
```

---

## Note

When the File generates it will be automatically opened in the vscode IDE. <br/>
Other IDE or Text Editors not supported yet.
