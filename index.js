function rot( str ) {
  const list1 = './-:?=&%# ZQXJKVWPY abcdefghijklmnopqrstuvwxyz123456789ABCDEFGHILMNORSTU';
  const list2 = 'ZQXJKVWPY ./-:?=&%# 123456789ABCDEFGHILMNORSTUabcdefghijklmnopqrstuvwxyz';

  return str
    .split( '' )
    .map( char => {
      const idx = list1.indexOf( char );
      return idx === -1 ? char : list2[idx];
    } )
    .join( '' );
}

module.exports = { rot: rot, derot: rot };
