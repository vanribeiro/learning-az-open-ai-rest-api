const ENDPOINT = 
    window.location.origin.includes('localhost') || window.location.origin.includes('127.0.0.1:5500') 
        ? 'http://localhost:7071/api/get-az-openai-service' 
        : 'https://get-azure-open-ai-service.azurewebsites.net/api/get-az-openai-service';

const TEXT_DA_VINCI_MODEL = 'text-davinci-003';

export {
    ENDPOINT,
    TEXT_DA_VINCI_MODEL
}
