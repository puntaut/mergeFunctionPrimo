## Project Structure

```text
.
├── src/
│   └── merge.ts          # Core merge function implementation
├── test/
│   └── merge.test.ts     # Jest unit test suite
├── jest.config.js        # Jest configuration with ts-jest
├── package.json          # Project metadata, scripts, and dependencies
├── tsconfig.json         # TypeScript compiler configuration
├── .gitignore
└── README.md             # Project documentation and setup guide
```

---

## Prerequisites

Ensure you have the following installed on your system:
* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* [npm](https://www.npmjs.com/) (bundled with Node.js)

---

## Setup & Execution

### 1. Install Dependencies

Clone the repository and install the project dependencies:

```bash
npm install
```

### 2. Run Unit Tests

Execute the unit test suite using Jest:

```bash
npm test
```

To run tests with code coverage report:

```bash
npm run test:coverage
```

### 3. Build Project

Compile TypeScript into JavaScript (output to `/dist` directory):

```bash
npm run build
```
