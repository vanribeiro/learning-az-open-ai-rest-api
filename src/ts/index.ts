import { dateFormat } from "./modules/date.js";
import { promptInput } from "./modules/elements.js";
import { formatOutput } from "./modules/outputs.js";
import { fetchApi } from "./service/api.js";
const now = Date.now();
dateFormat(now);

const form: HTMLFormElement = document.querySelector('form');

form.addEventListener('submit', async (event: SubmitEvent) => {
    event.preventDefault();

    formatOutput(promptInput.value, 'right');
    
    await fetchApi(promptInput.value);
    
    promptInput.value = '';
});
