export const fetchHelloData = async (post) => {
  try {
    const response = await fetch('/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post }),
    });
    return response.text();
  } catch (error) {
    console.log('error in fetching data...', error);
    return error;
  }
}