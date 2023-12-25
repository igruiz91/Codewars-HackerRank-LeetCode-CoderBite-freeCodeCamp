function createSecretHolder(secret) {
  let _secret = secret;

  return {
    getSecret: () => {
      return _secret;
    },
    setSecret: (newSecret) => {
      _secret = newSecret;
    },
  };
}

test1 = createSecretHolder("test")
console.log(test1.getSecret());
test1.setSecret("nuevo")
console.log(test1.getSecret());
