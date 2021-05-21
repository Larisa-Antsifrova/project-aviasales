function sortFastestTickets(tickets) {
  return tickets
    .slice()
    .sort(
      (a, b) =>
        a.segments.reduce(
          (totalDuration, { duration }) => totalDuration + duration,
          0,
        ) -
        b.segments.reduce(
          (totalDuration, { duration }) => totalDuration + duration,
          0,
        ),
    );
}

function sortCheapestTickets(tickets) {
  return tickets.slice().sort((a, b) => a.price - b.price);
}

function sortOptimalTickets(tickets) {
  return tickets
    .slice()
    .sort((a, b) =>
      a.price - b.price < 0 || a.price - b.price > 0
        ? a.price - b.price
        : a.segments.reduce(
            (totalDuration, { duration }) => totalDuration + duration,
            0,
          ) -
          b.segments.reduce(
            (totalDuration, { duration }) => totalDuration + duration,
            0,
          ),
    );
}

export { sortFastestTickets, sortCheapestTickets, sortOptimalTickets };
