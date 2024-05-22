const config = {
    rootId: 'root',
    removeRootId: false,
    removeSPAAttributes: true,
    replaceTitle: true
};

window.simpleSPAConfig = config;

new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        updateElementsBase();
    }
}).observe(document.body, {
    childList: true,
    attributes: true,
    subtree: true
});

root = document.getElementById(config.rootId);
if (config.removeRootId) {
    root.removeAttribute('id');
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
            if (config.removeSPAAttributes) {
                element.removeAttribute('to');
                element.removeAttribute('click');
            }
        }
    });

    enterTo.forEach(element => {
        const url = element.getAttribute('to');
        if (url) {
            element.addEventListener('mouseenter', () => {
                setSPAContent(url);
            });
            if (config.removeSPAAttributes) {
                element.removeAttribute('to');
                element.removeAttribute('enter');
            }  
        }
    });

    leaveTo.forEach(element => {
        const url = element.getAttribute('to');
        if (url) {
            element.addEventListener('mouseleave', () => {
                setSPAContent(url);
            });
            if (config.removeSPAAttributes) {
                element.removeAttribute('to');
                element.removeAttribute('leave');
            }
        }
    });

}

async function setSPAContent(url) {
    let response = await fetch(url);

    var newContent = '';

    if (response.ok) {
        newContent = await response.text();
        const fragment = new DOMParser().parseFromString(newContent, 'text/html');
        const rootDiv = fragment.getElementById(config.rootId);

        if (config.replaceTitle) {
            const newTitle = fragment.getElementsByTagName('title')[0].innerHTML;
            document.getElementsByTagName('title')[0].innerHTML = newTitle;    
        }
        
        document.getElementById(config.rootId).replaceWith(rootDiv);
        window.history.pushState({}, url.split(window.location.origin), window.location.origin + url)
        

        updateElementsBase();
    }
}
