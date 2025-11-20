const fetchResponse = async (input: RequestInfo, init?: RequestInit) => {
  const res = await fetch(input, init);

  if (!res.ok) {
    throw new Error(`HTTP error: ${res.status} ${res.statusText}`);
  }

  return res;
};

export default fetchResponse;
