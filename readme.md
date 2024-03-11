# typescript-project setup:
1. create an empty folder in your local
2. create a package with : `npm init --yes`
The output shows a newly created package.json file:

{
  "name": "example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
3. Install typescript:
Next save typescript compiler and the loader ts-node as development dependencies.
command: `npm i -D typescript ts-node`
The shell output shows the installed dependencies (with your version instead)

+ ts-node@10.0.0
+ typescript@4.3.4

4. Setup tsconfig: Next you can create a tsconfig.json file using typescript's tsc --init command:
`tsc --init`:
A success message is shown in the terminal:

message TS6071: Successfully created a tsconfig.json file.
5. Create a typescript file
e.g., index.ts 

6. Run the script
You can run typescript using NodeJS with the ts-node/esm loader. Run your script like so:
`node --loader ts-node/esm index.ts`
7. Other alternative to run the typescript file:
`tsc <file name> ` it will convert typescript file to javascript then again run `node <js file>`.