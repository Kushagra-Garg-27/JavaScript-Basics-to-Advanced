# Full-Stack JavaScript Mastery Roadmap

### From Zero to Industry-Ready | B.Tech CSE Edition

**Stack:** JavaScript | Node.js | React.js | Next.js | MongoDB
**Approach:** Concept-first, academic-style, depth-over-speed
**Goal:** Software Development Internship / Full-Stack Role

---

> **How to use this roadmap:**
>
> - Treat each Unit as a semester-level block.
> - Complete chapters sequentially within a unit. Do not skip.
> - Every chapter has subtopics — cover each one, write code for each.
> - Projects are mandatory, not optional. Build after every unit.
> - DSA runs in parallel. Interleave it, don't postpone it.

---

# PART A — THE LANGUAGE

---

## UNIT 1: JavaScript Foundations

### Chapter 1: Introduction to JavaScript

- 1.1 What is JavaScript? (History, ECMAScript, TC39)
- 1.2 JavaScript engines (V8, SpiderMonkey — how code runs)
- 1.3 JavaScript runtime environments (Browser vs Node.js)
- 1.4 Setting up the development environment (VS Code, Node.js, browser console)
- 1.5 Writing and running your first script (console, `<script>` tag, `.js` files)
- 1.6 Strict mode (`"use strict"`)

### Chapter 2: Variables & Data Types

- 2.1 `var`, `let`, `const` — declarations and differences
- 2.2 Primitive types: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- 2.3 Reference types: `object`, `array`, `function`
- 2.4 `typeof` operator and its quirks (`typeof null === "object"`)
- 2.5 Type coercion — implicit vs explicit (`==` vs `===`, `Number()`, `String()`, `Boolean()`)
- 2.6 Truthy and falsy values (memorize the 7 falsy values)
- 2.7 Template literals and string methods
- 2.8 `NaN`, `Infinity`, and `-0`

### Chapter 3: Operators & Expressions

- 3.1 Arithmetic, assignment, comparison, logical operators
- 3.2 Unary operators (`++`, `--`, `!`, `typeof`, `delete`, `void`)
- 3.3 Ternary operator
- 3.4 Nullish coalescing (`??`) and optional chaining (`?.`)
- 3.5 Short-circuit evaluation (`&&`, `||`)
- 3.6 Operator precedence table
- 3.7 Comma operator
- 3.8 Bitwise operators (overview — needed for DSA later)

### Chapter 4: Control Flow

- 4.1 `if`, `else if`, `else`
- 4.2 `switch` statement (fall-through, `break`, `default`)
- 4.3 `for`, `while`, `do...while` loops
- 4.4 `for...in` (objects) vs `for...of` (iterables)
- 4.5 `break`, `continue`, labeled statements
- 4.6 Error-free pattern: guard clauses and early returns

### Chapter 5: Functions — Part 1 (Core)

- 5.1 Function declarations vs expressions
- 5.2 Parameters, arguments, default parameters
- 5.3 The `arguments` object
- 5.4 Rest parameters (`...args`)
- 5.5 Return values
- 5.6 Arrow functions — syntax and behavior differences
- 5.7 IIFE (Immediately Invoked Function Expressions)
- 5.8 Callback functions — concept and usage
- 5.9 Pure functions vs impure functions
- 5.10 First-class functions — what it means

> **DSA Checkpoint 1:** Start solving basic problems — loops, conditionals, simple string/array manipulation on LeetCode Easy.

---

### Unit 1 Projects

| Level        | Project                                               |
| ------------ | ----------------------------------------------------- |
| Beginner     | CLI-based calculator with chained operations          |
| Beginner     | Temperature converter with input validation           |
| Intermediate | Number guessing game (CLI) with scoring               |
| Intermediate | Expense tracker (CLI) — add, view, filter by category |

---

## UNIT 2: Core JavaScript — Intermediate

### Chapter 6: Arrays — Deep Dive

- 6.1 Creating arrays, accessing elements, length
- 6.2 Mutating methods: `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`, `fill`
- 6.3 Non-mutating methods: `slice`, `concat`, `flat`, `flatMap`
- 6.4 Iteration methods: `forEach`, `map`, `filter`, `reduce`, `find`, `findIndex`, `some`, `every`
- 6.5 `reduce` — deep mastery (accumulator patterns, object building, grouping)
- 6.6 `Array.from`, `Array.of`, `Array.isArray`
- 6.7 Destructuring arrays
- 6.8 Spread operator with arrays
- 6.9 Searching: `includes`, `indexOf`, `find`, `findIndex`
- 6.10 Sorting: custom comparators, sorting objects
- 6.11 Multi-dimensional arrays
- 6.12 Common pitfalls: reference copies, sparse arrays

### Chapter 7: Objects — Deep Dive

- 7.1 Object literals, properties, methods
- 7.2 Dot notation vs bracket notation
- 7.3 Computed property names
- 7.4 Shorthand properties and methods
- 7.5 `Object.keys()`, `Object.values()`, `Object.entries()`
- 7.6 `Object.assign()`, spread with objects
- 7.7 `Object.freeze()`, `Object.seal()`
- 7.8 Destructuring objects (nested, aliasing, defaults)
- 7.9 Property descriptors (`Object.defineProperty`, `writable`, `enumerable`, `configurable`)
- 7.10 Shallow copy vs deep copy (structured clone, JSON trick, limitations)
- 7.11 `in` operator, `hasOwnProperty`
- 7.12 Iterating over objects

