# @alastairsimon/react-component-library

A modern React component library built with TypeScript, featuring accessible and customizable UI components.

## Installation

```bash
npm install @alastairsimon/react-component-library
```

## Peer Dependencies

This library requires React 18.0.0 or higher:

```bash
npm install react react-dom
```

## Usage

### Import Components

```tsx
import { Button, Input, Card, Modal } from '@alastairsimon/react-component-library';
```

### Import Styles

The component styles are automatically included when you import the components. If you need to import styles separately:

```tsx
import '@alastairsimon/react-component-library/styles';
```

## Components

### Button

A versatile button component with multiple variants, sizes, and states.

```tsx
import { Button } from '@alastairsimon/react-component-library';

function App() {
  return (
    <>
      <Button variant="primary" onClick={() => console.log('Clicked!')}>
        Primary Button
      </Button>

      <Button variant="secondary" size="large" loading>
        Loading...
      </Button>

      <Button variant="critical" icon={<Icon />} iconEnd={<ArrowIcon />}>
        Delete
      </Button>
    </>
  );
}
```

#### Button Props

| Prop        | Type                                     | Default      | Description            |
| ----------- | ---------------------------------------- | ------------ | ---------------------- |
| `variant`   | `'primary' \| 'secondary' \| 'critical'` | **required** | Button style variant   |
| `size`      | `'small' \| 'medium' \| 'large'`         | `'medium'`   | Button size            |
| `children`  | `ReactNode`                              | **required** | Button content         |
| `onClick`   | `(event: MouseEvent) => void`            | -            | Click handler          |
| `disabled`  | `boolean`                                | `false`      | Disable the button     |
| `loading`   | `boolean`                                | `false`      | Show loading state     |
| `icon`      | `ReactNode`                              | -            | Icon before text       |
| `iconEnd`   | `ReactNode`                              | -            | Icon after text        |
| `fullWidth` | `boolean`                                | `false`      | Make button full width |
| `type`      | `'button' \| 'submit' \| 'reset'`        | `'button'`   | Button type            |

### Input

A form input component with label, error, and helper text support.

```tsx
import { Input } from '@alastairsimon/react-component-library';

function App() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  return (
    <>
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText="We'll never share your email"
      />

      <Input label="Password" type="password" error={error} size="large" />
    </>
  );
}
```

#### Input Props

| Prop                                             | Type                             | Default    | Description             |
| ------------------------------------------------ | -------------------------------- | ---------- | ----------------------- |
| `size`                                           | `'small' \| 'medium' \| 'large'` | `'medium'` | Input size              |
| `label`                                          | `string`                         | -          | Label text              |
| `error`                                          | `string`                         | -          | Error message           |
| `helperText`                                     | `string`                         | -          | Helper text below input |
| All standard HTML input attributes are supported |                                  |            |                         |

### Card

A flexible card component for displaying content.

```tsx
import { Card } from '@alastairsimon/react-component-library';

function App() {
  return (
    <Card>
      <h3>Card Title</h3>
      <p>Card content goes here</p>
    </Card>

    <Card
      interactive
      onClick={() => console.log('Card clicked')}
    >
      Clickable Card
    </Card>
  );
}
```

#### Card Props

| Prop          | Type                          | Default      | Description          |
| ------------- | ----------------------------- | ------------ | -------------------- |
| `children`    | `ReactNode`                   | **required** | Card content         |
| `interactive` | `boolean`                     | `false`      | Make card clickable  |
| `onClick`     | `(event: MouseEvent) => void` | -            | Click handler        |
| `className`   | `string`                      | -            | Additional CSS class |

### Modal

A modal dialog component with overlay and keyboard support.

```tsx
import { Modal } from '@alastairsimon/react-component-library';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal Title">
        <p>Modal content goes here</p>
      </Modal>
    </>
  );
}
```

#### Modal Props

| Prop              | Type         | Default      | Description               |
| ----------------- | ------------ | ------------ | ------------------------- |
| `isOpen`          | `boolean`    | **required** | Controls modal visibility |
| `onClose`         | `() => void` | **required** | Close handler             |
| `title`           | `string`     | -            | Modal title               |
| `children`        | `ReactNode`  | **required** | Modal content             |
| `showCloseButton` | `boolean`    | `true`       | Show close button         |
| `className`       | `string`     | -            | Additional CSS class      |

## TypeScript Support

This library is written in TypeScript and includes full type definitions. All components and their props are fully typed.

```tsx
import type {
  ButtonProps,
  InputProps,
  CardProps,
  ModalProps
} from '@alastairsimon/react-component-library';
```

## Styling

The components come with default styles that are automatically included. You can customize the appearance by:

1. Overriding CSS classes
2. Using the `className` prop on components
3. Importing and modifying the CSS files directly

## Accessibility

All components follow accessibility best practices:

- Proper ARIA attributes
- Keyboard navigation support
- Focus management
- Screen reader compatibility

## License

MIT

## Repository

[GitHub Repository](https://github.com/alastairsimon/react-component-library)
