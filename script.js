    async function getCountry() {
            const name = document.getElementById('search').value;
            const result = document.getElementById('result');
           

            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
                const data = await response.json();

                const country = data[0]; //first country

               result.innerHTML = `
                                  <h2>${country.name.common}</h2>
                                  <img src="${country.flags.png}" alt="Flag">
                                  <p>Capital: ${country.capital}</p>
                                  <p>Region: ${country.region}</p>
                                  <p>Population: ${country.population.toLocaleString()}</p>
                                  <p>Currency: ${Object.values(country.currencies)[0].name}</p>`;
                                  
                                   

            } catch (error) {
                result.innerHTML = `<p>No country found or error occurred.</p>`;
            }
        }