### Chapter 8: Strings — Advanced Operations

- 8.1 String immutability
- 8.2 Useful methods: `split`, `join`, `trim`, `replace`, `replaceAll`, `padStart`, `padEnd`
- 8.3 `startsWith`, `endsWith`, `includes`, `repeat`
- 8.4 Regular expressions — basics (`test`, `match`, `replace` with regex)
- 8.5 Template literals — tagged templates
- 8.6 String encoding (Unicode, UTF-8 awareness)

### Chapter 9: Maps, Sets & Other Built-in Structures

- 9.1 `Map` — creation, methods, iteration, when to use over objects
- 9.2 `WeakMap` — use cases (private data, caching)
- 9.3 `Set` — creation, methods, uniqueness
- 9.4 `WeakSet`
- 9.5 `Map` vs Object — performance and feature comparison
- 9.6 Iterators and the `Symbol.iterator` protocol
- 9.7 Generators (`function*`, `yield`) — basics

### Chapter 10: Scope, Closures & Execution Context

- 10.1 Global scope, function scope, block scope
- 10.2 Lexical scoping — how JavaScript resolves variables
- 10.3 The scope chain
- 10.4 Closures — definition, how they work internally
- 10.5 Closure use cases:
  - Data privacy / encapsulation
  - Function factories
  - Memoization
  - Module pattern
  - Event handlers with preserved state
- 10.6 Common closure pitfalls (loops + `var`, stale closures)
- 10.7 Garbage collection and closures — memory leaks

> **DSA Checkpoint 2:** Arrays & Strings — Two pointers, sliding window, frequency counting with Map/Set. Solve 30+ problems.

---

### Unit 2 Projects

| Level        | Project                                                             |
| ------------ | ------------------------------------------------------------------- |
| Beginner     | Phonebook app (CLI) — CRUD with objects and arrays                  |
| Intermediate | Student grade management system with sorting, filtering, statistics |
| Intermediate | Inventory management system — search, sort, stock alerts            |
| Advanced     | Mini spreadsheet engine (CLI) — parse expressions, cell references  |

---

## UNIT 3: JavaScript Under the Hood

### Chapter 11: Execution Context & The Call Stack

- 11.1 What is an execution context? (Global execution context, function execution context)
- 11.2 Creation phase vs execution phase
- 11.3 Variable environment and lexical environment
- 11.4 The call stack — how JavaScript tracks function execution
- 11.5 Stack overflow (infinite recursion)
- 11.6 Visualizing execution context with examples

### Chapter 12: Hoisting — Deep Explanation

