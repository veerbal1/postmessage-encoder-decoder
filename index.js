class BHMessenger {
  supportedVersions = ['v1', 'v2'];
  constructor(options) {
    this._protocol = 'hapag-lloyd';
    if (options && options.version) {
      this._version = options.version;
    } else {
      this._version = 'v1';
    }
  }

  get protocol() {
    return this._protocol;
  }

  get version() {
    return this._version;
  }

  encode(obj) {
    if (!obj) {
      throw new Error('Empty parameter');
    }
    if (typeof obj !== 'object') {
      throw new Error('Parameter must be an object');
    }
    // return protocol + '://' + version + '/' + JSON.stringify(obj);
    return this.protocol + '://' + this.version + '/' + JSON.stringify(obj);
  }

  decode(str) {
    if (!str) {
      throw new Error('Empty parameter');
    }

    if (typeof str !== 'string') {
      throw new Error('Parameter must be a string');
    }

    const regex = new RegExp('^hapag-lloyd://v[0-9]/\\{.*\\}$');
    if (!regex.test(str)) {
      throw new Error('Invalid encoded string');
    } else {
      if (!this.supportedVersions.includes(str.split('://')[1].split('/')[0])) {
        throw new Error('Unsupported version');
      }
    }

    if (!str.startsWith(this.protocol + '://' + this.version + '/')) {
      throw new Error('Missing protocol and version number in encoded string');
    }
    // Parse and return data from string
    let [, data] = str.split(this.protocol + '://' + this.version + '/');
    return JSON.parse(data);
  }
}

function add(a, b) {
  return a + b;
}

module.exports = {
    BHMessenger,
    add
}
