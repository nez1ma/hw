$(function() {
    $('#search-btn').on('click', function() {
        const capital = $('#capital-input').val().trim();
        const container = $('#result-container');
        
        container.empty();

        if (capital === "") {
            container.html('<p>Будь ласка, введіть столицю яку шукаєте</p>');
            return;
        }

        $.ajax({
            url: `https://restcountries.com/v3.1/capital/${capital}`,
            method: 'GET',
            success: function(data) {
                const country = data[0];
                const flagUrl = country.flags.png;
                const flagAlt = country.flags.alt || 'Прапор країни';

                container.html(`
                    <div class="country-info">
                        <img src="${flagUrl}" alt="${flagAlt}">
                        <p>${flagAlt}</p>
                    </div>
                `);
            },
            error: function() {
                container.html('<p>Столицю не знайдено. Спробуйте ввести назву англійською (наприклад, Tirana).</p>');
            }
        });
    });
});