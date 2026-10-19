SANKOFA ID KIT
1. Design in Canva (1600x1000 px): template.png (card with empty spots) and zones.png (same card + solid boxes: photo #FF00FF, name #00FFFF, DOB #FFFF00, location #00FF00, signature #FF8000, ID number #0000FF; no gradients or outlines). Optional template-2.png for a colour choice.
2. Put them in assets/ (replace the grey demos). Edit CONFIG at the top of the script in index.html (labels, swatches, text).
3. Upload this folder to a GitHub repo, Settings > Pages > Deploy from branch main.
4. 20-ticket limit: create a Google Sheet, Extensions > Apps Script, paste ticket-counter.gs, Deploy as Web app (Anyone), paste the link into CONFIG.claim.endpoint.
5. Test from the web link, not by double-clicking the file.
