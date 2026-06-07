exports.handler = async function(event, context) {

  try {

    const response = await fetch(
      "https://wisuki.com/tide/463/kaafu-atoll"
    );

    const html = await response.text();

    const foundTide =
      html.includes("High tide") ||
      html.includes("Low tide");

    const foundMoon =
      html.includes("Moonrise") ||
      html.includes("Moonset");

    const foundSun =
      html.includes("Sunrise") ||
      html.includes("Sunset");

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        htmlLength: html.length,
        foundTide,
        foundMoon,
        foundSun
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
