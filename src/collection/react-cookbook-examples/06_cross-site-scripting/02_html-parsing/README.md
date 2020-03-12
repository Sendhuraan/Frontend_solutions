Even though, React escapes all script tags, we want to pass html content to our component. In that case, we can use `dangerouslySetInnerHTML` to parse html and to prevent scripting attacks.

But when the script is attached as an inline javascript event, it can't protect. When we hover over the image, the script gets executed :(
