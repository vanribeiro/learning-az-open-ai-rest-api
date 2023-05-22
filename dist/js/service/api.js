var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { promptFactory } from "../modules/factories.js";
import { formatOutput } from "../modules/outputs.js";
import { ENDPOINT, KEY, TEXT_DA_VINCI_MODEL } from "./env.js";
import { isDisconnected } from "../modules/internet-connection.js";
function fetchApi(prompt) {
    return __awaiter(this, void 0, void 0, function* () {
        const URL = `${ENDPOINT}/openai/deployments/${TEXT_DA_VINCI_MODEL}/completions?api-version=2023-05-15`;
        try {
            const response = yield fetch(URL, {
                method: 'POST',
                body: JSON.stringify(promptFactory(prompt)),
                headers: {
                    "Content-Type": "application/json",
                    "api-key": `${KEY}`
                }
            });
            const data = yield response.json();
            const openaiAnswer = data.choices[0].text;
            formatOutput(openaiAnswer, 'left');
            return { response, data };
        }
        catch (error) {
            if (error.name.includes('Failed to fetch')) {
                isDisconnected();
            }
            throw error;
        }
    });
}
export { fetchApi };
//# sourceMappingURL=api.js.map