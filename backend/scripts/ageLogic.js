function calculateAgeDetails(date1, date2) {
  if (!(date1 instanceof Date) || !(date2 instanceof Date)) return null;
  if (date2.getTime() <= date1.getTime()) return null;

  const timeDiff = date2.getTime() - date1.getTime();
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const diffHours = diffDays * 24;
  const diffMinutes = diffHours * 60;
  const diffSeconds = diffMinutes * 60;

  const yearDiff = date2.getFullYear() - date1.getFullYear();
  const monthDiff = date2.getMonth() - date1.getMonth();
  const totalMonthDiff = yearDiff * 12 + monthDiff;

  return {
    years: yearDiff,
    totalMonths: totalMonthDiff,
    days: diffDays,
    hours: diffHours,
    minutes: diffMinutes,
    seconds: diffSeconds,
  };
}

module.exports = calculateAgeDetails;
