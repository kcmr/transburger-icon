# Transburger Icon

Transburger Icon is a [Custom Element](http://webcomponents.org/articles/introduction-to-custom-elements/) that extends a standard `<button>` tag to display a **hamburger icon that is transformed into a back or close icon** after clicking the button or programmatically using its `toggleIcon()` method.

![Transburger Icon Demos](https://raw.githubusercontent.com/kcmr/transburger-icon/master/transburger-icon-demos.gif)

## Demo

[Demo and API docs](http://kcmr.github.io/transburger-icon/)

## Install

Install the component using Bower:

```bash
$ bower install kcmr/transburger-icon --save
```

## Usage

Import Web Components polyfill:

```js
<script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
```

Import Custom Element:

```html
<link rel="import" href="bower_components/transburger-icon/transburger-icon.html"> 
```

Use it!:

```html
<button is="transburger-icon"></button>
```

## Attributes

| Attribute | Description | Default |
|:----------|:------------|:--------|
| transform-to | Hamburger icon transformation (close, arrow-left, arrow-right) | close |
| icon-position | Icon position (left, right) | left |
| active | Boolean attribute to display the second icon initially | false |
| no-transform | Boolean attribute to disable the icon transformation on click | false |

## Methods

| Method | Description |
|:-------|:------------|
| toggleIcon() | Changes the icon |

## Events

| Event name | Description |
|:-----------|:------------|
| transburger-icon-changed | Fired when the icon is changed |

## Styling

The following custom properties and mixins are available for styling:

| Custom property                | Description                                                    | Default        |
|:-------------------------------|:---------------------------------------------------------------| :--------------|
| --transburger-icon-height      | Icon height in pixels. For better results, use multiples of 7  | 14px           |
| --transburger-icon-width       | Icon width                                                     | 1.42857em      |
| --transburger-icon-margin      | Vertical and horizontal margins                                | 0.85714em      |
| --transburger-icon-line-radius | Hamburger icon lines radius                                    | 2px            |
