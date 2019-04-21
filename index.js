var search = location.href.slice(38);
location.href = "https://www.google.com/search?q="+(search.split("").reverse().join(""));
