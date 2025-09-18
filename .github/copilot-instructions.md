---
applyTo: "**/*.ts,**/*.tsx"
---
# Project coding standards for TypeScript and React

## TypeScript Guidelines
- Use TypeScript for all new code
- Follow functional programming principles where possible
- Use interfaces for data structures and type definitions
- Prefer immutable data (const, readonly)
- Use optional chaining (?.) and nullish coalescing (??) operators
- Use strong typing for function parameters and return types
- Use enums for fixed sets of values
- Use `unknown` type for values that can be anything, and narrow down types as needed
- Use `Record<string, any>` for objects with dynamic keys
- Use `any` type sparingly, only when absolutely necessary
- Use `as const` for literal types when you want to preserve the exact type
- Use `type` for type aliases and `interface` for object shapes
- Use `type` for union types and intersection types
- I use hints in the code for me to understand the context, so please respect them
- Use `@note` comments to explain complex logic or important details - these are important and you should not remove them unless they are no longer relevant - but let me know if you do
- Use `@todo` comments for tasks that need to be completed later
- Use `@fixme` comments for known issues that need to be addressed - if you see these, analyze the issue and provide a solution if possible
- Use `@example` comments to provide usage examples for functions or classes
- Use `@deprecated` comments for code that is no longer recommended for use
- Use `@see` comments to link to related code or documentation

## React Guidelines
- Use functional components with hooks
- Follow the React hooks rules (no conditional hooks)
- Use React.FC type for components with children
- Keep components small and focused - refactor if they grow too large, but let me know to confirm
- Use CSS modules for component styling
- Use `useEffect` for side effects and cleanup

## Refactoring Guidelines

When you are asked to refactor code:
Refactor the **ProjectList component file** requested, but **keep its behavior and UX exactly the same**. 

Goals:
- Aim for clean, readable code
- Break down large functions into smaller, reusable ones
- Remove dead code and unused variables. Remove any unused variables or imports.
- Use descriptive variable and function names
- Keep component files small and focused
- Improve the code structure and readability (simplify complex functions, break into smaller ones if needed).
- Ensure the file follows best practices and is well-documented.
- When files are long (greater than 400 lines), consider breaking them up into smaller, more manageable modules.

Do **not** introduce any new features or change how the component works for the user – this is purely a code cleanup for maintainability. If any part of the code is unclear, add a brief comment for clarification.