const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    if (query) {
        fetch(`/search/users/?query=${query}`)
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    searchResults.innerHTML = `
                        <div class="desc">
                            ${data.message}
                        </div>
                    `;
                } else {
                    searchResults.innerHTML = `
                    <div class="desc">
                        showing results for "@${query}"
                    </div>
                    `;
                    data.forEach(user => {
                        const postHTML = `
                                <div class="cart">
                                    <a href="/u/@${user.username}">
                                        <div>
                                            <div class="img">
                                                <img src="${user.profile_picture}" alt="${user.username}'s profile_picture">
                                            </div>
                                            <div class="info">
                                                <p class="name">@${user.username}</p>
                                                <p class="second_name">${user.first_name} ${user.last_name}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                        `;
                        searchResults.insertAdjacentHTML('beforeend', postHTML);
                    });
                }
            });
    } else {
        searchResults.innerHTML = '';
    }
});