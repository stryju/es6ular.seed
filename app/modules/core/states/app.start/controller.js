export default class {
  // @ngInject
  constructor( VAL ) {
    this.title = 'this is start state';

    this.changeTitle = ( title ) => {
      if ( !title ) {
        return this.changeTitle( 'some random title : ' + randomElement( VAL ) );
      }

      this.title = title;
    };
  }
}

function randomElement( collection ) {
  let index = Math.random() * ( collection.length - 1 );

  return collection[ index >> 0 ];
}
