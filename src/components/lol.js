
intent ('Search for $(QUERY *(.*))' , ( p ) = > {
  p.play ( Searching for $ { p.QUERY.value } ) ;
  p.play ( { command : ' search ' , query : p.QUERY.value } ) ;
} )
