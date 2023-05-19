function paragraphFactory(text, className) {
    const p = document.createElement('p');
    p.innerHTML = text;
    p.setAttribute('class', `${className}`);

    return {p};
}

export {
    paragraphFactory
}