const { BHMessenger } = require('.');

describe('BHMessenger v1: Encoder', () => {
  const obj = new BHMessenger();
  it('should return a protocol as hapag-lloyd', () => {
    expect(obj.protocol).toBe('hapag-lloyd');
  });
  it('should return a default version as v1', () => {
    expect(obj.version).toBe('v1');
  });
  it('should throw an error if empty parameter', () => {
    expect(() => obj.encode()).toThrow('Empty parameter');
  });
  it('should throw an error if parameter is not an object', () => {
    expect(() => obj.encode('string')).toThrow('Parameter must be an object');
  });
  it('should return correct encoded string', () => {
    expect(obj.encode({})).toBe('hapag-lloyd://v1/{}');
    expect(obj.encode({})).toBe('hapag-lloyd://v1/{}');
    expect(
      obj.encode({
        action: 'test',
        data: {
          content: '',
        },
      })
    ).toBe('hapag-lloyd://v1/{"action":"test","data":{"content":""}}');
  });
});

describe('BHMessenger v2: Encoder', () => {
  let obj = new BHMessenger({
    version: 'v2',
  });
  it('should return a protocol as hapag-lloyd', () => {
    expect(obj.protocol).toBe('hapag-lloyd');
  });
  it('should return a default version as v2', () => {
    expect(obj.version).toBe('v2');
  });
  it('should throw an error if empty parameter', () => {
    expect(() => obj.encode()).toThrow('Empty parameter');
  });
  it('should throw an error if parameter is not an object', () => {
    expect(() => obj.encode('string')).toThrow('Parameter must be an object');
  });
  it('should return correct encoded string', () => {
    expect(obj.encode({})).toBe('hapag-lloyd://v2/{}');
    expect(obj.encode({})).toBe('hapag-lloyd://v2/{}');
    expect(
      obj.encode({
        action: 'test',
        data: {
          content: '',
        },
      })
    ).toBe('hapag-lloyd://v2/{"action":"test","data":{"content":""}}');
  });
});

describe('BHMessenger v1: Decoder', () => {
  const obj = new BHMessenger();
  it('should throw an error if empty parameter', () => {
    expect(() => obj.decode()).toThrow('Empty parameter');
  });
  it('should throw an error if parameter is not a string', () => {
    expect(() => obj.decode(1)).toThrow('Parameter must be a string');
  });
  it('should throw an error if encoded string is not valid', () => {
    expect(() => obj.decode('jrweidfgdfgrjklfd')).toThrow(
      'Invalid encoded string'
    );
  });
  it('should throw an error if version is not valid', () => {
    expect(() => obj.decode('hapag-lloyd://v3/{}')).toThrow('Unsupported version');
  }),
    it('should return correct decoded object', () => {
      expect(obj.decode('hapag-lloyd://v1/{}')).toEqual({});
      expect(
        obj.decode('hapag-lloyd://v1/{"action":"test","data":{"content":""}}')
      ).toEqual({
        action: 'test',
        data: {
          content: '',
        },
      });
    });
});

describe('BHMessenger v2: Decoder', () => {
  const obj = new BHMessenger({
    version: 'v2',
  });
  it('should throw an error if empty parameter', () => {
    expect(() => obj.decode()).toThrow('Empty parameter');
  });
  it('should throw an error if parameter is not a string', () => {
    expect(() => obj.decode(1)).toThrow('Parameter must be a string');
  });
  it('should throw an error if encoded string is not valid', () => {
    expect(() => obj.decode('jrweidfgdfgrjklfd')).toThrow(
      'Invalid encoded string'
    );
  });
  it('should throw an error if version is not valid', () => {
    expect(() => obj.decode('hapag-lloyd://v3/{}')).toThrow('Unsupported version');
  }),
    it('should return correct decoded object', () => {
      expect(obj.decode('hapag-lloyd://v2/{}')).toEqual({});
      expect(
        obj.decode('hapag-lloyd://v2/{"action":"test","data":{"content":""}}')
      ).toEqual({
        action: 'test',
        data: {
          content: '',
        },
      });
    });
});
