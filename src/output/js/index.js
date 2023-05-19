var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { dateFormat } from "./modules/date.js";
import { promptInput } from "./modules/elements.js";
import { formatOutput } from "./modules/outputs.js";
import { fetchApi } from "./service/api.js";
const now = Date.now();
dateFormat(now);
const form = document.querySelector('form');
form.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    formatOutput(promptInput.value, 'right');
    yield fetchApi(promptInput.value);
    promptInput.value = '';
}));
//# sourceMappingURL=index.js.map