# React Dynamic Page Generator

This project aims to develop an efficient, lightweight, and low-code library for dynamic page generation and state management in React. By simplifying state management and component generation, this library enhances both developer productivity and application performance.

With an emphasis on maintainability and consistency, the library incorporates a broad range of features including:

-   Basic and complex controls like text, select, checkbox, and radio controls, along with configurable grid controls.
-   Direct state interaction enabling all controls to interact directly with the state for getting and setting values.
-   Cascading dropdown functionality where the selection in one dropdown filters the options in a subsequent dropdown.
-   Hierarchical page structure supporting nested sections and controls within pages.
-   Efficient data key navigation for each control enabling easy state navigation and value retrieval or setting.
-   Comprehensive event handling for `onChange` and other relevant events.
-   Built-in validation tracking for required fields and custom validation rules, including validation violation tracking.
-   Centralized code values state for easy option population in select controls.
-   Button controls modeled as event emitters, allowing for custom event handlers.
-   Customizable styling support with theming and responsive design.
-   Integration with the Bootstrap framework for default styling and responsive behavior.
-   Support for accessibility guidelines with ARIA attributes, keyboard navigation, and proper semantic HTML elements.
-   Extensibility for custom control creation and easy modification of existing controls.
-   Emphasis on a great developer experience with clear error messages, debugging tools, and a straightforward API.

This project is designed for web developers who require an efficient library for dynamic page generation and robust state management. It is applicable to a wide range of application scenarios, from single-page applications to large-scale web applications, ensuring consistency and maintainability throughout the project lifecycle.

## Installation & Usage

Clone the repository and install dependencies:

```
git clone https://github.com/username/project.git
cd project
npm install
```

Set up environment variables in a .env.development file: env.development

```
REACT_APP_CONFIG_BASE_URL=...
REACT_APP_PERSON_BASE_URL=...
REACT_APP_MASTER_DATA_BASE_URL=...
```

Finally, start the development server:

```
npm run db
npm start
```

This README will be updated as the project evolves. Keep watching this space for more!

License
This project is licensed under the MIT License.
