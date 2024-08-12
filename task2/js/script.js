document.addEventListener('DOMContentLoaded', () => {
    const API_URL = "https://api.github.com/users";
    const FORM = document.querySelector('.form-group');
    const INPUT_SEARCH = document.getElementById('search');
    const SEARCH_ERROR = document.querySelector('.github-search__no-results');
    const RESULTS = document.querySelector('.github-search__results');
    async function fetchUser(username) {
        SEARCH_ERROR.classList.add('hidden');
        try {
            const response = await fetch(`${API_URL}/${username}`);
            const data = await response.json();

            if (!response.ok) {
                return SEARCH_ERROR.classList.remove('hidden');
            }

            renderDOM(data);
            console.log(data);
        } catch (err) {
            return console.log(err);
        }
    }

    function submitForm(e) {
        e.preventDefault();
        fetchResults(INPUT_SEARCH.value);
    }

    FORM.addEventListener("submit", (e) => {
        e.preventDefault();
        const USER = INPUT_SEARCH.value;
        if (USER) {
            fetchUser(USER);
            INPUT_SEARCH.value = "";
        }
    });

    function renderDOM(data) {
        RESULTS.insertAdjacentHTML('beforeend',
            `<div class="card">
                <div class="card__avatar">
                    <img src="${data.avatar_url}" alt="${data.name}" width="150" height="150">
                </div>
                <div class="card__info">
                    <h3><a href="${data.html_url}" target="_blank">${data.name}</a></h3>
                    <ul>
                        <li>
                            ${data.followers} <strong>Followers</strong>
                        </li>
                        <li>
                            ${data.following} <strong>Following</strong>
                        </li>
                        <li>
                            ${data.public_repos} <strong>Repos</strong>
                        </li>
                    </ul>
                </div>
            </div>`
        );
    }
});


