const Joi = require('joi');

const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string().allow(['development', 'production', 'test', 'provision']).default('development'),
  DISCORD_TOKEN: Joi.string().required().description('Discord Token'),
}).unknown().required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
    ENV: envVars.NODE_ENV,
    DISCORD_TOKEN: envVars.DISCORD_TOKEN,
};

module.exports = config;