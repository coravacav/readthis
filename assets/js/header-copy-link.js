document
    .getElementById('post')
    .querySelectorAll('h2[id], h3[id], h4[id], h5[id], h6[id]')
    .forEach((header) => {
        const copyLink = header.querySelector('a');
        if (copyLink) {
            copyLink.addEventListener('click', (e) => {
                e.preventDefault();
                navigator.clipboard.writeText(
                    window.location.href.replace(/#.+$/, '') + '#' + header.id
                );

                copyLink.classList.add(
                    'text-green-500',
                    'hover:text-green-500'
                );
                setTimeout(() => {
                    copyLink.classList.remove(
                        'text-green-500',
                        'hover:text-green-500'
                    );
                }, 500);
            });
        }
    });
