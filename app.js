const list = document.querySelectorAll('li');
const submit = document.querySelector('button[type="submit"]');
const content = document.querySelectorAll('.content');

for (let i = 0; i < list.length; i++) {

    list[i].addEventListener("click", function () {
        removeSelect();
        list[i].classList.add('active');
        for (let x = 0; x < content.length; x++) {

            function send() {
                const active = document.querySelector('.active');

                if (active) {
                    removeContent();
                    console.log(list[i].textContent);
                    content[1].classList.add('show');
                    const selection = document.querySelector('#selection');
                    const text = document.createTextNode(`You selected ${active.textContent} out of 5`);
                    selection.appendChild(text);

                } else {
                    alert('You need to choose a Rate to Submit');
                }

            }

            function removeContent() {
                content[0].classList.remove('show');
            }
        }

        submit.addEventListener('click', send);
    });

    function removeSelect() {
        list.forEach(e => e.classList.remove('active'));
    };
};





