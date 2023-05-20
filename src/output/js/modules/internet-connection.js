import { alertContainer } from "./elements.js";
const p = alertContainer.querySelector('p');
function clearAlert(classToBeRemoved) {
    p.innerHTML = '';
    alertContainer.classList.remove(classToBeRemoved);
}
let timer;
function isDisconnected() {
    alertContainer.classList.add('alert-strip--danger');
    p.innerHTML = '⚠️ Disconnected! Check your internet...';
    if (timer)
        clearTimeout(timer);
    timer = setTimeout(() => clearAlert('alert-strip--danger'), 5 * 1000);
}
function isConnected() {
    alertContainer.classList.add('alert-strip--sucess');
    p.innerHTML = '🎉 Connected!';
    if (timer)
        clearTimeout(timer);
    timer = setTimeout(() => clearAlert('alert-strip--sucess'), 5 * 1000);
}
window.addEventListener('offline', isDisconnected);
window.addEventListener('online', isConnected);
export { isConnected, isDisconnected };
//# sourceMappingURL=internet-connection.js.map