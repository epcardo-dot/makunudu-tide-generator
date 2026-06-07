exports.handler = async function(event, context) {

  try {

    const response = await fetch(
      "https://wisuki.com/tide/463/kaafu-atoll"
    );

    const html = await response.text();

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        htmlLength: html.length,
        first500Characters: html.substring(0, 500)
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
