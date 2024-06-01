# create-react-wordpress-plugin
## Description
Create ```Wordpress + React + TailwindCSS``` plugin starter project.

## Usage
Running the Command
To generate a new project, run:

```sh
npx @grishonnganga/create-react-wordpress-plugin
```
## Running the App
After generating the project, follow these steps to run the plugin:

1. Navigate to the project directory:
```
cd my-awesome-project
```
2. Install the dependencies
```
npm install
```
3. Start the plugin
```
npm start
```
4. Start TailwindCSS JIT compiler
```
npm run tailwindwatch
```
5. Build the plugin
```
npm run compilenbuild
```
6. Zip plugin to upload to Wordpress site
```
npm run zip-plugin
```

### Prompts
The command will prompt you for the following details:

1. **Project name**: A name for the project.
2. **Project Title**: Title of the project. 
2. **Project description**: Description of the project.
3. **Author name**: Name of author.
4. **Package name**: Namespace for maintaining multiple plugins.
5. **TailwindCSS prefix**:  Prefix for tailwindcss to prevent your plugin's styles from being overriden.

### Example
```sh
npx @grishonnganga/create-react-wordpress-plugin
```
#### Prompts:

```csharp
? Project name: zodiac-signs
? Project title: Zodiac Signs
? Project description: Zodiac Signs Wordpress plugin
? Author name: John Doe
? Package name: astrology
? TailwindCSS prefix: zx-
```

#### Output:

```perl
Copy code
Project zodiac-signs created successfully.
```

The command will generate the following structure:

```go
zodiac-signs/
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── webpack.config.js
├── index.html
├── src/zodiac-signs
│   └── App.js
│   └── block.json
│   └── edit.js
│   └── index.js
│   └── input.css
│   └── render.php
│   └── view.js

```