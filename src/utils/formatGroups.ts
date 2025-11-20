function formatGroups(groups: string[]): string {
  return groups
    .map((g) => {
      const fixed = g.replace(/з/g, "\n з");
      return `<code>${fixed}</code>\n\n`;
    })
    .join("");
}

export default formatGroups;
