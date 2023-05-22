import { fetchApi } from "../service/api.js";
import { promptInput } from "./elements.js";
import { formatOutput } from "./outputs.js";

const form: HTMLFormElement = document.querySelector('form');

form.addEventListener('submit', async (event: SubmitEvent) => {
    event.preventDefault();
    
    const value = promptInput.value;
    promptInput.value = '';

    formatOutput(value, 'right');
    await fetchApi(value);
});