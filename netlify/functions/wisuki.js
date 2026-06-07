exports.handler = async function(event, context) {

  try {

    const response = await fetch(
      "https://wisuki.com/tide/463/kaafu-atoll"
    );

    const html = await response.text();

    const position = html.indexOf("Sunrise");

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        position: position,
        snippet: html.substring(position - 500, position + 2000)
      })
    };

  } catch (error) {

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message
      })
    };

  }

};
