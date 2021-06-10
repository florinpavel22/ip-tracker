const apiKey = "at_NyIhu7g493lr85UfTXDu5aKLDr4up";

const getIpInfo = async (ip) => {
  const url = `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ip}`;
  const response = await fetch(url);
  const ipDetails = await response.json();
  return ipDetails;
};

export default getIpInfo;
