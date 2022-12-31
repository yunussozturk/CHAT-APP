const redis = require("redis");

// redis'in çalışabilmesi için bir takım ortam değişkenleri tanımlıyoruz. redis'in host'u port'u password'u
// bunların ortam değişkeninden gelmesi gerekiyor. bunun için kök dizinine .env isimli dosya açıldı
const getClient = () => {
	return redis.createClient({
		host: process.env.REDIS_HOST,
		port: process.env.REDIS_PORT,
		password: process.env.REDIS_PASS,
		db: 1,
	});
};

module.exports.getClient = getClient;