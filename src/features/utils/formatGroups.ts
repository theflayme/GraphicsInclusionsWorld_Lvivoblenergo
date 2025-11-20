function formatGroups(groups: string[]): string {
  const content = groups
    .map((g) => {
      const fixed = g.replace(/(?<!^|\n)з/g, "\nз");
      return `<code>${fixed}</code>`;
    })
    .join("\n\n");

  return `<blockquote>${content}</blockquote>`;
}

export default formatGroups;
