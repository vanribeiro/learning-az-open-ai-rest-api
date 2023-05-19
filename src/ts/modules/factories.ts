function divFactory(className: string){
    const div: HTMLSpanElement = document.createElement('div');
    div.setAttribute('class', className);

    return { div }
}

function spanFactory(date: string, className: string){
    const span: HTMLSpanElement = document.createElement('span');
    span.innerHTML = date;
    span.setAttribute('class', className);

    return { span }
}

function paragraphFactory(text: string, className: string) {
    const p: HTMLParagraphElement = document.createElement('p');
    p.innerHTML = text;
    p.setAttribute('class', `${className}`);

    return { p };
}

function promptFactory(prompt: string) {
    const MAX_TOKENS: number = 100;
    const TEMPERATURE: number = 0;
    const TOP_P: number = 1;
    const PRESENCE_PENALTY: number = 0;
    const FREQUENCY_PENALTY: number = 0;
    
    return {
        prompt: prompt,
        max_tokens: MAX_TOKENS,
        temperature: TEMPERATURE,
        top_p: TOP_P,
        presence_penalty: PRESENCE_PENALTY,
        frequency_penalty: FREQUENCY_PENALTY
    }
}

export {
    paragraphFactory,
    promptFactory,
    spanFactory,
    divFactory
}