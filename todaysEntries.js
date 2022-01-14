/* The function should return the names of those entries whose date is the current date. The names should be separated by a comma.

For example, here's an array of three entries and assume the date now is 2021-01-21.

[{ name: "Johny" , date: "2021-01-21T02:53:42+05:30" }, { name: "Sugar" , date: "2021-01-22T02:53:42+05:30" }, { name: "Sun" , date: "2021-01-21T03:53:42+05:30" }]

The function should return: ``` Johny,Sun ```. Please note that the names are separated by a comma without space.
*/

function todaysEntries(entries) {
  // Complete the function
  let today = new Date();
  today = today.toISOString().split("T")[0];
  let result = [];
  entries.forEach((entry) => {
    let entryDate = entry.date.split("T")[0];
    if (entryDate === today) {
      result.push(entry.name);
    }
  });
  return result.join(",");
}

module.exports = todaysEntries;
