# Transburger Icon 

[![Build Status](https://img.shields.io/travis/kcmr/transburger-icon/master.svg?style=flat-square)](https://travis-ci.org/kcmr/transburger-icon) 
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square)](https://www.webcomponents.org/element/kcmr/transburger-icon)

`<transburger-icon>` is a custom element to display a hamburger icon that is transformed into a back or close icon after clicking on it or programmatically using its `toggleIcon()` method.

[![Transburger Icon Demos](https://raw.githubusercontent.com/kcmr/transburger-icon/master/transburger-icon-demos.gif)](http://kcmr.github.io/transburger-icon/)

## Install

Install the component using [Bower](http://bower.io/):

```bash
$ bower install transburger-icon --save
```

## Usage

Import Web Components polyfill:

```html
<script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
```

Import Custom Element:

```html
<link rel="import" href="bower_components/transburger-icon/transburger-icon.html"> 
```

Use it!:

```html
<transburger-icon></transburger-icon>
```

## Attributes

| Attribute | Description | Default |
|:----------|:------------|:--------|
| transform-to | Hamburger icon transformation (close, arrow-left, arrow-right) | close |
| icon-position | Icon position (left, right) | left |
| active | Boolean attribute to display the second icon initially | false |
| no-transform | Boolean attribute to disable the icon transformation on click | false |
| type | type attribute for the internal button |  |
| disabled | disabled attribute for the internal button | false |

## Methods

| Method | Description |
|:-------|:------------|
| toggleIcon() | Changes the icon |

## Events

| Event name | Description | Bubbles  |
|:-----------|:------------|:---------|
| transburger-icon-changed | Fired when the icon is changed | true |

## Styling

The following custom properties are available for styling.

If you want to scale the icon keeping the default proportions, you only need to set the icon height. You can use a value expressed in pixels or the keyword `inherit` to use the button font size. The icon color is the same as the button text color.

| Custom property                             | Description                                                    | Default        |
|:--------------------------------------------|:---------------------------------------------------------------| :--------------|
| --transburger-icon-height                   | Icon height in pixels. For better results, use multiples of 7  | 14px           |
| --transburger-icon-width                    | Icon width                                                     | 1.42857em      |
| --transburger-icon-margin                   | Vertical and horizontal margins                                | 0.85714em      |
| --transburger-icon-line-radius              | Hamburger icon lines radius                                    | 2px            |
| --transburger-icon-button-border            | Border applied to the button                                   | 0              |
| --transburger-icon-button-margin            | Margin applied to the button                                   | 0              |
| --transburger-icon-button-padding           | Padding applied to the button                                  | 0              |
| --transburger-icon-button-vertical-align    | vertical-align applied to the button                           | middle         |
| --transburger-icon-button-font-family       | font-family applied to the button                              | inherit        |
| --transburger-icon-button-color             | color applied to the button                                    | inherit        |
| --transburger-icon-button-outline           | outline applied to the button                                  | initial        |
| --transburger-icon-button-cursor            | cursor applied to the button                                   | initial        |
| --transburger-icon-button-border-radius     | border-radius applied to the button                            | initial        |
| --transburger-icon-button-border-box-shadow | box-shadow applied to the button                               | none           |
| --transburger-icon-button-border-background | background applied to the button                               | #ccc           |

## Accessibility

If you are going to use the **button without a text**, it's highly recommended that you use the [`aria-label` attribute](http://rawgit.com/w3c/aria/master/aria/aria.html#aria-label) to provide a descriptive text for the button such as “Menu”, “Toggle menu” or similar that could to be used by Assistive Technologies like screen readers.

```html
<transburger-icon aria-label="Menu"></transburger-icon>
```

You can also provide the [`aria-controls` attribute](http://rawgit.com/w3c/aria/master/aria/aria.html#aria-controls) to specify the element ID that is controlled by the button.

```html
<transburger-icon aria-label="Menu" aria-controls="menu"></transburger-icon>
<div id="menu" role="navigation">…</div>
```
