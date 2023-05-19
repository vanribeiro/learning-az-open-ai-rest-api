import { chatOutput } from "./elements.js";
import { divFactory, paragraphFactory, spanFactory } from "./factories.js";

function formatOutput (value: string, textAlign: string){
    const alignment = textAlign === 'right' ? 'chat__output--right' : '';
    const fragment: DocumentFragment = document.createDocumentFragment();
    const div = divFactory(`chat__output__container__text ${alignment}`).div;
    const p = paragraphFactory(value, 'chat__output__text').p;
    const span = spanFactory('12:29 PM', 'chat__output__container__time').span;

    fragment.appendChild(div);
    div.append(p);
    p.append(span);

    chatOutput.append(fragment);
}

export {
    formatOutput
}