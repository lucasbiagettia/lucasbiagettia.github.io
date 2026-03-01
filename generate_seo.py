import os
import re

POSTS_DIR = 'posts'
TEMPLATE_FILE = 'post.html'

def get_post_metadata(post_id, lang):
    file_path = os.path.join(POSTS_DIR, f"{post_id}_{lang}.md")
    if not os.path.exists(file_path):
        return None, None
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Extract title (first line starting with #)
    title_match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
    title = title_match.group(1) if title_match else "Article"
    
    # Extract excerpt (first normal paragraph)
    excerpt = ""
    for line in content.split('\n'):
        line = line.strip()
        if line and not line.startswith('#') and not line.startswith('>') and not line.startswith('```') and not line.startswith('!['):
            excerpt = line
            break
            
    return title, excerpt

def generate_seo_pages():
    if not os.path.exists(TEMPLATE_FILE):
        print(f"Error: {TEMPLATE_FILE} not found.")
        return
        
    with open(TEMPLATE_FILE, 'r', encoding='utf-8') as f:
        template_html = f.read()

    # Find all unique post IDs
    if not os.path.exists(POSTS_DIR):
        print(f"Error: Directory {POSTS_DIR} not found.")
        return
        
    post_files = [f for f in os.listdir(POSTS_DIR) if f.endswith('.md')]
    post_ids = set()
    for f in post_files:
        match = re.match(r'(.+)_(en|es)\.md', f)
        if match:
            post_ids.add(match.group(1))

    OUTPUT_DIR = 'posts_html'
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)

    for post_id in post_ids:
        # Generate an SEO page for each language that exists
        for lang in ['en', 'es']:
            title, excerpt = get_post_metadata(post_id, lang)
                
            if not title:
                continue
                
            # Clean up quotes for HTML injection
            safe_title = title.replace('"', '&quot;')
            safe_excerpt = excerpt.replace('"', '&quot;')
            if len(safe_excerpt) > 160:
                safe_excerpt = safe_excerpt[:157] + "..."
                
            seo_tags = f"""<title>{title} — Lucas Biagetti</title>
    <meta name="description" content="{safe_excerpt}">
    <meta property="og:title" content="{safe_title}">
    <meta property="og:description" content="{safe_excerpt}">
    <meta property="og:type" content="article">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{safe_title}">
    <meta name="twitter:description" content="{safe_excerpt}">"""

            # Inject the new tags, replacing the generic title
            escaped_template = template_html.replace('<title>Article — Lucas Biagetti</title>', seo_tags)
            
            output_file = os.path.join(OUTPUT_DIR, f"{post_id}_{lang}.html")
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(escaped_template)
                
            print(f"Generated SEO page: {output_file}")
        
if __name__ == "__main__":
    generate_seo_pages()
    print("SEO Generation Complete. You can now publish to Github Pages.")
