(this.webpackJsonpmyshelf=this.webpackJsonpmyshelf||[]).push([[0],{18:function(e,a,t){e.exports=t(44)},24:function(e,a,t){},25:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(15),r=t.n(o),c=t(8),s=t.n(c),l=t(16),m=t(2),u=t(3),d=t(5),v=t(4),f=t(6),g=(t(24),function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(i)))).state={term:""},t.onUserInput=function(e){t.setState({term:e.target.value})},t.onFormSubmit=function(e){e.preventDefault(),t.props.onTermSubmit(t.state.term)},t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"search-bar ui segment",style:{marginTop:"20px"}},"Search Books",i.a.createElement("form",{action:"",onSubmit:this.onFormSubmit},i.a.createElement("div",{className:"ui fluid action input"},i.a.createElement("input",{type:"text",placeholder:"Search...",value:this.state.term,onChange:this.onUserInput}),i.a.createElement("button",{className:"ui icon button"},i.a.createElement("i",{className:"search icon"})))))}}]),a}(i.a.Component)),E=(t(25),function(e){var a=e.book,t=e.onBookSelect;return a.volumeInfo.imageLinks?i.a.createElement("div",{onClick:function(){return t(a)},className:"item"},i.a.createElement("img",{src:a.volumeInfo.imageLinks.thumbnail,alt:a.volumeInfo.title,className:"ui middle aligned tiny image"}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},a.volumeInfo.title),i.a.createElement("div",{className:"meta"},a.volumeInfo.authors),i.a.createElement("div",{className:"ui tiny star rating","data-rating":"3","data-max-rating":"5"},"Average Rating: ",a.volumeInfo.averageRating," / 5"))):i.a.createElement("div",{onClick:function(){return t(a)},className:"item"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},a.volumeInfo.title),i.a.createElement("div",{className:"meta"},a.volumeInfo.authors),i.a.createElement("div",{className:"ui tiny star rating","data-rating":"3","data-max-rating":"5"},"Average Rating: ",a.volumeInfo.averageRating," / 5")))}),N=function(e){var a=e.books,t=e.onBookSelect,n=a.map((function(e){return i.a.createElement(E,{key:e.id,book:e,onBookSelect:t})}));return i.a.createElement("div",{className:"ui relaxed divided list"},n)},h=function(e){var a=e.book;return a?a.volumeInfo.imageLinks?i.a.createElement("div",{className:"book-detail"},i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"three wide column"},i.a.createElement("img",{src:a.volumeInfo.imageLinks.thumbnail,alt:a.volumeInfo.title,className:"ui middle aligned large image"})),i.a.createElement("div",{className:"thirteen wide column"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},a.volumeInfo.title),i.a.createElement("div",{className:"ui tiny star rating","data-rating":"3","data-max-rating":"5"},"Average Rating: ",a.volumeInfo.averageRating," / 5"),i.a.createElement("div",{className:"meta"},a.volumeInfo.authors),i.a.createElement("p",{className:""},a.volumeInfo.description)))))):i.a.createElement("div",{className:"book-detail"},i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"three wide column"}),i.a.createElement("div",{className:"thirteen wide column"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},a.volumeInfo.title),i.a.createElement("div",{className:"ui tiny star rating","data-rating":"3","data-max-rating":"5"},"Average Rating: ",a.volumeInfo.averageRating," / 5"),i.a.createElement("div",{className:"meta"},a.volumeInfo.authors),i.a.createElement("p",{className:""},a.volumeInfo.description)))))):i.a.createElement("div",{className:""},"Loading...")},b=t(17),k=t.n(b).a.create({baseURL:"https://www.googleapis.com",params:{key:"AIzaSyBIZBpSccNpUU7trBZnG8RkmA9_L97L1II",maxResults:5}}),p=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(v.a)(a).call(this,e))).state={books:[],selectedBook:null,bookISBN:""},t.onTermSubmit=function(){var e=Object(l.a)(s.a.mark((function e(a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("/books/v1/volumes",{params:{q:a}});case 2:n=e.sent,t.setState({books:n.data.items,selectedBook:n.data.items[0],bookISBN:"".concat(n.data.items[0].volumeInfo.industryIdentifiers[0].identifier)}),window.initialize("".concat(n.data.items[0].volumeInfo.industryIdentifiers[0].identifier));case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),t.onBookSelect=function(e){t.setState({selectedBook:e,bookISBN:"".concat(e.volumeInfo.industryIdentifiers[0].identifier),pdf:e.accessInfo.webReaderLink}),window.initialize("".concat(e.volumeInfo.industryIdentifiers[0].identifier))},t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.onTermSubmit({term:"top books of the month"}),console.log(window.windowISBN)}},{key:"componentDidUpdate",value:function(){console.log(window.windowISBN),console.log(window.viewer)}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui container app"},i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{id:"searchbar",className:"ui row"},i.a.createElement("div",{className:"fourteen wide column"},i.a.createElement(g,{onTermSubmit:this.onTermSubmit}))),i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement("div",{id:"viewerCanvas",src:this.state.bookISBN,style:{width:"100%",height:"60%"},className:"row"},"Preview"),i.a.createElement("div",{className:"",style:{marginTop:"2%"}},i.a.createElement(h,{book:this.state.selectedBook}))),i.a.createElement("div",{className:"five wide column"},i.a.createElement(N,{books:this.state.books,onBookSelect:this.onBookSelect})))))}}]),a}(i.a.Component);r.a.render(i.a.createElement(p,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.fed9833a.chunk.js.map