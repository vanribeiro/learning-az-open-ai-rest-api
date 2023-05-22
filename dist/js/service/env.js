const ENDPOINT = window.location.origin.includes('localhost')
    ? 'http://localhost:7071/api/get-az-openai-service'
    : 'http://localhost:7071/api/get-az-openai-service';
const TEXT_DA_VINCI_MODEL = 'text-davinci-003';
export { ENDPOINT, TEXT_DA_VINCI_MODEL };
//# sourceMappingURL=env.js.map