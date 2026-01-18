# Schemata

> The centralized, open-source database for URI Protocols and Deep Links.

Schemata is a modern web application built to help developers and power users find URI protocols and deep links for various applications. Stop searching scattered documentation - find what you need, fast.

## 🚀 Built With

-   **[Astro v5](https://astro.build/)** - The web framework for content-driven websites.
-   **[Tailwind CSS v4](https://tailwindcss.com/)** - A utility-first CSS framework for rapid UI development.
-   **TypeScript** - For type safety and better developer experience.

## 🛠️ Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   npm (v9 or higher)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/3d3n-pyc/schemata.git
    cd schemata
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm run dev
    ```

    The app should now be running on `http://localhost:4321`.

## 📂 Project Structure

The core data for this project lives in `src/data/protocols`.

```text
/
├── src/
│   ├── data/
│   │   └── protocols/    <-- Protocol JSON definitions live here
│   ├── pages/            <-- Application routes
│   └── utils/            <-- Helper functions
└── ...
```

## 🤝 Contributing

We welcome contributions! If you know a protocol that isn't listed, you can add it easily.

1.  Create a new JSON file in `src/data/protocols/` with the protocol name (e.g., `myapp.json`).
2.  Follow the schema defined in `src/types/protocol.ts`.

For detailed instructions, please read our [Contributing Guide](CONTRIBUTING.md).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
