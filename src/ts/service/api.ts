import { promptFactory } from "../modules/factories.js";
import { formatOutput } from "../modules/outputs.js";
import { ENDPOINT, KEY, TEXT_DA_VINCI_MODEL } from "./env.js";
import { isDisconnected } from "../modules/internet-connection.js";

async function fetchApi (prompt: string) {

    const URL = `${ENDPOINT}/openai/deployments/${TEXT_DA_VINCI_MODEL}/completions?api-version=2023-05-15`;
    
    try {
        
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
    } catch (error) {

        if(error.name.includes('Failed to fetch')) {
            isDisconnected();
        }

        throw error;

    }
    

} 

export {
    fetchApi
}
