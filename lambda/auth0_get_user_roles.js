const { management } = require("./permissions/user_role/read/management");
const { requireAuth } = require("./permissions/helpers/requireAuth");

exports.handler = requireAuth(async function(event, context) {
  const { claims } = context.identityContext;
  try {
    const data = await management.getUserRoles({ id: claims.sub });
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };

  } catch(err) {
    console.log(err)
    return {
      statusCode: 500,
      body: JSON.stringify(err.message)
    }
  }
})