import getRefs from './refs';
const { filmGallery, watchedBtn, queueBtn } = getRefs();

onWatchedMarkup();

watchedBtn.addEventListener('click', onWatchedBtnClick);

function onWatchedBtnClick() {
  queueBtn.classList.remove('header-active-button');
  watchedBtn.classList.add('header-active-button');
  onWatchedMarkup();
}

function onWatchedMarkup() {
  if (getActiveTab() !== 'watched') {
    return;
  }
  const filmsFromLocalStorage = JSON.parse(localStorage.getItem('watched'));

  if (filmsFromLocalStorage) {
    topMoviesMarkUp(filmsFromLocalStorage);
  } else {
    const placeholder = document.querySelector('.js-search__form');
    placeholder.style.display = 'block';
    filmGallery.innerHTML = '';
  }
}

//  function markUpGallery(films) {
//  refs.list.innerHTML = films.map(film=>{
//
// `<li class = "film-gallery__item" data-id="${id}">
//            <img class="film-gallery__image" src="${imgPath}" alt="${title}" loading="lazy"/>
//            <div class="film-gallery__info">
//             <p class="film-gallery__title">${title.toUpperCase()}</p>
//             <p class="film-gallery__text">${Object.values(genresList).join(
//               ', '
//             )} | ${releaseYear}</p>
//           </div>
//           </li>`;
//     })

//   const placeholder = document.querySelector('js-search__form');
//   if (isLocalStorageItemEmpty('queue')) {
//     placeholder.style.display = 'block';
//   } else {
//     placeholder.style.display = 'none';
//   }
// }

// function getMovieById(values) {
//   return values.map(value => {
//     return value.name;
//   });
// }

function isLocalStorageItemEmpty(localStorageKey) {
  if (!localStorage.getItem(localStorageKey)) {
    return true;
  }

  return JSON.parse(localStorage.getItem(localStorageKey)).length === 0;
}

//Rerender after delete movie
const btnAddToWatch = document.querySelector('.wached');
btnAddToWatch.addEventListener('click', e => {
  setTimeout(() => onWatchedMarkup(), 100);
});

function getActiveTab() {
  const watchedButton = document.querySelector('.header_btn-watched');

  return watchedButton.classList.contains('header-active-button')
    ? 'watched'
    : 'queue';
}
