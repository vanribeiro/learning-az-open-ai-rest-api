import { dateFormat, timeFormatHoursMinutes } from "./date.js";
import { chatDate, chatOutput } from "./elements.js";
import { divFactory, paragraphFactory, spanFactory } from "./factories.js";
function formatOutput(value, textAlign) {
    const alignment = textAlign === 'right' ? 'chat__output--right' : '';
    const fragment = document.createDocumentFragment();
    const div = divFactory(`chat__output__container__text ${alignment}`).div;
    const p = paragraphFactory(value, 'chat__output__text').p;
    const span = spanFactory(timeFormatHoursMinutes(Date.now()), 'chat__output__container__time').span;
    fragment.appendChild(div);
    div.append(p);
    p.append(span);
    chatOutput.append(fragment);
}
function setTodayDate(now) {
    chatDate.innerText = dateFormat(now);
}
export { formatOutput, setTodayDate };
//# sourceMappingURL=outputs.js.map