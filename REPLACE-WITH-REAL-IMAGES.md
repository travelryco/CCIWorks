# How to Replace Portfolio Images with Your Real Photos

## Quick Fix - 3 Steps:

### Step 1: Upload Photos to GitHub
1. Go to: https://github.com/travelryco/CCIWorks
2. Click on the `images/` folder
3. Click "Add file" → "Upload files"
4. Upload your 5 photos with these EXACT names:
   - `exhaust-work.jpg`
   - `desert-truck.jpg` 
   - `suspension-work.jpg`
   - `land-cruiser.jpg`
   - `green-monster.jpg`
5. Click "Commit changes"

### Step 2: Update the HTML
Replace the portfolio placeholders in `index.html` with:

```html
<div class="portfolio-item">
    <img src="images/exhaust-work.jpg" alt="Custom exhaust system" class="portfolio-image">
    <div class="portfolio-overlay">
        <h3>Custom Exhaust Systems</h3>
        <p>Performance exhaust fabrication and installation</p>
    </div>
</div>
```

Repeat for each image with the correct filename.

### Step 3: Add CSS for Images
Add this CSS to handle the images:

```css
.portfolio-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.portfolio-item:hover .portfolio-image {
    transform: scale(1.05);
}
```

## Why the current placeholders exist:
- No actual image files have been uploaded to GitHub yet
- The colorful gradients you see are professional-looking placeholders
- They work immediately without any file dependencies

## File formats that work:
- JPG/JPEG ✅
- PNG ✅  
- WebP ✅
- File size: Under 1MB each (recommended under 500KB)

Need help? Let me know and I can update the code for you! 