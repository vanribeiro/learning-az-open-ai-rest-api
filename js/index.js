import { chatOutput, promptInput } from "./elements.js";
import { paragraphFactory } from "./factories.js";
import { fetchApi } from "./service/api.js";

const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const fragment = document.createDocumentFragment();

    fragment.appendChild(paragraphFactory(promptInput.value, 'chat__output__text chat__output__right').p);
    chatOutput.append(fragment);
    await fetchApi(promptInput.value);
    
    promptInput.value = '';
})

