function divFactory(className) {
    const div = document.createElement('div');
    div.setAttribute('class', className);
    return { div };
}
function spanFactory(date, className) {
    const span = document.createElement('span');
    span.innerHTML = date;
    span.setAttribute('class', className);
    return { span };
}
function paragraphFactory(text, className) {
    const p = document.createElement('p');
    p.innerHTML = text;
    p.setAttribute('class', `${className}`);
    return { p };
}
function promptFactory(prompt) {
    const MAX_TOKENS = 100;
    const TEMPERATURE = 0;
    const TOP_P = 1;
    const PRESENCE_PENALTY = 0;
    const FREQUENCY_PENALTY = 0;
    return {
        prompt: prompt,
        max_tokens: MAX_TOKENS,
        temperature: TEMPERATURE,
        top_p: TOP_P,
        presence_penalty: PRESENCE_PENALTY,
        frequency_penalty: FREQUENCY_PENALTY
    };
}
export { paragraphFactory, promptFactory, spanFactory, divFactory };
//# sourceMappingURL=factories.js.map