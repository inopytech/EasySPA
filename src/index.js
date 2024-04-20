async function initSPA() {
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            updateElementsBase();
        }
    });

    observer.observe(document.body, {
        childList: true,
        attributes: true,
        subtree: true
    });

}

async function updateElementsBase() {
    var clickTo = document.querySelectorAll('[click]');
    var enterTo = document.querySelectorAll('[enter]');
    var leaveTo = document.querySelectorAll('[leave]');


    clickTo.forEach(element => {
        const url = element.getAttribute('to');
        if (url) {
            element.addEventListener('click', () => {
                setSPAContent(url);
            });
            element.removeAttribute('to');
            element.removeAttribute('click');
        }
    });

    enterTo.forEach(element => {
        const url = element.getAttribute('to');
        if (url) {
            element.addEventListener('mouseenter', () => {
                setSPAContent(url);
            });
        }
    });

    leaveTo.forEach(element => {
        const url = element.getAttribute('to');
        if (url) {
            element.addEventListener('mouseleave', () => {
                setSPAContent(url);
            });
        }
    });

}

async function setSPAContent(url) {
    let response = await fetch(url);

    var newContent = '';

    if (response.ok) {
        newContent = await response.text();
        newhtml = document.createElement('html');
        newhtml.innerHTML = newContent;
        document.documentElement.replaceWith(newhtml);

        window.history.pushState({}, url.split(window.origin), url)

        updateElementsBase();
    }
}

export {initSPA};
