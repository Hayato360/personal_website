# How to Add Custom K-POP Group Logos

## Simple Steps:

1. **Find an image on the internet** (from Google Images, Pinterest, etc.)
2. **Right-click the image** and select "Copy image address" or "Copy image link"
3. **Open the ProfileView.vue file** in your project
4. **Find the K-POP Groups data section** (around line 230)
5. **Replace the logo URL** with your copied image link

## Example:

```javascript
{
  name: 'BLACKPINK',
  abbreviation: 'BP',
  type: 'Girl Group',
  description: '🖤💗 Queens!',
  // Simply paste your image URL here:
  logo: 'https://your-image-url-here.jpg',
  fallbackStyle: 'background: linear-gradient(45deg, #ff1493, #000000);',
  textStyle: 'color: white; font-weight: bold; font-size: 12px;',
  imageError: false
}
```

## Tips:

- **Use high-quality images** for better display
- **Square/circular images** work best for the avatar format
- **PNG or JPG** formats are recommended
- If an image doesn't load, the system will automatically show the text abbreviation instead
- You can easily **add more groups** by copying the structure and adding new entries to the array

## Adding New Groups:

Just add a new object to the `kpopGroups` array:

```javascript
{
  name: 'NEW GROUP',
  abbreviation: 'NG',
  type: 'Girl/Boy Group',
  description: '✨ Your description!',
  logo: 'https://your-image-url.jpg',
  fallbackStyle: 'background: linear-gradient(45deg, #your-color1, #your-color2);',
  textStyle: 'color: white; font-weight: bold; font-size: 12px;',
  imageError: false
}
```

That's it! The website will automatically update with your new logos! 🎉