function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}
async function fetchRepos() {
    try {
        const response = await fetch('/github/repos');
        const repos = await response.json();
        const repoCardsContainer = document.getElementById('repo-cards');

        repoCardsContainer.innerHTML = '';

        repos.forEach(repo => {
            const cardHTML = `
                <div class="col-12 mb-4">
                    <div class="card shadow">
                        <div class="card-body">
                            <p class="card-text mb-0 fs-5"> <span class="fw-semibold text-primary">Repositoy Name:</span> ${repo.name}</p>
                            <p class="mb-0 text-success fw-bold" style="font-size:12px">Create Date: ${formatDate(repo.created_at)}</p>
                            <p class="mb-0 text-info fw-bold" style="font-size:12px">Last Update: ${formatDate(repo.updated_at)}</p>

                             <a href="${repo.html_url}" class="btn btn-sm text-white  mt-3" style=" background-color: #8b2b8b;" target="_blank">View Repository</a>

                            </div>
                    </div>
                </div>
            `;
            repoCardsContainer.insertAdjacentHTML('beforeend', cardHTML);
        });
    } catch (error) {
        console.error('Error fetching repositories:', error);
    }
}

window.onload = fetchRepos;

