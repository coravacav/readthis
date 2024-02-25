// Currently removed since I'd like to do it right, and I can't be arsed right now.

// const observer = new IntersectionObserver(
//     (entries) => {
//         entries.forEach((entry) => {
//             let activeElement = document.querySelector(
//                 `nav[id='TableOfContents'] a[href="#${entry.target.id}"]`
//             );
//             console.log(entry.target.textContent.trim(), entry.isIntersecting);

//             if (entry.isIntersecting) {
//                 activeElement.classList.add('text-neutral-500');
//                 activeElement.classList.add('dark:text-neutral-500');
//                 activeElement.classList.remove('text-neutral-800');
//                 activeElement.classList.remove('dark:text-white');
//             } else {
//                 activeElement.classList.add('text-neutral-800');
//                 activeElement.classList.add('dark:text-white');
//                 activeElement.classList.remove('text-neutral-500');
//                 activeElement.classList.remove('dark:text-neutral-500');
//             }
//         });
//     },
//     { threshold: 0.5, root: document.getElementById('post') }
// );

// document
//     .getElementById('post')
//     .querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]')
//     .forEach((section) => {
//         observer.observe(section);
//     });
