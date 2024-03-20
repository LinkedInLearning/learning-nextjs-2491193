
export async function handler(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.results
}

export async function search(url) {
    const response = await fetch(url);
      const data = await response.json();
      const docs = data.response.docs ?? [];
      const results = docs.map(doc => {
        return {
            title: doc?.headline?.main,
            url: doc.web_url,
            uri: doc.uri,
        }
      })
    return results
}