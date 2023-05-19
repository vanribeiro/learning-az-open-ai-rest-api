import { chatOutput } from "../elements.js";
import { paragraphFactory } from "../factories.js";
import { DEPLOYMENT, ENDPOINT, KEY } from "./env.js";

async function fetchApi (prompt) {

    const promptSettings = {
        prompt: prompt,
        max_tokens: 100,
        temperature: 0,
        top_p: 1,
        presence_penalty: 0,
        frequency_penalty: 0
    }

    const URL = `${ENDPOINT}/openai/deployments/${DEPLOYMENT}/completions?api-version=2023-05-15`;
    const response = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(promptSettings),
        headers: {
            "Content-Type": "application/json",
            "api-key": `${KEY}`
        }
    });

    const data = await response.json();

    const fragment = document.createDocumentFragment();
    fragment.append(paragraphFactory(data.choices[0].text, 'chat__output__text chat__output__text').p);
    chatOutput.append(fragment);

    return { response, data };

} 

export {
    fetchApi
}
