function parseRawHtml(html: string): string[] {
  return html
    .replace(/<\/?[^>]+(>|$)/g, "")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

export default parseRawHtml;
