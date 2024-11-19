
# Drupal X Eyedea Base Theme

This Project is a Base Tempalte for a Custom Drupal > 8 Theme. It uses Drupals Out of the Box Twig Templating Syntax with VueJS for Javascript Functionality and TailwindCSS for styling.

## Installation

Download the .zip File of the Repository and extract it into your Drupals theme Folder usually located under "*DRUPAL*/web/themes/custom".

## Setup
1. cd into the Directory of the Theme and install all npm dependencies via ```npm install```
2. Create a .env File and add the "VUE_APP_THEME_PATH" property, usually its "/themes/eyedea/dist"


## Development Server
Start your Development Journey with ```npm run serve```

## Production Build
A Production Build is made via the command ```npm run build```

## Utility Addons
As we use some components throughout all Projects, we included two basic Utility Components to the Theme, these are called AppIcon and AppImage.

These Components are used to display Image and SVG Files in twig, to use an Image, simly place it into the appropriate Folder (f.e.: svg icons go into the /src/assets/svg/), then import it into the Project within the icons.js or images.js File:

```
// Icons.js File
export { default as Arrow } from '@/assets/svg/arrow.svg'
```

After that, you can use the Utility Component to display the svg in the Twig Template like:

```
<app-icon name="Arrow"></app-icon>
```

