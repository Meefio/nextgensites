export async function getOGImage(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    const html = await response.text();
    
    // Szukamy meta tagu z og:image
    const match = html.match(/<meta[^>]*property="og:image"[^>]*content="([^"]*)"[^>]*>/);
    if (match && match[1]) {
      return match[1];
    }
    
    return '/images/previews/default-preview.png';
  } catch (error) {
    return '/images/previews/default-preview.png';
  }
} 