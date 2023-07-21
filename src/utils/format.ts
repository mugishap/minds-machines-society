export const markupToText = (input: string): string => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const colorRegex = /<([^>]+)>([^<]+)<\/\1>/g;

    const replaceLinks = (_: string, text: string, url: string): string => {
        return `<a style="text-decoration: underline;" href="${url}" target="_blank">${text}</a>`;
    }

    const replaceColors = (_: string, color: string, text: string): string => {
        return `<span style="color: ${color}">${text}</span>`;
    }

    const formattedText = input
        .replace(linkRegex, replaceLinks)
        .replace(colorRegex, replaceColors);

    return formattedText;
}
