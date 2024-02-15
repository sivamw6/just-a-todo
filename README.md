# Note 12.Feb.2024

1. Import / export between named and default
2. Github branch, pull request, commands
3. Parent component and child component
4. The purpose of the prop **"key"**
5. **var**, **let**, and **const**
6. Arrow function

## 1. Named import / export in a module file:

### What is Name import / export?

Named exports allow you export mulitple function or variables in a single module file, the names from a module to another module have to be same.
Use curly braket to import to conclude the functions or variables.

In a module file:

```
export const add = (num) => num + 1;
export const substract = (num) => num - 1;

// or //
const add = (num) => num + 1;
const minus = (num) => num - 1;

export {add, minus}

```

In another file:

```
import {add, ,minus} from './components/simpleMath';
```

If wish to import as different name in another module, to avoid naming conficts, can use **_as_** keyword to rename it.

```
import { add as addNumber, minus as minusNumber } from '../components/simpleMath';

// `add` is the original name from the module, `addNumber` is the re-name //

console.log(addNumber(5));
console.log(minusNumber(5));
```

### What is default import / export?

A module exports a single default export. When importing a default export, can use any name without curly brackets.

In a module file: StringUtils.js

```
const conCatStrings = (a, b) => a + b;
export default concatStrings;
```

In another file:

```
import concat from './components/StringUtils'
```

#### The benefits of using named imports and exports:

- Named imports & exports enforce the use of a specific name unless explicityly renamed during import, it can avoid confusion and improve code consistency.
- With named exports, it is easier to identify where specific functions or variables are used throughout the project, make refactoring and debugging simpler

## 2. Github branch, pull request, and commands

### Pull request on existing proejct:

When making changes or updates to an existing project, it is necessary to create a new branch for specific updates, for example, 'update-title', and to perform only that update on the branch. After completing the update, push the changes to the branch. Once it has been reviewed by other collaborators (colleagues), it can be merged into the main branch.

1. Branch: Create a branch from main branch.
2. Commit Changes: Work on the change and commit it to the new branch.
3. Pull request(PR): When ready, submit a pull request on GitHub to have your changes reviewed by other collaborators.
4. Review and update based on feedback: Have the change reviewed by other collaborators and incorporate any feedback.
5. Merge: Merge to the main branch and pull the updated main branch to local machine.

### Commands:

1. Create a new repo on GitHub web page.
2. Creare a local repo

```
git init
```

3. Connect the local repo to GitHub

```
git remote add origin https://github.com/your-repo-url
```

4. Add file and submit it

```
git add .
git commit -m "Initial commit"
```

5. Push to GitHub

```
git push -u origin main
```

## 3. Parent component v.s. Child component

### Parent component:

Parent component is a component include a single or multiple child components, it controlls the states and behaviours of child component, and passes data as props to child component.

In this just-a-todo project, TodoList is a parent component to TodoItem.
TodoList passes functions handleAddTodo, handleDelete, and handleEdit as value of property, and the property name being passed as props to child component TodoItem.

### Child component:

Child component is a component included by other component(parent component). It can receive data from parent component, and inform parent component when gets triggered by specific event(for example, click a button and trigger a function from parent component). Child component is allowed to be used by multiple components.

In this just-a-todo project, TodoItem is a child compnent to TodoList.

### Restrictions in parent and child component:

- Props are only passed from parent to child.
- Props are read only in child component.
- Child compnent is focus on being reusable.

## 4. The purpose of the prop "key"

`key` prop is like an individual id of the item itself, when using `map()` to render a child component, `key` prop helps React to identify the specific item, to proceed further process without render whole component, it can improve the project's ability and avoid unnecessary DOM manipulations.

- `key` prop is unique for each item in a list.
- If don't use `key` prop, React might render the whole component again when using looping method such as `map()`.
- Only render to update the specifc item is more stable for the project.

## 5. var, let, and const

### var

- `var` is the oldest way to declare variable
- **scope**: Global scope
- **hoisting**: The declaration can be moved to the top of the scope, but the assignment cannot.
- **Re-declaration**: Can be re-declare within the scope multiple times.
- **Reassignment**: Can be re-assigned.

### let

- Since ES6
- **scope**: Block scope, only visible within {}
- **hoisting**: `let` cannot be used before declaration, will be in TDZ(Temporal Dead Zone).
- **Re-declaration**: Cannot re-declare withing the same scope.
- **Reassignment**: Can be re-assigned

### const

- Since ES6
- **scope**: Block scope, only visible within {}
- **hoisting**: `const` cannot be used before declaration, will be in TDZ(Temporal Dead Zone).
- **Re-declaration**: Cannot re-declare withing the same scope.
- **Reassignment**: Cannot re-assigned, will cause `TypeError`
- **Mutability**: `const` can't be re-assigned, but not the value itself. If the value is an object or array, its content can be modified.

### Notes:

Hoisting:

`var`:

```
console.log(heyVar);   //undefined
var heyVar = 5;
console.log(heyVar);   // 5
```

`let`&`const`:

```
console.log(dodo);  // ReferenceError: Cannot access 'dodo' before initialization
let dodo = 6;
console.log(dodo);  // 5
```

### Summary:

`let` and `const` are more strict than `var`.

## 6. Arrow function

It is a new way to wirte a function since ES6, provide concise way behave differently when handling `this` keyword.

- Arrow function cannot be used as methods.

### Traditional function:

```
function add( num) {
  return num +1
}
```

### Arrow function:

```
const add = (num) => {num +1}

// the parentheses can be saved if there's only one parameter
const add = num => {num+1}

// or the curly brakects can be remove if there's only one statement, and it is retrun statement
const add = num => num+1
```

### Handling the `this` keyword
