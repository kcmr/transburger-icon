# Transburger Icon

Transburger Icon is a Custom Element that extends a native `<button>` tag to display a transformable hamburger menu icon. By default the menu icon is transformed into a close icon.

**Example with default values**

The menu icon is transformed into a close icon and the icon is positioned to the left of the button text.

```html
<button is="transburger-icon">Button text</button>
```

**Menu to back**

```html
<button is="transburger-icon" transform-to="back"></button>
```

**Icon positioned to the right**

```html
<button is="transburger-icon" icon-position="right">Button text</button>
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------| :--------------|
| --your-var      | var description | default value  |
| --transburger-icon  | empty mixin     | {}             |
