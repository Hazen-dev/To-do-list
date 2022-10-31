const searchBarNode = document.getElementsByClassName('header__search-bar')[0];
export const searchArray = [];

export default function searchBar() {
  searchBarNode.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && searchBarNode.value !== '') {
      // start search
      let isFound = false;
      searchArray.forEach((element) => {
        if (element[1].content === searchBarNode.value) {
          isFound = true;
          // alert('Takie zadanie istnieje! Zaczyna się ' + element[1].sta);
          alert(
            `Takie zadanie istnieje! Zaczyna się ${element[1].startDay} dnia ${
              element[1].month + 1
            } miesiąca 2022 roku. :D`
          );
        }
      });
      if (!isFound) {
        alert(
          'Nie znaleziono takiego zadania! Pamiętaj, że liczone są także duże litery, znaki specialne (ą, ę, ó itp.) oraz spacje'
        );
      }
    }
  });
}
