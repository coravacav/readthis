const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            let activeElement = document.querySelector(
                `nav[id='TableOfContents'] a[href="#${entry.target.id}"]`
            );
            if (entry.isIntersecting) {
                activeElement.classList.add('text-neutral-500');
                activeElement.classList.remove('text-white');
            } else {
                activeElement.classList.add('text-white');
                activeElement.classList.remove('text-neutral-500');
            }
        });
    },
    { threshold: 0.5 }
);

document
    .getElementById('post')
    .querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]')
    .forEach((section) => {
        observer.observe(section);
    });
