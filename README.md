# MPCS Lunuwatte Website

A responsive single-page website for **Multi Purpose Cooperative Societies (MPCS) Lunuwatte**. The site introduces the organization, highlights its services, displays event photos, shares the vision and mission, and provides contact information with an embedded Google Map.

## Overview

This project is a static website built with HTML, CSS, and JavaScript. It does not require a backend, database, build tool, or package manager. The website can be opened directly in a browser or hosted on any static hosting service.

## Website Sections

- **Header and Navigation** - Sticky top navigation with links to each page section.
- **Hero Section** - Welcome message with a background image and contact button.
- **About Us** - Short introduction to MPCS Lunuwatte.
- **Services** - Cards for retail services, community support, and trusted service.
- **Event Gallery** - Image slider with previous/next controls, navigation dots, autoplay, and lightbox preview.
- **Vision and Mission** - Organization goals and service direction.
- **Contact** - Phone number, email address, location link, and embedded Google Map.
- **Footer** - Organization name, type, and copyright notice.

## Features

- Fully static website
- Responsive layout for desktop, tablet, and mobile screens
- Smooth section reveal animation on scroll
- Event image slider with autoplay
- Clickable gallery image lightbox
- Font Awesome icons for services and contact details
- Google Fonts integration
- Embedded Google Maps location
- Simple file structure for easy editing and deployment

## Technologies Used

- **HTML5** - Page structure and content
- **CSS3** - Styling, layout, colors, spacing, and responsive design
- **JavaScript** - Gallery slider, lightbox, and scroll reveal behavior
- **Google Fonts** - Poppins font family
- **Font Awesome** - Icons
- **Google Maps Embed** - Location map

## Project Structure

```text
mpcs-lunuwatta-website/
|-- index.html
|-- README.md
|-- css/
|   |-- style.css
|-- js/
|   |-- script.js
|-- images/
|   |-- gallery1.jpg
|   |-- gallery2.jpg
|   |-- gallery3.jpg
|   |-- gallery4.jpg
|   |-- gallery5.jpg
|   |-- gallery6.jpg
|   |-- gallery7.jpg
|   |-- gallery8.jpg
|   |-- gallery9.jpg
|   |-- gallery10.jpg
|   |-- gallery11.jpg
|   |-- gallery12.jpg
|   |--gallery13.jpg
```

## Getting Started

### Requirements

You only need a modern web browser, such as:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

No installation is required.

### Run Locally

Open the project folder and double-click:

```text
index.html
```

The website will open directly in your browser.

### Run With a Local Server

Using a local server is optional, but useful when testing browser behavior.

If Python is installed, run this command from the project folder:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Main Files

### `index.html`

Contains the website content and page sections:

- Header navigation
- Hero section
- About section
- Services section
- Event gallery images
- Vision and mission cards
- Contact information
- Google Map iframe
- Footer
- Lightbox markup

### `css/style.css`

Contains the complete visual design:

- Global styles
- Color variables
- Header and navigation styling
- Hero background and text styling
- Section layouts
- Service cards
- Event gallery slider layout
- Lightbox styling
- Contact and map styling
- Responsive media queries

### `js/script.js`

Controls interactive behavior:

- Scroll reveal animation
- Gallery animation
- Event slider
- Slider dots
- Autoplay slideshow
- Previous and next controls
- Gallery image lightbox

### `images/`

Stores all website image assets, including:

- Logo image
- Hero background image
- Event gallery photos

## Customization Guide

### Change Website Text

Edit text content in:

```text
index.html
```

Common sections to update:

- Organization name
- About Us description
- Service descriptions
- Vision and mission statements
- Contact details
- Footer text

### Change Colors

The main color values are stored as CSS variables at the top of:

```text
css/style.css
```

Example:

```css
:root {
    --primary: #8e3d33;
    --primary-dark: #55130b;
    --accent: #ffb700;
}
```

Update these variables to change the website color theme.

### Change the Hero Image

The hero background is set in:

```text
css/style.css
```

Find this section:

```css
.hero {
    background:
        linear-gradient(rgba(85,19,11,0.28), rgba(85,19,11,0.42)),
        url("../images/gallery1.jpg") center/cover;
}
```

Replace `gallery1.jpg` with another image from the `images` folder.

### Add Gallery Images

1. Add the new image file to the `images/` folder.
2. Open `index.html`.
3. Add another gallery slide inside the `.slider-track` element.

Example:

```html
<div class="gallery-item slide">
  <img src="./images/new-image.jpg" alt="Event photo">
</div>
```

The JavaScript will automatically create a navigation dot for the new slide.

### Update Contact Information

Contact details are in the contact section of:

```text
index.html
```

Current details:

- Phone: `057-2232735`
- Email: `mpcsuvaparanagamanorth@gmail.com`
- Location: `Lunuwatta, Sri Lanka`

### Update Google Map Location

The map is loaded with a Google Maps iframe in `index.html`.

Current map query:

```text
Lunuwatta,Sri Lanka
```

Update both the map link and iframe `src` if the organization location changes.

## Deployment

Because this is a static website, it can be hosted on many platforms.

Recommended options:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Any cPanel or shared hosting provider

### Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. Open the repository settings.
3. Go to **Pages**.
4. Select the branch that contains `index.html`.
5. Save the settings.
6. GitHub will provide a public website URL.

### Deploy to Shared Hosting

Upload these files and folders to the hosting `public_html` or website root folder:

```text
index.html
css/
js/
images/
```

## Browser Support

The website should work in current versions of:

- Chrome
- Edge
- Firefox
- Safari
- Mobile browsers on Android and iOS

## Maintenance Notes

- Keep image file names accurate in `index.html`.
- Compress large gallery images before publishing to improve loading speed.
- Check phone, email, and map details before deployment.
- Test the website on both desktop and mobile screens after making changes.
- Avoid removing the Font Awesome CDN link unless icons are replaced.
- Avoid removing the Google Fonts links unless the font family is changed.

## Known External Dependencies

The website loads these resources from external CDNs:

- Google Fonts
- Font Awesome
- Google Maps iframe

An internet connection is required for these external resources to load correctly.

## License

This project is intended for use by **Multi Purpose Cooperative Societies (MPCS) Lunuwatte**. Add a separate license file if the project will be distributed publicly or reused for other organizations.

