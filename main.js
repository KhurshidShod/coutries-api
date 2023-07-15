const getCountCards = (count) => {
    return `
    <div class="card text-start" style="width: calc(100% / 3.2); min-width: 250px;">
    <img src="${count.flags.png}" class="card-img-top" style="height: 200px;">
    <div class="card-body">
      <h3 class="card-title">${count.name.common}</h3>
      <p class="card-text"><b>Population:</b>${count.population}</p>
      <p class="card-text"><b>Region:</b>${count.population}</p>
      <p class="card-text"><b>Capital:</b>${count.capital}</p>
    </div>
  </div>
    `
}
const getPosts = async() => {
    try{
        var data = fetchData('https://ap-countries-api.vercel.app/all')
        const dataRes = await Promise.all([dat1])
        const countries = dataRes[0].data
        console.log(countries)
        countries.map(countr => {
            document.querySelector('.cards').innerHTML += getCountCards(countr)
        })
    } catch(error) {
        console.log(error)
    }
}
getPosts()
