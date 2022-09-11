# 🥞 Fathom UIkit

[![Version](https://img.shields.io/npm/v/@fathomswap/uikit)](https://www.npmjs.com/package/@fathomswap/uikit) [![Size](https://img.shields.io/bundlephobia/min/@fathomswap/uikit)](https://www.npmjs.com/package/@fathomswap/uikit)

Fathom UIkit is a set of React components and hooks used to build pages on Fathom's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @fathomswap/uikit`

***Note**: In case you want to use the older version of the Fathom UIkit, you should install @fathomswap-libs/uikit, instead, but we recommend using the latest version of the UIkit.*


## Setup

### Providers

Before using Fathom UIkit, you need to provide the theme file to uikit provider.

```
import { UIKitProvider, light, dark } from '@fathomswap/uikit'
...
<UIKitProvider theme={isDark ? dark : light}>...</UIKitProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@fathomswap/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://fathomswap.github.io/fathom-uikit/)
