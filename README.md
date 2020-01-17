# gatsby-plugin-dsp-universal-pixel

Easily add [Universal Pixel Script](https://dspsupport.basis.net/hc/en-us/articles/360010967873-Universal-Pixel-Script) to your Gatsby site.

## Install
`npm install --save gatsby-plugin-dsp-universal-pixel`

## How to use

```javascript
// In your gatsby-config.js
// options.id is required
// options.cntrData is optional
plugins: [
  {
    resolve: `gatsby-plugin-dsp-universal-pixel`,
    options: {
      id: 'Universal Pixel ID.',
      cntrData: {
        'category':'shoes',
        'gender':'m'
      }
    },
  },
]
```
