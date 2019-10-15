import React from 'react';
import photo from '../static/img/all_the_light.jpg';

class BookDetail extends React.Component {
    render() {
        return (
            <div className="book-detail">
                <div className="ui grid">
                    <div id="viewerCanvas" style={{width: '600px', height: '500px'}} className="row">
                        Preview
                    </div>
                    <div className="row">
                        <div className="three wide column">
                            <img src={photo} alt="book thumbnail" className="ui middle aligned large image"/>
                        </div>
                        <div className="thirteen wide column">
                        <div className="content">
                            <div className="header">All the Light We Cannot See</div>
                            <div className="meta">Anthony Doerr</div>
                            <p className="">
                            From the highly acclaimed, multiple award-winning Anthony Doerr, the stunningly beautiful instant New York Times bestseller about a blind French girl and a German boy whose paths collide in occupied France as both try to survive the devastation of World War II. Marie-Laure lives in Paris near the Museum of Natural History, where her father works. When she is twelve, the Nazis occupy Paris and father and daughter flee to the walled citadel of Saint-Malo, where Marie-Laure’s reclusive great uncle lives in a tall house by the sea. With them they carry what might be the museum’s most valuable and dangerous jewel. In a mining town in Germany, Werner Pfennig, an orphan, grows up with his younger sister, enchanted by a crude radio they find that brings them news and stories from places they have never seen or imagined. Werner becomes an expert at building and fixing these crucial new instruments and is enlisted to use his talent to track down the resistance. Deftly interweaving the lives of Marie-Laure and Werner, Doerr illuminates the ways, against all odds, people try to be good to one another. 
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default BookDetail;