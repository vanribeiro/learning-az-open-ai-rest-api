import { fetchApi } from "../service/api.js";
import { promptInput } from "./elements.js";
import { formatOutput } from "./outputs.js";

const form: HTMLFormElement = document.querySelector('form');

form.addEventListener('submit', async (event: SubmitEvent) => {
    event.preventDefault();

    formatOutput(promptInput.value, 'right');
    
    await fetchApi(promptInput.value);
    
    promptInput.value = '';
});