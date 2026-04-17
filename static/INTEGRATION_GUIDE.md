# Integration Guide: Search Bar & Google Button

This guide explains how to add the enhanced search bar and mobile Google button to your website.

---

## Search Bar Integration

### 1. Add CSS
Link the search bar stylesheet in your HTML `<head>`:

```html
<link rel="stylesheet" href="path/to/search-bar.css">
```

Or copy the CSS directly into your stylesheet.

### 2. Add HTML
Place the search form inside a flex container (e.g., header with `display: flex`):

```html
<header style="display: flex; align-items: center; gap: 24px;">
  <!-- Your logo -->

  <form class="search-form" onsubmit="this.sfSbm.disabled=true" method="post" action="/shop/search">
    <input type="text" name="query" placeholder="Buscar productos..." autocomplete="off" />
    <button type="submit" name="sfSbm" aria-label="Buscar">
      <svg class="icon-search" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="7"/>
        <line x1="17" y1="17" x2="22" y2="22"/>
      </svg>
    </button>
  </form>

  <!-- Your cart or other elements -->
</header>
```

### 3. Customize (Optional)
Modify the CSS variables:
- `--pg-red: #E8290B` - Primary button color
- `--pg-red-dark: #C41F00` - Button hover color
- `--pg-white: #FFFFFF` - Text color

---

## Google Button Mobile Enhancement

### 1. Add CSS
Link the Google button stylesheet in your HTML `<head>`:

```html
<link rel="stylesheet" href="path/to/google-button-mobile.css">
```

Or copy the CSS directly into your stylesheet.

### 2. Add HTML
Place the button in your top navigation:

```html
<a href="javascript:;" class="google-signin-btn" onclick="return uSocialLogin('google');" title="Entrar con Google">
  <img src="path/to/google-icon.svg" alt="Google" />
  <span>Entrar</span>
</a>
```

### 3. Features
- **Desktop**: Subtle semi-transparent appearance
- **Mobile (600px and below)**: High-contrast white background for better visibility
- **Responsive**: Automatically adapts to screen size

---

## Color Variables Reference

If you want to use custom colors, update these values:

```css
:root {
  --pg-red: #E8290B;           /* Primary color */
  --pg-red-dark: #C41F00;      /* Hover/pressed state */
  --pg-white: #FFFFFF;         /* Text color */
  --pg-dark-2: #1A1A1A;        /* Dark backgrounds */
}
```

---

## Accessibility Notes

- ✓ Search button includes `aria-label="Buscar"`
- ✓ Form properly labeled with `name` attributes
- ✓ Focus states include visual indicators (box-shadow on search form)
- ✓ Keyboard accessible (Tab navigation, Enter to submit)

---

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- IE: Not supported (uses flexbox)

---

## Questions?

Ensure your header container uses `display: flex` for proper layout. The search form uses `flex: 1 1 0` to grow and fill available space.
