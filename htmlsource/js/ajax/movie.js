const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

const init = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate() - 1;
  txtYear.value = year;
  selMon.value = month < 10 ? "0" + month : month;
  selDay.value = day < 10 ? "0" + day : day;
};
init();

document.querySelector("button").addEventListener("click", () => {
  const targetDt = txtYear.value + selMon.value + selDay.value;

  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=c0c9b0dbb5da8ed434d6563e0ef1ccc7&targetDt=${targetDt}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data.boxOfficeResult);
      //   console.log(data.boxOfficeResult.dailyBoxOfficeList);
      const rank = document.querySelector("#rank");
      const boxList = data.boxOfficeResult.dailyBoxOfficeList;
      let list = ``;
      boxList.forEach((movie) => {
        list += `등수 : ${movie.rank}위`;
        if (movie.rankInten > 0) {
          list += `(▲`;
        } else if (movie.rankInten < 0) {
          list += `(▼`;
        } else {
          list += `(`;
        }
        list += `${movie.rankInten})`;
        list += ` <a href ='#' onclick='javascript:movieInfo(${movie.movieCd})'>${movie.movieNm}</a>`;
        list += `<br>`;
      });
      rank.innerHTML = list;
    });
});

// 영화상세정보

const movieInfo = (movieCd) => {
  //   console.log(movieCd);
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=c0c9b0dbb5da8ed434d6563e0ef1ccc7&movieCd=${movieCd}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const info = document.querySelector("#info");
      //   console.log(data);
      console.log(data.movieInfoResult.movieInfo);
      const movieList = data.movieInfoResult.movieInfo;
      let list = `<ul>`;
      list += `<li>영화제목 : ${movieList.movieNm}</li>`;
      list += `<li>영화영제목 : ${movieList.movieNmEn}</li>`;
      list += `<li>상영시간 : ${movieList.showTm}분</li>`;
      //   list += `</ul>`;
      list += `<li>감독 : `;
      movieList.directors.forEach((director) => {
        list += `${director.peopleNm}, `;
      });
      list += `</li>`;
      list += `<li>배우 : `;
      movieList.actors.forEach((actor) => {
        list += `${actor.peopleNm}, `;
      });
      list += `</li></ul>`;
      info.innerHTML = list;
    });
};
