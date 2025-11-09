# Translation Guide

This guide explains how to add and edit translations for the ColleaiQ website.

## Overview

The site uses **react-i18next** for internationalization, supporting both English (EN) and Danish (DA). All translations are stored in JSON files, making it easy to add or update text across the entire site.

## Translation Files

Translation files are located in `src/locales/`:
- `en.json` - English translations
- `da.json` - Danish translations

## Structure

Translations are organized by section. For example:

```json
{
  "nav": {
    "mission": "Our Mission",
    "solution": "Solution",
    "contact": "Contact"
  },
  "footer": {
    "tagline": "Upgrading cybersecurity with explainable multi-agent systems",
    "rights": "© 2025 ColleaiQ. All rights reserved."
  },
  "index": {
    "hero": {
      "headline": "Where Artificial Intelligence meets collective intelligence",
      "paragraph1": "We service cars and run fire drills..."
    }
  }
}
```

## How to Edit Existing Translations

1. Open the appropriate file (`en.json` or `da.json`)
2. Find the key you want to edit
3. Update the text value
4. Save the file
5. Changes appear immediately (no restart needed in development)

## How to Add New Translations

### Step 1: Add to Both Language Files

Add the same key to both `en.json` and `da.json` with the appropriate translations:

**en.json:**
```json
{
  "newSection": {
    "title": "New Section Title",
    "description": "Description text here"
  }
}
```

**da.json:**
```json
{
  "newSection": {
    "title": "Ny Sektion Titel",
    "description": "Beskrivelse tekst her"
  }
}
```

### Step 2: Use in Components

Import `useTranslation` and use the `t` function:

```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h2>{t('newSection.title')}</h2>
      <p>{t('newSection.description')}</p>
    </div>
  );
}
```

## Language Toggle

Users can switch languages using the globe icon in the navigation bar. The selected language is automatically saved to browser storage.

## Current Translation Status

### Fully Translated Pages:
- ✅ Navigation
- ✅ Footer
- ✅ Homepage (Index) - Hero section
- ✅ Careers
- ✅ Contact

### Partially Translated:
- 🟡 Homepage (Index) - Some sections still need translation
- 🟡 Other pages (Solution, Story, Team, etc.)

## Best Practices

1. **Keep keys consistent:** Use the same structure across both language files
2. **Use descriptive keys:** `hero.headline` is better than `text1`
3. **Group related content:** Put navigation items under `nav`, footer items under `footer`, etc.
4. **Test both languages:** Switch languages to verify all text displays correctly
5. **Maintain tone:** Keep consistent voice and terminology across translations

## Common Glossary

Key terms to keep consistent:

| English | Danish |
|---------|--------|
| Multi-agent systems | Multi-agent systemer |
| Sandbox | Sandkasse |
| Threat hunting | Trusselsjagt |
| Explainable AI | Forklarlig AI |
| SOC (Security Operations Center) | SOC (Security Operations Center) |
| Cyber defense | Cyberforsvar |
| Incident | Hændelse |

## Need Help?

- Check existing translations for examples
- Use similar sections as templates
- Ensure all quotes are properly escaped
- Test changes in both languages before committing

## Future Improvements

To add more languages:
1. Create a new locale file (e.g., `src/locales/de.json`)
2. Add it to `src/i18n.ts`:
   ```ts
   import de from './locales/de.json';
   
   resources: {
     en: { translation: en },
     da: { translation: da },
     de: { translation: de },
   }
   ```
3. Update the `LanguageToggle` component to include the new language
