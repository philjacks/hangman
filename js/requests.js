const getPuzzle = async wordCount => {
  const response = await fetch(
    `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );

  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error(`Unable to get puzzle`);
  }
};

const getCountry = async countryCode => {
  const response = await fetch("https://restcountries.eu/rest/v2/all");

  if (response.status === 200) {
    const data = await response.json();
    return data.find(country => country.alpha2Code === countryCode);
  } else {
    throw new Error("Unable to get country");
  }
};

const getLocation = async () => {
  const response = await fetch("https://ipinfo.io/json?token=fa5c2ae285502f");

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error(`Sorry, unable to get location`);
  }
};

const getCurrentCountry = async () => {
  const location = await getLocation();
  return getCountry(location.country);
};