# Baden liest die Bibel - Development History

## Project Overview
This document tracks the development history of the Baden liest die Bibel countdown website and its integration with the main webapp deployment.

## Timeline & Major Changes

### Initial State
- **Project**: bldb-count countdown website
- **Location**: Originally intended as main site at https://badenliestdiebibel.ch/
- **Purpose**: Simple countdown page with brochure download and press text

### Security & Deployment Issues (Previous Session)
- **Critical Security Fix**: Admin endpoints in bldb-webapp were exposed without authentication
  - Fixed by switching from `simple_admin.php` to proper `admin.php` with authentication
- **Deployment Strategy Change**: 
  - bldb-webapp moved to `/test/` subdirectory (not production-ready)
  - bldb-count restored as main site at root URL
- **Nginx Configuration**: Updated to serve bldb-count from root and bldb-webapp from `/test/`

### Redirect Issues & Fixes
- **Problem**: Automatic redirects from countdown page to `/anmeldung` causing instability
- **Solution**: Removed all `window.location.href` redirects from:
  - `js/countdown.js`
  - `js/countdown.min.js` 
  - `js/countdown-test.js`
- **Result**: Stable countdown page display

### UI/UX Improvements (Current Session)

#### Phase 1: Button Layout Redesign
- **Change**: Moved both buttons (brochure + press text) above countdown
- **Design**: Created matching green buttons with consistent styling
- **Commit**: `04a150b` - "UI IMPROVEMENT: Move buttons above countdown and redesign as matching green buttons"

#### Phase 2: Layout Reorganization  
- **Change**: Moved press text button back down to appear before press text content
- **Rationale**: Better logical flow - button appears where content will be displayed
- **Text Update**: Simplified countdown info text for clarity

#### Phase 3: Brochure Presentation Enhancement
- **Added**: Prominent red title "Jetzt erhältlich: unsere Veranstaltungsbroschüre!"
- **Added**: Clickable brochure thumbnail image above download button
- **Updated**: Button text from "Veranstaltungsbroschüre" → "Broschüre herunterladen"
- **Design**: Both image and button link to same PDF with hover effects
- **Commit**: `3ef8f02` - "UI ENHANCEMENT: Improve brochure presentation and reorganize layout"

## Current Site Structure

### Layout Flow
1. **Header**: Logo and subtitle
2. **Intro Text**: Project description
3. **Brochure Section**:
   - Red promotional title
   - Clickable thumbnail image
   - Green download button
4. **Countdown Section**: Timer with updated info text
5. **Press Section**:
   - Toggle button for press text
   - Expandable press text content
6. **Footer**: Organization credits

### Technical Stack
- **Frontend**: Static HTML, CSS, JavaScript
- **Assets**: Images, fonts, PDF brochure
- **Deployment**: Nginx serving from `/var/www/bldb-count/`
- **Version Control**: Git with GitHub remote

## Key Files Modified
- `index.html` - Main page layout and structure
- `js/countdown.js` - Countdown logic (redirects removed)
- `js/countdown.min.js` - Minified countdown (redirects removed)
- `/etc/nginx/sites-available/www.badenliestdiebibel.ch` - Server configuration

## Assets & Resources
- `images/favicon-white.png` - Site favicon
- `images/booklet_thumb.png` - Brochure thumbnail
- `images/booklet_download.pdf` - Downloadable brochure
- `css/styles.min.css` - Main stylesheet

## Current Status
- ✅ Site stable and functional at https://badenliestdiebibel.ch/
- ✅ No automatic redirects causing user confusion
- ✅ Enhanced brochure presentation with visual appeal
- ✅ Logical content flow and improved UX
- ✅ All changes committed and deployed

## Future Considerations
- Monitor countdown accuracy for June 4, 2025 launch
- Consider mobile responsiveness testing
- Potential integration with full webapp when ready for production