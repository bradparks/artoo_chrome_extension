var urls = ['your image search criteria', 'search two'];

artoo.ajaxSpider(
  function(i) {
    return 'http://images.search.yahoo.com/search/images;_ylt=AwrB8qFj_01VFysALBWLuLkF;_ylc=X1MDOTYwNTc0ODMEX3IDMgRiY2sDMmE5dGQ2cDl0ajk1MiUyNmIlM0Q0JTI2ZCUzRHVsSVQuTmxwWUVKaHNQSGpONVFpOWMxM3o1YndHdUFONS5ISHV3LS0lMjZzJTNEYTAlMjZpJTNEbFdwVW5uTnpYampNaC5ObnJLYnIEZnIDBGdwcmlkA0NHN3RWckdQUXlXR0N4UlRKanJPdkEEbXRlc3RpZANudWxsBG5fc3VnZwMwBG9yaWdpbgNpbWFnZXMuc2VhcmNoLnlhaG9vLmNvbQRwb3MDMARwcXN0cgMEcHFzdHJsAwRxc3RybAM0NQRxdWVyeQMzZCBIZWxpY29wdGVyIFNpbXVsYXRvciAoMTk4NykoU2llcnJhIE9ubGluZSkEdF9zdG1wAzE0MzExNzUwMTcEdnRlc3RpZANudWxs?gprid=CG7tVrGPQyWGCxRTJjrOvA&pvid=EqJT0DY5LjElJ602U9mkohJ_MjQuOQAAAABmLeSe&fr2=sb-top-images.search.yahoo.com&ei=UTF-8&iscqry=&fr=sfp&p=' + urls[i];
  },
  {
    process: function(data, i) {
	  ret = [$(data).find('#yschsp').val()];
	  
	  $.each($(data).find('li[data-bns="API.YAlgo"] a img'), function(k,v) { 
	     var src = $(v).attr('src');  
	     if (typeof(src) != 'undefined' && src.indexOf("ff_icon-compressed.png") == -1) { 
	        ret.push( src ); 
		 }
	  });  
      return [ ret ];
    },
    jquerify: false,
    throttle: 0 
  },
  function (data) {
     artoo.saveCsv(data);
  }
);
