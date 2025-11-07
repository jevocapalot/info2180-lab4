window.onload = function() {
    const button = document.getElementById('search-btn');
    const resultDiv = document.getElementById('result');

    button.addEventListener('click', function() {
        let query = document.getElementById('search').value.trim();

        // Prevent malicious HTML characters (simple sanitization)
        query = query.replace(/</g, "&lt;").replace(/>/g, "&gt;");

        let url = 'superheroes.php';

        if (query !== "") {
            url += `?query=${encodeURIComponent(query)}`;
        }

        fetch(url)
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
};
