export function filterFilmsByDirector(list, director) {
  if (director) return list.filter((item) => item.director === director);
  else return list;
}

export function getFilmStats(list) {
  return list.reduce(
    (stats, item) => {
      stats.total++;

      stats.acc_score += Number(item.rt_score);
      stats.avg_score = stats.acc_score / stats.total;

      if (stats.latest) {
        stats.latest =
          stats.latest < item.release_date ? item.release_date : stats.latest;
      } else stats.latest = item.release_date;

      return stats;
    },
    {
      acc_score: 0,
      avg_score: 0,
      total: 0,
      latest: null,
    }
  );
}

export function getListOf(list, prop) {
  return [...new Set(list.map((item) => item[prop] || ""))];
}