- 12.1 What actually happens during hoisting (it's about the creation phase)
- 12.2 `var` hoisting — declared but not initialized
- 12.3 `let` and `const` — the Temporal Dead Zone (TDZ)
- 12.4 Function declaration hoisting vs function expression hoisting
- 12.5 Class hoisting
- 12.6 Hoisting priority order (functions > variables)
- 12.7 Why hoisting exists — design decision context

### Chapter 13: The `this` Keyword — All Cases

- 13.1 `this` in the global context (browser vs Node.js)
- 13.2 `this` inside regular functions (strict vs non-strict)
- 13.3 `this` inside methods
- 13.4 `this` inside arrow functions (lexical `this`)
- 13.5 `this` with event handlers
- 13.6 Explicit binding: `call()`, `apply()`, `bind()`
- 13.7 `this` inside constructors and classes
- 13.8 `this` inside `setTimeout` / `setInterval`
- 13.9 Losing `this` — common bugs and fixes
- 13.10 Decision flowchart: "What is `this`?"

### Chapter 14: Prototypes & Inheritance

- 14.1 What is a prototype?
- 14.2 `__proto__` vs `prototype` property
- 14.3 The prototype chain
- 14.4 `Object.create()` — creating objects with a specific prototype
- 14.5 Constructor functions + `new` keyword
- 14.6 Prototypal inheritance — how it works
- 14.7 Property shadowing
- 14.8 `hasOwnProperty()` vs `in` — inherited vs own properties
- 14.9 `Object.getPrototypeOf()`, `Object.setPrototypeOf()`
- 14.10 Why JavaScript chose prototypes over classical inheritance

### Chapter 15: Classes (ES6+)

- 15.1 Class declarations and expressions
- 15.2 Constructor method
- 15.3 Instance methods and properties
- 15.4 Static methods and properties
- 15.5 Private fields (`#property`)
- 15.6 Getters and setters
- 15.7 Inheritance with `extends` and `super`
- 15.8 Method overriding
- 15.9 `instanceof` operator
- 15.10 Classes vs constructor functions — under the hood, it's prototypes

### Chapter 16: ES6+ Features — Comprehensive

- 16.1 `let`, `const` (revisited with execution context knowledge)
- 16.2 Arrow functions (revisited with `this` knowledge)
- 16.3 Destructuring (arrays, objects, nested, function parameters)
- 16.4 Spread and rest operators (all use cases)
- 16.5 Default parameters
- 16.6 Enhanced object literals
- 16.7 `for...of` loop and iterables
- 16.8 Symbols — unique identifiers, well-known symbols
- 16.9 Optional chaining and nullish coalescing (revisited)
- 16.10 Logical assignment operators (`&&=`, `||=`, `??=`)
- 16.11 `globalThis`
- 16.12 `structuredClone()`

> **DSA Checkpoint 3:** Recursion — understand call stack deeply. Solve 15+ recursion problems. Start linked lists and stacks.

---

### Unit 3 Projects

| Level        | Project                                                           |
| ------------ | ----------------------------------------------------------------- |
| Beginner     | Build your own `bind`, `call`, `apply` polyfills                  |
| Intermediate | Build a class-based library system (inheritance, polymorphism)    |
| Intermediate | Custom event emitter class (pub-sub pattern)                      |
| Advanced     | Build a mini JavaScript interpreter (evaluate simple expressions) |

---

## UNIT 4: Asynchronous JavaScript

### Chapter 17: The Event Loop & Concurrency Model

- 17.1 JavaScript is single-threaded — what this means
- 17.2 The event loop — detailed explanation with diagrams
- 17.3 Call stack, Web APIs, callback queue, microtask queue
- 17.4 Macrotasks vs microtasks (priority order)
- 17.5 `setTimeout`, `setInterval` — they don't guarantee exact timing
- 17.6 `requestAnimationFrame`
- 17.7 `queueMicrotask()`
- 17.8 Starvation scenarios
- 17.9 Event loop exercises — predict the output (critical for interviews)

### Chapter 18: Callbacks & Callback Hell

- 18.1 Synchronous vs asynchronous operations
- 18.2 Callback pattern
- 18.3 Error-first callbacks (Node.js convention)
- 18.4 Callback hell / pyramid of doom
- 18.5 Inversion of control problem
- 18.6 Why callbacks are insufficient for complex async flows

### Chapter 19: Promises

- 19.1 What is a promise? (Pending, fulfilled, rejected)
- 19.2 Creating promises with `new Promise()`
- 19.3 `.then()`, `.catch()`, `.finally()`
- 19.4 Promise chaining
- 19.5 Returning values from `.then()`
- 19.6 Error propagation in promise chains
- 19.7 `Promise.all()` — parallel execution, fail-fast
- 19.8 `Promise.allSettled()` — wait for all, regardless
- 19.9 `Promise.race()` — first to settle wins
- 19.10 `Promise.any()` — first to fulfill wins
- 19.11 Microtask queue and promises
- 19.12 Common mistakes: unhandled rejections, missing returns in chains

### Chapter 20: Async/Await

- 20.1 `async` functions — always return a promise
- 20.2 `await` — pausing execution until promise settles
- 20.3 Error handling with `try...catch`
- 20.4 Sequential vs parallel execution with `await`
- 20.5 `await` in loops — `for...of` vs `forEach` (forEach doesn't await)
- 20.6 Top-level `await` (ES modules)
- 20.7 Combining async/await with `Promise.all()`
- 20.8 Async patterns: retry logic, timeout wrapper, racing

### Chapter 21: Error Handling

- 21.1 `try`, `catch`, `finally`
- 21.2 The `Error` object — `message`, `name`, `stack`
- 21.3 Error types: `TypeError`, `ReferenceError`, `SyntaxError`, `RangeError`
- 21.4 Custom error classes (extending `Error`)
- 21.5 Throwing errors — when and why
- 21.6 Error handling in async code (promises vs async/await)
- 21.7 Global error handlers (`window.onerror`, `unhandledrejection`)
- 21.8 Defensive programming vs fail-fast

### Chapter 22: Modules

- 22.1 Why modules? (Encapsulation, reusability, dependency management)
- 22.2 CommonJS (`require`, `module.exports`) — Node.js
- 22.3 ES Modules (`import`, `export`, `export default`)
- 22.4 Named exports vs default exports
- 22.5 Dynamic imports (`import()`)
- 22.6 Module scope
- 22.7 Circular dependencies — how they're handled
- 22.8 CommonJS vs ESM — differences and when to use which

> **DSA Checkpoint 4:** Stacks, Queues, Linked Lists — implement from scratch in JavaScript. Solve 25+ problems.

---

### Unit 4 Projects

| Level        | Project                                                            |
| ------------ | ------------------------------------------------------------------ |
| Beginner     | Promise-based timer utility / countdown                            |
| Intermediate | File downloader simulator (parallel + sequential with Promise.all) |
| Intermediate | Async task queue with concurrency limit                            |
| Advanced     | Build your own `Promise` class from scratch (polyfill)             |

---

## UNIT 5: Advanced JavaScript Concepts

### Chapter 23: Functional Programming in JavaScript

- 23.1 Core principles: pure functions, immutability, no side effects
- 23.2 Higher-order functions
- 23.3 Function composition (`compose`, `pipe`)
- 23.4 Currying — manual and with a utility
- 23.5 Partial application
- 23.6 Memoization — implementation and use cases
- 23.7 Recursion as a loop alternative
- 23.8 `reduce` as a universal tool
- 23.9 Avoiding mutation: `map`/`filter`/`reduce` over `for` loops

### Chapter 24: Debouncing, Throttling & Performance Patterns

- 24.1 Debouncing — implementation and use cases (search input, resize)
- 24.2 Throttling — implementation and use cases (scroll, mousemove)
- 24.3 `requestAnimationFrame` for smooth animations
- 24.4 Lazy evaluation
- 24.5 Web Workers — offloading heavy computation (overview)

### Chapter 25: Design Patterns in JavaScript

- 25.1 Module pattern (closure-based)
- 25.2 Revealing module pattern
- 25.3 Singleton pattern
- 25.4 Factory pattern
- 25.5 Observer pattern (pub/sub)
- 25.6 Strategy pattern
- 25.7 Decorator pattern
- 25.8 Proxy pattern (with ES6 `Proxy`)
- 25.9 When to use which pattern — decision guide

### Chapter 26: Metaprogramming

- 26.1 `Proxy` — traps, handlers, use cases
- 26.2 `Reflect` API
- 26.3 Symbols as property keys
- 26.4 Well-known symbols (`Symbol.iterator`, `Symbol.toPrimitive`, etc.)
- 26.5 Property descriptors and `Object.defineProperty` (revisited)
- 26.6 `eval()` — why you should almost never use it

### Chapter 27: Memory Management & Performance

- 27.1 How JavaScript manages memory (stack vs heap)
- 27.2 Garbage collection — mark-and-sweep algorithm
- 27.3 Memory leaks — common causes (dangling references, closures, detached DOM nodes, timers)
- 27.4 `WeakRef` and `FinalizationRegistry`
- 27.5 Performance profiling basics (DevTools Memory tab)

> **DSA Checkpoint 5:** Trees (BFS, DFS), basic graph traversal, hash maps for optimization. Solve 30+ problems.

---

### Unit 5 Projects

| Level        | Project                                                     |
| ------------ | ----------------------------------------------------------- |
| Beginner     | Implement debounce, throttle, memoize, curry from scratch   |
| Intermediate | Observable pattern library (like a mini RxJS)               |
| Advanced     | Build a reactive state management system (like a mini MobX) |
| Advanced     | Build a plugin system using Proxy and design patterns       |

---

# PART B — THE BROWSER

---

## UNIT 6: DOM, Events & Browser APIs

### Chapter 28: The Document Object Model (DOM)

- 28.1 What is the DOM? (Tree structure, nodes)
- 28.2 Selecting elements: `getElementById`, `querySelector`, `querySelectorAll`
- 28.3 Traversing the DOM: `parentNode`, `children`, `nextSibling`, `previousSibling`
- 28.4 Creating elements: `createElement`, `createTextNode`
- 28.5 Inserting elements: `appendChild`, `insertBefore`, `append`, `prepend`, `after`, `before`
- 28.6 Removing elements: `remove`, `removeChild`
- 28.7 Modifying elements: `textContent`, `innerHTML`, `innerText`
- 28.8 Attributes: `getAttribute`, `setAttribute`, `dataset` (data attributes)
- 28.9 Styling: `style` property, `classList` (`add`, `remove`, `toggle`, `contains`)
- 28.10 `DocumentFragment` for batch operations
- 28.11 DOM performance — why batch reads/writes matter (layout thrashing)

### Chapter 29: Events

- 29.1 Event listeners: `addEventListener`, `removeEventListener`
- 29.2 The Event object — properties and methods
- 29.3 Event propagation: capturing, target, bubbling
- 29.4 `stopPropagation()` vs `stopImmediatePropagation()`
- 29.5 `preventDefault()`
- 29.6 Event delegation — pattern and benefits
- 29.7 Common events: `click`, `input`, `change`, `submit`, `keydown`, `keyup`, `focus`, `blur`
- 29.8 Mouse events: `mouseover`, `mouseout`, `mouseenter`, `mouseleave`
- 29.9 Custom events (`CustomEvent`, `dispatchEvent`)
- 29.10 Passive event listeners (`{ passive: true }`)
- 29.11 Once option (`{ once: true }`)

### Chapter 30: Browser APIs & Web Storage

- 30.1 `localStorage` — set, get, remove, clear
- 30.2 `sessionStorage` — differences from localStorage
- 30.3 Cookies — `document.cookie`, expiry, path, domain
- 30.4 `localStorage` vs `sessionStorage` vs Cookies — when to use which
- 30.5 Fetch API — `fetch()`, headers, methods, body
- 30.6 `AbortController` — cancelling fetch requests
- 30.7 `FormData` API
- 30.8 `URL` and `URLSearchParams`
- 30.9 `Intersection Observer` — lazy loading images
- 30.10 `MutationObserver` — watching DOM changes
- 30.11 Geolocation API (overview)
- 30.12 Clipboard API

### Chapter 31: How the Browser Works

- 31.1 HTTP request lifecycle (DNS, TCP, TLS, request, response)
- 31.2 Browser rendering pipeline: DOM tree → CSSOM → Render tree → Layout → Paint → Composite
- 31.3 Reflow vs repaint — what triggers each
- 31.4 Critical rendering path
- 31.5 `<script>` placement: `defer` vs `async` vs bottom of body
- 31.6 CORS — what it is, preflight requests, how to handle
- 31.7 Same-origin policy
- 31.8 Content Security Policy (CSP) — awareness
- 31.9 HTTPS, SSL/TLS — what they are (no deep crypto)

---

### Unit 6 Projects

| Level        | Project                                                              |
| ------------ | -------------------------------------------------------------------- |
| Beginner     | Interactive color picker with DOM manipulation                       |
| Beginner     | Form validator with real-time error messages                         |
| Intermediate | Infinite scroll image gallery with Intersection Observer             |
| Intermediate | Kanban board (drag and drop, localStorage persistence)               |
| Advanced     | Build a complete single-page app router from scratch (no frameworks) |
| Advanced     | Rich text editor (contenteditable, toolbar, formatting commands)     |

---

# PART C — THE BACKEND

---

## UNIT 7: Node.js & Server-Side JavaScript

### Chapter 32: Node.js Fundamentals

- 32.1 What is Node.js? (V8 engine, libuv, non-blocking I/O)
- 32.2 Node.js architecture — event loop in Node (different from browser)
- 32.3 Global objects: `__dirname`, `__filename`, `process`, `global`
- 32.4 `process.env`, `process.argv`, `process.exit()`
- 32.5 Node.js REPL

### Chapter 33: Modules & Package Management

- 33.1 CommonJS modules: `require`, `module.exports` (deep)
- 33.2 ES Modules in Node.js (`.mjs`, `"type": "module"`)
- 33.3 Built-in modules: `path`, `os`, `url`, `crypto`, `util`
- 33.4 npm: `init`, `install`, `install -D`, `scripts`, `npx`
- 33.5 `package.json` and `package-lock.json` — what they do
- 33.6 Semantic versioning (`^`, `~`, exact)
- 33.7 Publishing a package (awareness)

### Chapter 34: File System & Streams

- 34.1 `fs` module: `readFile`, `writeFile`, `appendFile`, `unlink`, `rename`
- 34.2 Sync vs async file operations
- 34.3 `fs.promises` — promise-based API
- 34.4 Working with directories: `mkdir`, `readdir`, `rmdir`
- 34.5 Streams: readable, writable, duplex, transform
- 34.6 `pipe()` — chaining streams
- 34.7 Buffers — binary data handling
- 34.8 When to use streams (large files, real-time data)

### Chapter 35: Express.js — Building APIs

- 35.1 What is Express? Setting up a server
- 35.2 Routing: `app.get`, `app.post`, `app.put`, `app.delete`
- 35.3 Route parameters (`:id`) and query strings
- 35.4 Request object: `req.params`, `req.query`, `req.body`, `req.headers`
- 35.5 Response object: `res.send`, `res.json`, `res.status`, `res.redirect`
- 35.6 Middleware — what it is, how `next()` works
- 35.7 Built-in middleware: `express.json()`, `express.static()`
- 35.8 Third-party middleware: `cors`, `morgan`, `helmet`
- 35.9 Custom middleware (logging, auth check)
- 35.10 Error-handling middleware (`err, req, res, next`)
- 35.11 Router module — organizing routes
- 35.12 MVC architecture — controllers, routes, models structure

### Chapter 36: REST API Design

- 36.1 REST principles (stateless, resources, HTTP verbs)
- 36.2 Resource naming conventions
- 36.3 Status codes: 200, 201, 204, 400, 401, 403, 404, 500
- 36.4 Request validation (manually + `express-validator` / `zod`)
- 36.5 Pagination, sorting, filtering
- 36.6 API versioning
- 36.7 Rate limiting
- 36.8 API documentation (Swagger/Postman awareness)

### Chapter 37: Authentication & Authorization

- 37.1 Authentication vs authorization
- 37.2 Password hashing: `bcrypt`
- 37.3 JSON Web Tokens (JWT) — structure, signing, verification
- 37.4 Access tokens and refresh tokens
- 37.5 Authentication middleware
- 37.6 Role-based access control (RBAC)
- 37.7 Cookie-based auth vs token-based auth
- 37.8 OAuth 2.0 — concept and flow (awareness)
- 37.9 Security: XSS, CSRF, SQL/NoSQL injection — prevention

---

### Unit 7 Projects

| Level        | Project                                                          |
| ------------ | ---------------------------------------------------------------- |
| Beginner     | CLI tool to read/write/search a JSON file database               |
| Beginner     | HTTP server from scratch (no Express) — serve HTML files         |
| Intermediate | REST API for a bookstore (CRUD, validation, error handling)      |
| Intermediate | URL shortener API with analytics (click counts, redirect)        |
| Advanced     | Authentication system — signup, login, JWT, refresh tokens, RBAC |
| Advanced     | Real-time chat API with WebSocket (Socket.io)                    |

---

## UNIT 8: Database — MongoDB & Mongoose

### Chapter 38: MongoDB Fundamentals

- 38.1 SQL vs NoSQL — when to use which
- 38.2 MongoDB architecture: databases, collections, documents
- 38.3 Installing MongoDB / using MongoDB Atlas (cloud)
- 38.4 MongoDB Shell / Compass
- 38.5 BSON data types
- 38.6 CRUD in MongoDB Shell: `insertOne`, `insertMany`, `find`, `updateOne`, `deleteOne`
- 38.7 Query operators: `$gt`, `$lt`, `$in`, `$or`, `$and`, `$regex`
- 38.8 Projection — selecting specific fields
- 38.9 Sorting, limiting, skipping

### Chapter 39: Mongoose ODM

- 39.1 Connecting to MongoDB with Mongoose
- 39.2 Schemas — defining structure, types, required, default
- 39.3 Models — creating and using
- 39.4 CRUD with Mongoose: `create`, `find`, `findById`, `findByIdAndUpdate`, `findByIdAndDelete`
- 39.5 Schema validation: `min`, `max`, `enum`, `match`, custom validators
- 39.6 Middleware (hooks): `pre('save')`, `post('save')`, `pre('find')`
- 39.7 Virtual properties
- 39.8 Instance methods and static methods
- 39.9 Population (`ref`, `populate`) — handling relationships
- 39.10 Indexing — why and when
- 39.11 Aggregation pipeline (basic)

### Chapter 40: Schema Design Patterns

- 40.1 Embedding vs referencing — decision criteria
- 40.2 One-to-one relationships
- 40.3 One-to-many relationships (embedded vs referenced)
- 40.4 Many-to-many relationships
- 40.5 Denormalization — when and why
- 40.6 Schema design for common apps: blog, e-commerce, social media

---

### Unit 8 Projects

| Level        | Project                                                                  |
| ------------ | ------------------------------------------------------------------------ |
| Beginner     | CLI notes app with MongoDB persistence                                   |
| Intermediate | Blog API — posts, comments, users, with population                       |
| Advanced     | E-commerce product catalog with search, filters, pagination, aggregation |

---

# PART D — THE FRONTEND FRAMEWORK

---

## UNIT 9: React.js

### Chapter 41: React Fundamentals

- 41.1 What is React? (Library vs framework, declarative UI)
- 41.2 Setting up: Vite (`npm create vite@latest`)
- 41.3 JSX — syntax, expressions, conditional rendering
- 41.4 Components — functional components
- 41.5 Props — passing data, prop types, children
- 41.6 Rendering lists — keys, `map()`
- 41.7 Conditional rendering: ternary, `&&`, early return
- 41.8 Fragments (`<>...</>`)
- 41.9 Component composition

### Chapter 42: State & Hooks

- 42.1 `useState` — state management, updater functions, lazy initialization
- 42.2 State immutability — why never mutate state directly
- 42.3 Updating objects and arrays in state
- 42.4 `useEffect` — side effects, dependency array, cleanup function
- 42.5 `useEffect` common mistakes: infinite loops, stale closures, missing dependencies
- 42.6 `useRef` — DOM references, mutable values that don't cause re-renders
- 42.7 `useMemo` — memoizing expensive computations
- 42.8 `useCallback` — memoizing functions
- 42.9 `useReducer` — complex state logic (like mini-Redux)
- 42.10 `useContext` — sharing state without prop drilling
- 42.11 Custom hooks — extracting reusable logic
- 42.12 Rules of hooks

### Chapter 43: Component Patterns & Architecture

- 43.1 Container vs presentational components
- 43.2 Controlled vs uncontrolled components (forms)
- 43.3 Lifting state up
- 43.4 Render props pattern
- 43.5 Higher-Order Components (HOCs) — awareness
- 43.6 Compound components pattern
- 43.7 Component folder structure best practices

### Chapter 44: Routing with React Router

- 44.1 Installing React Router (`react-router-dom`)
- 44.2 `<BrowserRouter>`, `<Routes>`, `<Route>`
- 44.3 `<Link>` and `<NavLink>`
- 44.4 Dynamic routes (`:id`)
- 44.5 Nested routes and `<Outlet>`
- 44.6 Programmatic navigation (`useNavigate`)
- 44.7 URL parameters (`useParams`, `useSearchParams`)
- 44.8 Protected routes — redirecting unauthenticated users
- 44.9 404 / catch-all routes
- 44.10 Lazy loading routes (`React.lazy`, `Suspense`)

### Chapter 45: Forms & Validation

- 45.1 Controlled inputs
- 45.2 Handling multiple inputs
- 45.3 `<select>`, `<textarea>`, checkboxes
- 45.4 Form submission and preventing default
- 45.5 Client-side validation patterns
- 45.6 React Hook Form (library) — usage and benefits
- 45.7 Zod + React Hook Form — schema-based validation

### Chapter 46: Working with APIs

- 46.1 Fetching data with `useEffect` + `fetch`
- 46.2 Loading states and error states
- 46.3 Custom `useFetch` hook
- 46.4 TanStack Query (React Query) — caching, refetching, mutations
- 46.5 Axios vs fetch
- 46.6 Environment variables in React (`.env`)
- 46.7 Handling authentication tokens in requests

### Chapter 47: State Management

- 47.1 When do you need state management?
- 47.2 Context API — setting up, providing, consuming
- 47.3 Context + `useReducer` — lightweight Redux alternative
- 47.4 Zustand — simple and scalable state management (recommended)
- 47.5 Redux Toolkit — overview (awareness for larger apps)
- 47.6 When to use which: local state vs context vs external store

### Chapter 48: React Performance Optimization

- 48.1 How React renders — reconciliation, diffing, virtual DOM
- 48.2 Avoiding unnecessary re-renders
- 48.3 `React.memo` — memoizing components
- 48.4 `useMemo` and `useCallback` — when they actually help
- 48.5 Code splitting with `React.lazy` and `Suspense`
- 48.6 Virtualization for long lists (`react-window`)
- 48.7 Profiling with React DevTools
- 48.8 Image optimization and lazy loading

---

### Unit 9 Projects

| Level        | Project                                                         |
| ------------ | --------------------------------------------------------------- |
| Beginner     | Weather dashboard — fetch and display API data                  |
| Beginner     | Multi-page portfolio site with React Router                     |
| Intermediate | E-commerce product listing — filters, cart, checkout flow       |
| Intermediate | GitHub profile explorer — search, repos, pagination             |
| Advanced     | Project management board (Trello clone) — drag-drop, CRUD, auth |
| Advanced     | Real-time messaging app (with Socket.io + backend)              |

---

# PART E — FULL-STACK & PRODUCTION

---

## UNIT 10: Next.js

### Chapter 49: Next.js Fundamentals

- 49.1 What is Next.js? (React framework, server-first)
- 49.2 App Router vs Pages Router (use App Router — it's the future)
- 49.3 File-based routing — folders, `page.tsx`, `layout.tsx`
- 49.4 Linking and navigation (`<Link>`, `useRouter`)
- 49.5 Loading UI (`loading.tsx`)
- 49.6 Error handling (`error.tsx`)
- 49.7 `not-found.tsx`

### Chapter 50: Rendering Strategies

- 50.1 Server Components vs Client Components (`"use client"`)
- 50.2 When to use each — decision guide
- 50.3 Static Site Generation (SSG) — default behavior
- 50.4 Server-Side Rendering (SSR) — dynamic rendering
- 50.5 Incremental Static Regeneration (ISR) — `revalidate`
- 50.6 Streaming and `Suspense`
- 50.7 Data fetching in Server Components (`async` components, `fetch` with caching)

### Chapter 51: API Routes & Server Actions

- 51.1 Route Handlers (`route.ts`) — building APIs in Next.js
- 51.2 Server Actions — form handling without API routes
- 51.3 `"use server"` directive
- 51.4 Revalidation strategies (`revalidatePath`, `revalidateTag`)
- 51.5 Middleware in Next.js

### Chapter 52: Authentication in Next.js

- 52.1 NextAuth.js (Auth.js) — setup and providers
- 52.2 Credential-based authentication
- 52.3 OAuth providers (Google, GitHub)
- 52.4 Session management
- 52.5 Protecting routes — middleware-based
- 52.6 Role-based access

### Chapter 53: Deployment & Production

- 53.1 Environment variables in Next.js (`.env.local`)
- 53.2 Building for production (`next build`)
- 53.3 Deploying on Vercel
- 53.4 Deploying on other platforms (Railway, AWS awareness)
- 53.5 Performance: Lighthouse audit, Core Web Vitals
- 53.6 SEO: metadata API, `generateMetadata`, Open Graph
- 53.7 Image optimization with `next/image`

---

### Unit 10 Projects

| Level        | Project                                                                                                                                        |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Beginner     | Personal blog with MDX/Markdown content (SSG)                                                                                                  |
| Intermediate | Job board — listings, search, filters, SSR                                                                                                     |
| Advanced     | Full SaaS dashboard — auth, CRUD, roles, API, deployment                                                                                       |
| **Capstone** | **Full-stack e-commerce platform**: auth, product catalog, cart, checkout, payment (Stripe), order management, admin panel, deployed on Vercel |

---

# PART F — PROFESSIONAL TOOLKIT

---

## UNIT 11: Industry Readiness

### Chapter 54: Git & GitHub

- 54.1 Git fundamentals: `init`, `add`, `commit`, `status`, `log`, `diff`
- 54.2 Branching: `branch`, `checkout`, `switch`, `merge`
- 54.3 Merge conflicts — understanding and resolving
- 54.4 `git stash`
- 54.5 Rebasing — when and why (`rebase` vs `merge`)
- 54.6 Remote: `push`, `pull`, `fetch`, `clone`
- 54.7 Pull requests — creating, reviewing, merging
- 54.8 `.gitignore` practices
- 54.9 Conventional commits
- 54.10 GitHub: Issues, Projects, Actions (CI/CD awareness)
- 54.11 Collaborative workflows: feature branches, Git Flow

### Chapter 55: Debugging & DevTools Mastery

- 55.1 `console` methods: `log`, `error`, `warn`, `table`, `time`, `group`, `trace`
- 55.2 Chrome DevTools: Elements, Console, Network, Sources, Performance, Application
- 55.3 Breakpoints — line, conditional, XHR, event listener
- 55.4 Network tab — inspecting requests, responses, timing
- 55.5 Debugging async code
- 55.6 React DevTools: component tree, props, state, profiler
- 55.7 Node.js debugging: `--inspect`, VS Code debugger

### Chapter 56: Code Quality & Best Practices

- 56.1 ESLint — setup, rules, plugins
- 56.2 Prettier — code formatting
- 56.3 Clean code principles (readable, DRY, KISS, YAGNI)
- 56.4 Naming conventions
- 56.5 File and folder structure patterns
- 56.6 Code reviews — how to give and receive
- 56.7 Writing testable code
- 56.8 Testing awareness: unit tests with Jest/Vitest (not deep — but know they exist)

### Chapter 57: Basic System Design Awareness

- 57.1 Client-server architecture
- 57.2 REST vs GraphQL — tradeoffs
- 57.3 Caching strategies (browser, CDN, server)
- 57.4 Load balancing — concept
- 57.5 Database indexing — why it matters
- 57.6 Horizontal vs vertical scaling
- 57.7 Microservices vs monolith — awareness
- 57.8 Message queues — concept (RabbitMQ, Redis) — awareness

### Chapter 58: Resume, Portfolio & Job Readiness

- 58.1 GitHub profile — clean repos, READMEs, pinned projects
- 58.2 Portfolio website — what to include, what not to
- 58.3 Resume for tech roles — format, action verbs, quantified impact
- 58.4 LinkedIn optimization
- 58.5 Cover letter for internships (concise template)
- 58.6 Preparing for technical interviews: DSA + projects + system design basics
- 58.7 Behavioral interviews: STAR method
- 58.8 Open source contribution — how to start

---

# PART G — DSA INTEGRATION TRACK

> **This track runs in parallel with the main roadmap. Do not postpone DSA until after you finish JavaScript.**

---

## DSA Phase 1 — With Unit 1-2 (Arrays, Strings, Basics)

- Basic array manipulation, reversing, rotation
- String manipulation: palindromes, anagrams, character frequency
- Two pointers technique
- Sliding window technique
- Hashing with `Map` and `Set`
- Sorting algorithms: bubble sort, selection sort, insertion sort, merge sort
- Binary search
- **Target: 50 problems**
- **Platforms:** LeetCode (Easy-Medium), NeetCode 150

## DSA Phase 2 — With Unit 3-4 (Recursion, Stacks, Queues)

- Recursion: factorial, fibonacci, power set, permutations
- Backtracking: N-Queens, Sudoku solver, word search
- Stack: valid parentheses, min stack, next greater element
- Queue: circular queue, BFS preparation
- Linked list: singly, doubly, reversal, cycle detection, merge two sorted
- **Target: 50 problems**

## DSA Phase 3 — With Unit 5-7 (Trees, Graphs, Advanced)

- Binary trees: traversals (inorder, preorder, postorder), height, diameter
- Binary Search Trees: insert, delete, search, validate BST
- Heaps: min-heap, max-heap, top K elements
- Graphs: adjacency list, BFS, DFS, connected components
- Dynamic Programming: memoization, tabulation (top 15 problems)
- **Target: 50 problems**

## DSA Phase 4 — Interview Prep (Continuous)

- LeetCode patterns: blind 75, NeetCode 150
- Solve company-tagged problems
- Mock interviews (Pramp, interviewing.io)
- Revisit weak areas weekly
- **Target: 150+ total solved**

---

# PART H — COMMON MISTAKES & GUIDANCE

---

## Common Mistakes Beginners Make

1. **Tutorial hell** — watching 5 tutorials on the same topic without building anything
2. **Skipping vanilla JS** — jumping to React without understanding closures, `this`, async
3. **Not reading error messages** — the error tells you exactly what's wrong; read it
4. **Copy-pasting from Stack Overflow** without understanding the code
5. **Ignoring DevTools** — `console.log` debugging is fine, but learn breakpoints
6. **Skipping Git** — every project from day 1 should be on GitHub
7. **Perfectionism** — your first projects will be ugly; ship them anyway
8. **Comparing progress** — focus on depth, not speed
9. **Not solving DSA** — "I'll start DSA later" is how people fail interviews
10. **Building only todo apps** — build varied projects that solve real problems
11. **Learning too many things at once** — finish one unit before starting the next
12. **Ignoring HTTP and how the web works** — you can't debug APIs if you don't understand requests

## What NOT to Waste Time On

| Skip This                                   | Do This Instead                                          |
| ------------------------------------------- | -------------------------------------------------------- |
| TypeScript (at first)                       | Master JavaScript first, then TypeScript becomes trivial |
| CSS frameworks (Tailwind) before CSS basics | Learn CSS fundamentals, then adopt Tailwind              |
| Redux before Context + useReducer           | Start simple, use Redux only when you need it            |
| Docker and Kubernetes                       | Focus on deploying to Vercel/Railway first               |
| AWS / Cloud certifications                  | Not relevant for internship-level roles                  |
| GraphQL before REST                         | Master REST APIs first                                   |
| Multiple languages at once                  | Go deep in JavaScript first                              |
| Watching 10-hour "complete" courses         | Follow this roadmap + docs + build projects              |
| WordPress, PHP, jQuery                      | These won't help your MERN/Next.js career path           |
| Premature optimization                      | Write working code first, optimize later                 |

## Transition: Learning to Applying to Earning

```
Stage 1: LEARN (Units 1-6)
├── Follow this roadmap
├── Build every project listed
├── Solve DSA daily
└── Push everything to GitHub

Stage 2: APPLY (Units 7-10)
├── Build 2-3 substantial full-stack projects
├── Deploy all projects (live URLs)
├── Write clear READMEs with screenshots
├── Create portfolio website
├── Start applying to internships (don't wait until "ready")
└── Contribute to 1-2 open source projects

Stage 3: EARN
├── Apply to 50+ internships/roles
├── Tailor resume for each application
├── Practice DSA: 2-3 problems daily
├── Do mock interviews
├── Network on LinkedIn and Twitter
└── Keep building and shipping
```

---

# APPENDIX

## Recommended Resources (Not Exhaustive)

| Resource                        | Use For                              |
| ------------------------------- | ------------------------------------ |
| MDN Web Docs                    | Reference for JS, DOM, Web APIs      |
| javascript.info                 | Deep conceptual JavaScript           |
| Node.js official docs           | Node.js reference                    |
| React official docs (react.dev) | React learning + reference           |
| Next.js docs (nextjs.org)       | Next.js learning + reference         |
| NeetCode.io                     | DSA roadmap + video explanations     |
| LeetCode                        | Problem solving practice             |
| freeCodeCamp                    | Supplementary exercises              |
| The Odin Project                | Supplementary project-based learning |

## Suggested Tech Stack for Projects

```
Frontend:    React.js + Tailwind CSS (after CSS basics)
Backend:     Node.js + Express.js
Database:    MongoDB + Mongoose
Auth:        JWT + bcrypt (later: NextAuth)
Full-stack:  Next.js (App Router)
Deployment:  Vercel (frontend/full-stack) + Railway (backend)
Version Ctrl: Git + GitHub
API Testing: Postman / Thunder Client (VS Code)
```

---

_This roadmap is a complete, self-contained syllabus. Follow it sequentially. Build every project. Solve DSA daily. Ship. Apply. Iterate._
