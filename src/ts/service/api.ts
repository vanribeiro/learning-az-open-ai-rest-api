import { promptFactory } from "../modules/factories.js";
import { formatOutput } from "../modules/outputs.js";
import { DEPLOYMENT, ENDPOINT, KEY } from "./env.js";

async function fetchApi (prompt: string) {

    const URL = `${ENDPOINT}/openai/deployments/${DEPLOYMENT}/completions?api-version=2023-05-15`;
    
    const response: Response = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(promptFactory(prompt)),
        headers: {
            "Content-Type": "application/json",
            "api-key": `${KEY}`
        }
    });

    const data: any = await response.json();
    const openaiAnswer = data.choices[0].text;
    
    formatOutput(openaiAnswer, 'left');

    return { response, data };

} 

export {
    fetchApi
}
