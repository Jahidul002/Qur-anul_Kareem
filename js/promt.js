const loadData = () => {
    const url = `https://api.alquran.cloud/v1/quran?fbclid=IwAR3T3Y7OHWppxmaLbNvhTEl5JuYxmpORzkfPf8bIzyYWcjqVjdkLiFqUP0w`
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.data.surahs))
};
const displayData = allData => {
    const cardCont = document.getElementById('card-cont')
    cardCont.innerHTML = ``;
    allData.forEach(theData => {
        console.log(theData);
        const theDiv = document.createElement('div');
        theDiv.classList.add('col')
        theDiv.innerHTML = `
    <div onclick class="card h-100 bg-clr">
        <div class="card-body">
        <h3 class="text-center surah-clr">${theData.name}</h3>
        <h5 class="card-title">Surah:<span class="nm-cls">${theData.englishName}</span></h5>
        <h5 class="card-title">Ayahs:<span class="ayahs-clr">${theData.ayahs.length}</span></h5>

    </div>
       `
        cardCont.appendChild(theDiv)
    });
}


loadData()